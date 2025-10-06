import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

const faqs = [
  {
    question: "How secure is KeyPass?",
    answer: "KeyPass uses AES-256 encryption with no plain-text storage and operates completely offline. Your passwords never leave your device or touch the internet, making it impossible for hackers to access your data remotely."
  },
  {
    question: "What if I lose my device?",
    answer: "Your passwords can be restored from backup on a new KeyPass device. We provide secure backup and recovery methods that don't rely on cloud storage, ensuring your data remains private while being recoverable."
  },
  {
    question: "Does it work on Windows / Mac / Linux?",
    answer: "Yes — KeyPass works universally across all operating systems, including Windows, macOS, and Linux. It even works at BIOS/boot login screens, making it perfect for full-disk encryption passwords."
  },
  {
    question: "Can I DIY assemble it myself?",
    answer: "Absolutely! The Maker Kit comes with all components, PCB, case parts, and detailed assembly instructions. It's a great project for makers and those who want full control over their security device."
  },
  {
    question: "When will the iOS app be available?",
    answer: "We're actively developing the iOS app for Q2 2024. In the meantime, you can use our Wi-Fi captive portal which works perfectly on all mobile devices, including iPhones and iPads."
  },
  {
    question: "How many passwords can KeyPass store?",
    answer: "KeyPass can store up to 1000 password entries with room for usernames, passwords, URLs, and notes. The device has ample storage for most users' needs while maintaining fast performance."
  },
  {
    question: "What's included in the Beta program?",
    answer: "Beta users get the KeyPass device, exclusive Discord community access, digital certificate, free PDF security guide, 3D printable case designs, and early access to all firmware updates including offline sync and 2FA features."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-24 bg-background" aria-label="Frequently Asked Questions">
      <div className="mx-auto max-w-4xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers about KeyPass and our beta program.
          </p>
        </div>

        <div className="mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 data-[state=open]:bg-muted/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center space-y-4">
          <Button 
            size="lg" 
            className="px-8 py-4"
            onClick={() => {
              window.open('mailto:beta@keypass.com?subject=Beta Access Application&body=Hi! I would like to apply for KeyPass beta access.', '_blank');
            }}
          >
            Apply for Beta → Limited Units
          </Button>
          <p className="text-sm text-muted-foreground">
            Still have questions? <a 
              href="mailto:support@keypass.com" 
              className="text-primary hover:underline"
              onClick={(e) => {
                e.preventDefault();
                window.open('mailto:support@keypass.com?subject=KeyPass Inquiry', '_blank');
              }}
            >Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
}