import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Smartphone, RefreshCw, Key, Globe, Shield, Palette } from "lucide-react";

const futureFeatures = [
  {
    icon: RefreshCw,
    title: "Offline Cross-Device Sync",
    description: "Safely sync passwords between your devices without cloud",
    status: "Coming Q2 2024"
  },
  {
    icon: Key,
    title: "Password + Passkey Hybrid",
    description: "Combine traditional passwords with modern passkeys",
    status: "Coming Q3 2024"
  },
  {
    icon: Smartphone,
    title: "iOS App",
    description: "Full mobile app support with sleek interface",
    status: "Coming Q4 2024"
  },
  {
    icon: Globe,
    title: "More Keyboard Layouts",
    description: "International support for everyone",
    status: "Coming Q1 2025"
  },
  {
    icon: Shield,
    title: "Advanced 2FA Integration",
    description: "TOTP + hardware 2FA in one device",
    status: "Coming Q2 2025"
  },
  {
    icon: Palette,
    title: "Custom Themes/UI",
    description: "More interactive, personalized experience",
    status: "Coming Q3 2025"
  }
];

export function FutureFeatures() {
  return (
    <section id="future" className="px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl">The Future of KeyPass</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your beta feedback will help shape these upcoming features.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {futureFeatures.map((feature, index) => (
            <Card key={index} className="border-2 border-dashed border-muted-foreground/20 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline visualization */}
        <div className="mt-16 relative">
          <div className="text-center mb-8">
            <h3 className="text-xl mb-4">Development Roadmap</h3>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Beta Testing</span>
              <div className="w-8 border-t border-dashed border-muted-foreground/50"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Feature Updates</span>
              <div className="w-8 border-t border-dashed border-muted-foreground/50"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Final Launch</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="px-8 py-4"
            onClick={() => {
              document.getElementById('beta-program')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join the Beta → Shape the Future of Password Security
          </Button>
        </div>
      </div>
    </section>
  );
}