import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

type Cert = {
  title: string;
  issuer: string;
  date?: string;
  url: string;
  thumbnail?: string;
};

const certifications: Cert[] = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    date: "2023",
    url: "https://coursera.org/share/62cb09d964a996a18100abd270b22918",
    thumbnail: "https://images.credly.com/images/0f740f0e-52f0-4ff3-bcac-b32ad5c9c2b8/image.png",
  },
  {
    title: "Advanced Machine Learning Algorithms",
    issuer: "Coursera",
    date: "2024",
    url: "https://coursera.org/share/deb29b48b41d7ffa4e6551e08d8ed185",
    thumbnail: "https://images.credly.com/images/0f740f0e-52f0-4ff3-bcac-b32ad5c9c2b8/image.png",
  },
  {
    title: "Introduction to TensorFlow for AI, ML, and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "2024",
    url: "https://coursera.org/share/c18de09b57e3dc84af63c4cb5db344e3",
    thumbnail: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fb/5e29e0bb3911e9ab9e7fb6b618dda9/deeplearningai-logo.png",
  },
  {
    title: "Azure AI Fundamentals: Explore Visual Tools for Machine Learning",
    issuer: "Microsoft Learn",
    date: "2025",
    url: "https://learn.microsoft.com/en-us/training/achievements/learn.wwl.create-no-code-predictive-models-with-azure-machine-learning.trophy?username=MathushaSivaananthan-8245&sharingId=413898810EB935C8",
    thumbnail: "https://docs.microsoft.com/favicon.ico",
  },
  {
    title: "Create Machine Learning Models with Azure ML",
    issuer: "Microsoft Learn",
    date: "2025",
    url: "https://learn.microsoft.com/en-us/training/achievements/learn.wwl.create-machine-learn-models.trophy?username=MathushaSivaananthan-8245&sharingId=413898810EB935C8",
    thumbnail: "https://docs.microsoft.com/favicon.ico",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University / Coursera",
    date: "2024",
    url: "#",
    thumbnail: "https://images.credly.com/images/0f740f0e-52f0-4ff3-bcac-b32ad5c9c2b8/image.png",
  },
  {
    title: "Understanding Prompt Engineering",
    issuer: "DataCamp",
    date: "2024",
    url: "#",
    thumbnail: "https://www.datacamp.com/favicon.ico",
  },
  {
    title: "LangChain for LLM Application Development",
    issuer: "DeepLearning.AI",
    date: "2025",
    url: "#",
    thumbnail: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fb/5e29e0bb3911e9ab9e7fb6b618dda9/deeplearningai-logo.png",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Certifications</h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Selected professional certifications and courses relevant to AI and cloud
              engineering.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <Card
                key={idx}
                className="group p-5 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 ease-out border-border/50 hover:border-primary/30 hover:-translate-y-1 flex flex-col justify-between bg-card/50 backdrop-blur-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden border border-primary/20 shadow-md group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                        {cert.thumbnail ? (
                          <img 
                            src={cert.thumbnail} 
                            alt={`${cert.issuer} logo`} 
                            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110" 
                            onError={(e) => {
                              const img = e.currentTarget as HTMLImageElement;
                              const fallback = img.nextElementSibling as HTMLElement;
                              img.style.display = 'none';
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary" style={{display: cert.thumbnail ? 'none' : 'flex'}}>
                          {cert.issuer[0]}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-1">
                      <h3 className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-medium">{cert.issuer}</p>
                      {cert.date && (
                        <p className="text-xs text-muted-foreground/80">{cert.date}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className="text-xs px-2 py-1 bg-primary/5 border-primary/20 text-primary/80 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300"
                  >
                    {cert.issuer.split("/")[0].trim().split(" ")[0]}
                  </Badge>

                  <Button
                    variant="default"
                    size="sm"
                    className="gradient-primary text-white shadow-md hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-xs px-3 py-1.5 h-auto"
                    asChild
                  >
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${cert.title}`}>
                      <span className="flex items-center gap-1.5">
                        View
                        <ExternalLink className="h-3 w-3" />
                      </span>
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
