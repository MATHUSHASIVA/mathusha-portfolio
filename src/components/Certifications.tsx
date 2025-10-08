import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    date: "",
    url: "https://coursera.org/share/62cb09d964a996a18100abd270b22918",
  },
  {
    title: "Advanced Machine Learning Algorithms",
    issuer: "Coursera",
    date: "",
    url: "https://coursera.org/share/deb29b48b41d7ffa4e6551e08d8ed185",
  },
  {
    title: "Introduction to TensorFlow for AI, ML, and Deep Learning",
    issuer: "DeepLearning.AI / Coursera",
    date: "",
    url: "https://coursera.org/share/c18de09b57e3dc84af63c4cb5db344e3",
  },
  {
    title: "Azure AI Fundamentals: Explore Visual Tools for Machine Learning",
    issuer: "Microsoft Learn",
    date: "",
    url: "https://learn.microsoft.com/en-us/training/achievements/learn.wwl.create-no-code-predictive-models-with-azure-machine-learning.trophy?username=MathushaSivaananthan-8245&sharingId=413898810EB935C8",
  },
  {
    title: "Create Machine Learning Models with Azure ML",
    issuer: "Microsoft Learn",
    date: "",
    url: "https://learn.microsoft.com/en-us/training/achievements/learn.wwl.create-machine-learn-models.trophy?username=MathushaSivaananthan-8245&sharingId=413898810EB935C8",
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
