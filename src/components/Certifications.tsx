import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera / Andrew Ng",
    date: "2024",
    url: "https://www.coursera.org/",
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    url: "https://aws.amazon.com/certification/",
  },
  {
    title: "Hugging Face: Fine-Tuning Transformers",
    issuer: "Hugging Face",
    date: "2024",
    url: "https://huggingface.co/",
  },
  {
    title: "Google Cloud: Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    date: "2025",
    url: "https://cloud.google.com/certification",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Certifications
            </h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Selected professional certifications and courses relevant to AI and cloud engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 ease-out border-border/50 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {cert.issuer.split(" ")[0]}
                  </Badge>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" aria-label="View certificate">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
