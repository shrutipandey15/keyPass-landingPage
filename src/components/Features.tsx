import { Shield, Monitor, Smartphone, Wrench, Wifi, Zap } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    icon: Shield,
    title: "Offline by Design",
    description: "Works 100% without internet. No cloud, no leaks."
  },
  {
    icon: Monitor,
    title: "Cross-Device Compatible",
    description: "Use on Windows, Mac, Linux, and BIOS login."
  },
  {
    icon: Smartphone,
    title: "Password + 2FA Hybrid",
    description: "TOTP integration coming soon - one device, both security methods."
  },
  {
    icon: Wrench,
    title: "DIY Friendly",
    description: "Maker edition available - assemble your own with included parts."
  },
  {
    icon: Wifi,
    title: "BLE & Wi-Fi Control",
    description: "Tap your phone or captive portal to manage entries instantly."
  },
  {
    icon: Zap,
    title: "Simple UX",
    description: "Minimal interface, plug-and-play, no apps required."
  }
];

export function Features() {
  return (
    <section id="features" className="px-6 py-24 bg-background" aria-label="KeyPass Features">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl">Why KeyPass?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The most secure password manager you'll ever use - because it never touches the internet.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="px-8 py-4"
            onClick={() => {
              document.getElementById('beta-program')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join the Beta → Only 30 Units Available
          </Button>
        </div>
      </div>
    </section>
  );
}