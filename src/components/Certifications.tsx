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
    <section id="certifications" className="py-20 lg:py-28 gradient-subtle relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Certifications & Learning
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-8 bg-primary rounded-full"></div>
              <div className="h-1 w-20 gradient-primary rounded-full"></div>
              <div className="h-1 w-8 bg-accent rounded-full"></div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Continuous learning in AI, machine learning, and cloud technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => {
              const isAI = cert.title.toLowerCase().includes('machine learning') || 
                          cert.title.toLowerCase().includes('tensorflow') || 
                          cert.title.toLowerCase().includes('ai') ||
                          cert.issuer.includes('DeepLearning.AI');
              
              return (
                <Card
                  key={idx}
                  className="p-8 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out border-border/50 group relative overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${isAI ? 'from-primary/8 to-accent/5' : 'from-accent/8 to-primary/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Certificate type indicator */}
                  <div className={`absolute top-0 right-0 w-12 h-12 ${isAI ? 'bg-primary' : 'bg-accent'} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} style={{clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)'}}></div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="space-y-3">
                      <h3 className={`text-lg font-bold leading-tight transition-colors duration-300 ${isAI ? 'group-hover:text-primary' : 'group-hover:text-accent'}`}>
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground/70 transition-colors duration-300">
                          {cert.issuer}
                        </p>
                        {cert.date && (
                          <>
                            <span className="w-1 h-1 bg-primary rounded-full"></span>
                            <p className="text-xs text-muted-foreground">{cert.date}</p>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="outline" 
                        className={`text-xs px-3 py-1 transition-all duration-300 ${isAI ? 'border-primary/30 group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary' : 'border-accent/30 group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent'}`}
                      >
                        {cert.issuer.split(" ")[0]}
                      </Badge>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className={`hover:scale-110 transition-all duration-300 opacity-70 group-hover:opacity-100 ${isAI ? 'hover:bg-primary/10 hover:text-primary' : 'hover:bg-accent/10 hover:text-accent'}`}
                        asChild
                      >
                        <a href={cert.url} target="_blank" rel="noopener noreferrer" aria-label="View certificate">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
