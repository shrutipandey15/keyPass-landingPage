import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Gift, Box, FileText, Zap } from "lucide-react";

const bonuses = [
  {
    icon: Box,
    title: "Printable 3D Case Designs",
    description: "Customize your device with multiple case options"
  },
  {
    icon: FileText,
    title: "Security Starter Pack PDF",
    description: "Practical tips + offline management guide"
  },
  {
    icon: Zap,
    title: "Early Access to Features",
    description: "Offline sync + 2FA support before everyone else"
  }
];

export function FreeBonus() {
  return (
    <section className="px-6 py-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-center gap-2">
            <Gift className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl lg:text-4xl">Free Bonus Pack for Beta Users</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Get these exclusive extras when you join our limited beta program
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="border-2 border-green-200 dark:border-green-800 bg-white/80 dark:bg-card/80">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center mx-auto">
                  <bonus.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">{bonus.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <Button 
            size="lg" 
            className="px-8 py-4 bg-green-600 hover:bg-green-700"
            onClick={() => {
              document.getElementById('beta-program')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Claim Your Free Bonus → Join Beta
          </Button>
          <p className="text-sm text-muted-foreground">
            Limited time offer • Only available for first 30 beta users
          </p>
        </div>
      </div>
    </section>
  );
}