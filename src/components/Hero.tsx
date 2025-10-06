import { Button } from "./ui/button";
import { ImageWithFallback } from "./utility/ImageWithFallback";

const animationGif: string = new URL('../public/animation.gif', import.meta.url).href;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/30 px-6 pt-14 pb-20" aria-label="KeyPass Introduction">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl tracking-tight">
                KeyPass - Your Offline USB Password Vault
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Secure your passwords without the cloud. Plug it in, type instantly, stay safe.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="px-8 py-4"
                onClick={() => {
                  // Scroll to beta section
                  document.getElementById('beta-program')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Preorder Early Bird Units →
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4"
                onClick={() => {
                  // Scroll to how it works section
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Watch Demo Video
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Only 30 Beta Units Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Ships Worldwide</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 p-8">
              <ImageWithFallback
                src={animationGif}
                alt="KeyPass USB Device Animation"
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}