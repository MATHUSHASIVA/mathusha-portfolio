import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Get In Touch
            </h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <Card className="p-8 shadow-lg border-border/50">
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="mailto:mathushasiva2k@gmail.com"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="p-3 rounded-lg gradient-primary group-hover:shadow-glow transition-shadow">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-sm text-primary">
                    mathushasiva2k@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+94755727989"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="p-3 rounded-lg gradient-primary group-hover:shadow-glow transition-shadow">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-sm text-primary">+94 75 572 7989</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="p-3 rounded-lg gradient-primary">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-sm text-muted-foreground">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="space-y-3 w-full">
                  <p className="font-semibold">Connect with me</p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:gradient-primary hover:text-white transition-all"
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
                      className="hover:gradient-primary hover:text-white transition-all"
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
          </Card>
        </div>
      </div>
    </section>
  );
}
