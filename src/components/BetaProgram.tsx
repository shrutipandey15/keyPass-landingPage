import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./utility/ImageWithFallback";
import { Check, Users, Gift, FileText, Box, Zap } from "lucide-react";

const animation2Gif: string = new URL('../public/animation2.gif', import.meta.url).href;

const includedItems = [
  { icon: Box, text: "1 KeyPass USB device (ready to use)" },
  { icon: Badge, text: "Founding Beta Tester certificate (digital)" },
  { icon: Users, text: "Private Discord for beta feedback & community" },
  { icon: FileText, text: "Free Security Starter Pack PDF" },
  { icon: Box, text: "Printable 3D case design" },
  { icon: Zap, text: "Early access to firmware updates (offline sync, BLE, TOTP)" }
];

export function BetaProgram() {
  return (
    <section id="beta-program" className="px-6 py-24 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="destructive" className="px-3 py-1">Limited Beta</Badge>
                <span className="text-sm text-muted-foreground">Only 30 Units</span>
              </div>
              <h2 className="text-3xl lg:text-4xl">Limited Beta - Only 30 Units</h2>
              <p className="text-xl text-muted-foreground">
                Be among the first to experience KeyPass - influence firmware, features, and the final design.
              </p>
            </div>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  What's Included
                  <div className="text-right">
                    <div className="text-2xl">₹1,499 / $18</div>
                    <div className="text-sm text-muted-foreground">includes shipping</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {includedItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8 py-4"
              onClick={() => {
                // Beta application
                window.open('mailto:hello@keypass.com?subject=KeyPass Beta Access Application&body=Hi! I would like to apply for KeyPass beta access.%0A%0APlease let me know about:%0A- Shipping details%0A- Timeline%0A- Next steps%0A%0AThanks!', '_blank');
              }}
            >
              Apply for Beta Access →
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-destructive/5 to-destructive/10 p-8">
              <ImageWithFallback
                src={animation2Gif}
                alt="Beta Program Animation"
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Beta badge overlay */}
            <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
              Beta
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}