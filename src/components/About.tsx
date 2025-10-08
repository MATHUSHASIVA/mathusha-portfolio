import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-8 bg-primary rounded-full"></div>
              <div className="h-1 w-20 gradient-primary rounded-full"></div>
              <div className="h-1 w-8 bg-accent rounded-full"></div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating intelligent solutions that bridge the gap between complex AI concepts and real-world applications.
            </p>
          </div>

          <Card className="p-8 lg:p-12 shadow-2xl border-border/50 hover:shadow-glow/50 transition-all duration-500 hover:border-primary/20 relative overflow-hidden group">
            {/* Card background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <p className="text-lg text-foreground/90 leading-relaxed mb-8 text-center sm:text-left">
                Engineering graduate from the <span className="text-primary font-semibold">University of Moratuwa</span> with experience in 
                <span className="text-accent font-semibold"> Artificial Intelligence (AI)</span> and full-stack development. Experienced in 
                hands-on projects involving <span className="text-primary font-semibold">Large Language Models (LLMs)</span>, 
                <span className="text-accent font-semibold">Generative AI</span>, 
                Computer Vision and Deep Learning. Quick to learn and adapt to emerging 
                technologies, with a strong foundation in practical implementation. Eager 
                to grow professionally and contribute to the industry.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300 group/item">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors duration-300">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover/item:text-primary transition-colors duration-300">Education</p>
                    <p className="text-sm text-muted-foreground font-medium">
                      University of Moratuwa
                    </p>
                    <p className="text-sm text-muted-foreground">
                      B.Sc. Engineering (Honors)
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Jan 2021 - Jul 2025
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/5 transition-colors duration-300 group/item">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover/item:bg-accent/20 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover/item:text-accent transition-colors duration-300">Location</p>
                    <p className="text-sm text-muted-foreground font-medium">
                      Colombo, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300 group/item">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover/item:text-primary transition-colors duration-300">Email</p>
                    <a
                      href="mailto:mathushasiva2k@gmail.com"
                      className="text-sm text-primary hover:text-accent hover:underline transition-colors duration-300 font-medium"
                    >
                      mathushasiva2k@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/5 transition-colors duration-300 group/item">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover/item:bg-accent/20 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover/item:text-accent transition-colors duration-300">Phone</p>
                    <a
                      href="tel:+94755727989"
                      className="text-sm text-accent hover:text-primary hover:underline transition-colors duration-300 font-medium"
                    >
                      +94 75 572 7989
                    </a>
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
