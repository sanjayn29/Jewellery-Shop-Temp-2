import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline: "border border-gold/30 bg-transparent text-foreground hover:bg-gold/10 hover:border-gold/60 rounded-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "text-foreground hover:bg-muted hover:text-foreground rounded-md",
        link: "text-gold underline-offset-4 hover:underline",
        gold: "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-primary-foreground font-display tracking-widest hover:shadow-gold-lg transform hover:-translate-y-0.5",
        "gold-outline": "border border-gold/40 bg-transparent text-gold hover:bg-gold/10 hover:border-gold font-display tracking-wide",
        platinum: "bg-platinum text-charcoal font-display tracking-widest hover:bg-platinum/90 hover:shadow-lg",
        luxury: "relative overflow-hidden border border-gold/30 bg-charcoal/50 text-foreground backdrop-blur-sm font-display tracking-wide hover:border-gold/60 hover:shadow-gold",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-10 text-base",
        xl: "h-14 px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
