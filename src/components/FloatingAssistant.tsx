import { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const FloatingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-50 bg-gradient-gold text-white p-4 rounded-full shadow-gold-lg hover:shadow-glow transition-all duration-500 hover:scale-110 group animate-fade-in"
        >
          <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-gold rounded-full animate-glow-pulse" />
          <div className="absolute inset-0 rounded-full border-2 border-gold-light/0 group-hover:border-gold-light/50 group-hover:scale-125 transition-all duration-500" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-96 max-w-[calc(100vw-4rem)] bg-white rounded-2xl shadow-elegant border border-gold/20 overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-gold text-white p-4 flex items-center justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light/0 via-gold-light/20 to-gold-light/0 animate-shine" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                <Sparkles className="w-6 h-6 animate-twinkle" />
                <div className="absolute inset-0 animate-glow-pulse" />
              </div>
              <div>
                <h3 className="font-display text-lg">Jewelry Consultant</h3>
                <p className="text-xs opacity-90 font-body">Online • Ready to assist</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded-full transition-all duration-300 relative z-10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 h-80 overflow-y-auto bg-gradient-to-b from-ivory/30 to-white">
            <div className="flex gap-3 animate-fade-in">
              <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-soft border border-gold/10">
                <p className="text-sm text-foreground font-body">
                  Welcome to Meenakshi Jewellers! ✨
                </p>
                <p className="text-sm text-foreground font-body mt-2">
                  I'm here to help you find the perfect piece. Are you looking for:
                </p>
                <div className="mt-3 space-y-2">
                  <button className="block w-full text-left px-3 py-2 bg-gradient-white-gold hover:bg-gradient-gold hover:text-white rounded-lg transition-all duration-300 text-sm font-body border border-gold/20">
                    💍 Engagement Rings
                  </button>
                  <button className="block w-full text-left px-3 py-2 bg-gradient-white-gold hover:bg-gradient-gold hover:text-white rounded-lg transition-all duration-300 text-sm font-body border border-gold/20">
                    👑 Bridal Collection
                  </button>
                  <button className="block w-full text-left px-3 py-2 bg-gradient-white-gold hover:bg-gradient-gold hover:text-white rounded-lg transition-all duration-300 text-sm font-body border border-gold/20">
                    ✨ Gold Jewellery
                  </button>
                  <button className="block w-full text-left px-3 py-2 bg-gradient-white-gold hover:bg-gradient-gold hover:text-white rounded-lg transition-all duration-300 text-sm font-body border border-gold/20">
                    💎 Diamond Collection
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gold/20 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gold/30 rounded-full focus:outline-none focus:border-gold transition-all duration-300 font-body text-sm"
              />
              <Button
                size="icon"
                className="bg-gradient-gold hover:shadow-gold text-white rounded-full transition-all duration-300 hover:scale-110"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2 font-body">
              We typically reply within minutes
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAssistant;
