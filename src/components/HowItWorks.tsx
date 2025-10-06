import { Button } from "./ui/button";
import { ImageWithFallback } from "./utility/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const animation1Gif: string = new URL('../public/animation1.gif', import.meta.url).href;

const steps = [
  {
    number: "01",
    title: "Plug it in",
    description: "Insert KeyPass into any USB port."
  },
  {
    number: "02", 
    title: "Connect & Control",
    description: "Open the app or captive portal on your phone."
  },
  {
    number: "03",
    title: "Select or Add Password", 
    description: "Pick an existing entry or create a new one."
  },
  {
    number: "04",
    title: "Type Instantly",
    description: "KeyPass types your password securely - no copying, no cloud."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl">How KeyPass Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, secure, and lightning fast. See how easy it is to get started.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground mt-4 hidden lg:block" />
                )}
              </div>
            ))}
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
              {/* TODO: Replace with GIF animation showing step-by-step workflow */}
              <ImageWithFallback
                src={animation1Gif}
                alt="KeyPass Workflow Animation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-4"
            onClick={() => {
              // Mock demo video action
              alert('Demo video coming soon! Join the beta to be the first to see it.');
            }}
          >
            Watch Demo Video →
          </Button>
        </div>
      </div>
    </section>
  );
}