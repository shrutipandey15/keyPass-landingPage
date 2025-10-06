import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 px-6 py-16" role="contentinfo" aria-label="Site Footer">
      <div className="mx-auto max-w-7xl">
        {/* Newsletter signup */}
        <div className="text-center mb-16">
          <h3 className="text-2xl mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get notified about official launch & updates
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1"
              id="newsletter-email"
            />
            <Button
              onClick={() => {
                const email = (document.getElementById('newsletter-email') as HTMLInputElement)?.value;
                if (email && email.includes('@')) {
                  alert('Thank you for subscribing! You\'ll receive updates about KeyPass.');
                  (document.getElementById('newsletter-email') as HTMLInputElement).value = '';
                } else {
                  alert('Please enter a valid email address.');
                }
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Footer content */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h4 className="text-lg">KeyPass</h4>
            <p className="text-sm text-muted-foreground">
              Your offline USB password vault. Secure, simple, and always private.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="w-8 h-8"
                onClick={() => window.open('https://twitter.com/keypass', '_blank')}
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="w-8 h-8"
                onClick={() => window.open('https://instagram.com/keypass', '_blank')}
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="w-8 h-8"
                onClick={() => window.open('https://linkedin.com/company/keypass', '_blank')}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="w-8 h-8"
                onClick={() => window.open('mailto:hello@keypass.com', '_blank')}
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4>Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a></li>
              <li><a href="#beta-program" className="hover:text-foreground transition-colors">Beta Program</a></li>
              <li><a href="#future" className="hover:text-foreground transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4>Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); alert('Documentation will be available after beta launch. For now, contact us for help!'); }}>Documentation</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); alert('Community forum coming soon! Join our beta program to get early access.'); }}>Community</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4>Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#contact" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); alert('Privacy policy coming soon. We are committed to your privacy - no cloud, no tracking.'); }}>Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); alert('Terms & Conditions will be available before final launch.'); }}>Terms & Conditions</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); alert('Free worldwide shipping included in beta program! Contact us for details.'); }}>Shipping Policy</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors" onClick={(e) => { e.preventDefault(); alert('30-day satisfaction guarantee. Contact us for return details.'); }}>Returns</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 KeyPass. All rights reserved.</p>
          <p>Designed and built with privacy in mind.</p>
        </div>
      </div>
    </footer>
  );
}