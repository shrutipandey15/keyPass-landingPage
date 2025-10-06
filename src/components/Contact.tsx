import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, MessageSquare, Users, Newspaper, Clock, MapPin } from "lucide-react";

export function Contact() {
  const contactInfo = {
    email: "hello@keypass.com",
    responseTime: "12-24 hours",
    locations: ["India", "Netherlands"]
  };

  const [inquiryType, setInquiryType] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - could integrate with your backend or open email client
    const formData = new FormData(e.target as HTMLFormElement);
    const subject = formData.get('subject') || 'KeyPass Inquiry';
    const message = formData.get('message') || '';
    const firstName = formData.get('firstName') || '';
    const lastName = formData.get('lastName') || '';
    const email = formData.get('email') || '';
    
    const emailBody = `From: ${firstName} ${lastName} (${email})%0A%0AInquiry Type: ${inquiryType}%0A%0AMessage:%0A${message}`;
    window.open(`mailto:${contactInfo.email}?subject=${subject}&body=${emailBody}`, '_blank');
  };

  return (
    <section id="contact" className="px-6 py-24 bg-muted/30" aria-label="Contact Us">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-4xl">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about KeyPass? Want to join our beta program? We're here to help.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-4">Send us a message</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm">
                        First Name *
                      </label>
                      <Input 
                        id="firstName"
                        name="firstName"
                        placeholder="John" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm">
                        Last Name *
                      </label>
                      <Input 
                        id="lastName"
                        name="lastName"
                        placeholder="Doe" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">
                      Email Address *
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className="text-sm">
                      Inquiry Type *
                    </label>
                    <Select value={inquiryType} onValueChange={setInquiryType} required>
                      <SelectTrigger id="inquiryType">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Questions</SelectItem>
                        <SelectItem value="beta">Beta Program</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="business">Business Inquiry</SelectItem>
                        <SelectItem value="press">Press & Media</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm">
                      Subject *
                    </label>
                    <Input 
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm">
                      Message *
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                      required 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                  >
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    By submitting this form, you agree to our privacy policy. We'll only use your information to respond to your inquiry.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-4">Other ways to reach us</h3>
              <p className="text-muted-foreground mb-6">
                Choose the best way to get in touch based on your needs.
              </p>
            </div>

            {/* Main Contact */}
            <Card className="group hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl mb-2">Email Us</h4>
                    <p className="text-muted-foreground mb-4">
                      For all inquiries - beta program, support, partnerships, or general questions
                    </p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-xl text-primary hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    Response within {contactInfo.responseTime}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Team Info */}
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Global Team
                </CardTitle>
                <CardDescription>
                  Our team operates from India and the Netherlands, supporting customers worldwide. Free global shipping included with beta program.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="outline">🇮🇳 India</Badge>
                    <Badge variant="outline">🇳🇱 Netherlands</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Global Shipping</Badge>
                    <Badge variant="outline">Beta Support</Badge>
                    <Badge variant="outline">English</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Beta CTA */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg mb-2">Ready to join the beta?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Skip the form and apply directly for beta access. Only 30 units available.
                </p>
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={() => {
                    // Scroll to beta section
                    document.getElementById('beta-program')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Apply for Beta Access
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}