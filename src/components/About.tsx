import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              About Me
            </h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full"></div>
          </div>

          <Card className="p-8 shadow-lg border-border/50">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Engineering graduate from the University of Moratuwa with experience in 
              Artificial Intelligence (AI) and full-stack development. Experienced in 
              hands-on projects involving Large Language Models (LLMs), Generative AI, 
              Computer Vision and Deep Learning. Quick to learn and adapt to emerging 
              technologies, with a strong foundation in practical implementation. Eager 
              to grow professionally and contribute to the industry.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Education</p>
                  <p className="text-sm text-muted-foreground">
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

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-muted-foreground">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:mathushasiva2k@gmail.com"
                    className="text-sm text-primary hover:underline"
                  >
                    mathushasiva2k@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:+94755727989"
                    className="text-sm text-primary hover:underline"
                  >
                    +94 75 572 7989
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
