import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-8 bg-primary rounded-full"></div>
              <div className="h-1 w-20 gradient-primary rounded-full"></div>
              <div className="h-1 w-8 bg-accent rounded-full"></div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready to bring your ideas to life? I'm available for freelance projects, collaborations, and full-time opportunities.
            </p>
          </div>

          <Card className="p-10 lg:p-12 shadow-2xl border-border/50 hover:shadow-glow/30 transition-all duration-500 hover:border-primary/20 relative overflow-hidden group">
            {/* Card background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="grid sm:grid-cols-2 gap-8">
                <a
                  href="mailto:mathushasiva2k@gmail.com"
                  className="flex items-start gap-5 p-6 rounded-xl hover:bg-primary/5 hover:scale-105 transition-all duration-300 group/item border border-transparent hover:border-primary/20"
                >
                  <div className="p-4 rounded-xl gradient-primary group-hover/item:shadow-glow group-hover/item:scale-110 transition-all duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-foreground group-hover/item:text-primary transition-colors duration-300">Email</p>
                    <p className="text-sm text-primary font-medium">
                      mathushasiva2k@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+94755727989"
                  className="flex items-start gap-5 p-6 rounded-xl hover:bg-accent/5 hover:scale-105 transition-all duration-300 group/item border border-transparent hover:border-accent/20"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-r from-accent to-primary group-hover/item:shadow-glow group-hover/item:scale-110 transition-all duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-foreground group-hover/item:text-accent transition-colors duration-300">Phone</p>
                    <p className="text-sm text-accent font-medium">+94 75 572 7989</p>
                  </div>
                </a>

                <div className="flex items-start gap-5 p-6 rounded-xl hover:bg-primary/5 hover:scale-105 transition-all duration-300 group/item border border-transparent hover:border-primary/20">
                  <div className="p-4 rounded-xl gradient-primary group-hover/item:scale-110 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-foreground group-hover/item:text-primary transition-colors duration-300">Location</p>
                    <p className="text-sm text-muted-foreground font-medium">
                      Colombo, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 rounded-xl hover:bg-accent/5 hover:scale-105 transition-all duration-300 group/item border border-transparent hover:border-accent/20">
                  <div className="space-y-4 w-full">
                    <p className="font-bold text-foreground group-hover/item:text-accent transition-colors duration-300">Connect with me</p>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-white hover:border-primary hover:scale-110 hover:shadow-lg transition-all duration-300"
                        asChild
                      >
                        <a
                          href="https://github.com/mathushasiva"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-accent hover:text-white hover:border-accent hover:scale-110 hover:shadow-lg transition-all duration-300"
                        asChild
                      >
                        <a
                          href="https://linkedin.com/in/mathusha-sivaananthan"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
