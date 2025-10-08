import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 gradient-subtle relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-8 bg-primary rounded-full"></div>
              <div className="h-1 w-20 gradient-primary rounded-full"></div>
              <div className="h-1 w-8 bg-accent rounded-full"></div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Transforming AI research into scalable, real-world applications
            </p>
          </div>

          <Card className="p-10 lg:p-12 shadow-2xl border-border/50 hover:shadow-glow/30 transition-all duration-500 hover:border-primary/20 relative overflow-hidden group">
            {/* Card background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-5 rounded-xl gradient-primary flex-shrink-0 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                    <Briefcase className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">
                        Data Science - Intern
                      </h3>
                      <p className="text-xl text-primary font-semibold group-hover:text-accent transition-colors duration-300">
                        Sampath Bank PLC
                      </p>
                      <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium">Dec 2023 - Jun 2024</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-lg font-bold text-accent group-hover:text-primary transition-colors duration-300">
                        Document-Based Question Answering System
                      </h4>
                      <ul className="space-y-4 text-foreground/80">
                        <li className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300 group/item">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <span className="leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                            Developed an end-to-end <span className="text-primary font-semibold">Retrieval-Augmented Generation (RAG)</span> 
                            pipeline using <span className="text-accent font-semibold">LangChain</span>, OpenAI GPT-3.5-turbo, and ChromaDB to 
                            enable natural language question-answering over a large corpus of 
                            unstructured technical documents.
                          </span>
                        </li>
                        <li className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/5 transition-colors duration-300 group/item">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <span className="leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                            Built a scalable <span className="text-accent font-semibold">vector database</span> using ChromaDB and OpenAI 
                            embeddings to enable efficient semantic search over technical 
                            documentation, achieving low-latency response times.
                          </span>
                        </li>
                        <li className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300 group/item">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <span className="leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                            Enhanced retrieval precision and diversity using <span className="text-primary font-semibold">Marginal Relevance 
                            (MMR)</span> with tunable parameters, and re-ranked results using cosine 
                            similarity to improve answer grounding and traceability.
                          </span>
                        </li>
                        <li className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/5 transition-colors duration-300 group/item">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <span className="leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                            Evaluated system performance using <span className="text-accent font-semibold">RAGAS</span>, measuring key metrics 
                            including answer relevance, context precision, and context recall 
                            to iteratively refine the pipeline and ensure high-quality, 
                            grounded responses.
                          </span>
                        </li>
                      </ul>
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
