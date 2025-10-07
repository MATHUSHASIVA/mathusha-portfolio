import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Experience
            </h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full"></div>
          </div>

          <Card className="p-8 shadow-lg border-border/50">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg gradient-primary flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Data Science - Intern
                    </h3>
                    <p className="text-xl text-primary font-medium">
                      Sampath Bank PLC
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2">
                      <Calendar className="h-4 w-4" />
                      <span>Dec 2023 - Jun 2024</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">
                      Document-Based Question Answering System
                    </h4>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>
                          Developed an end-to-end Retrieval-Augmented Generation (RAG) 
                          pipeline using LangChain, OpenAI GPT-3.5-turbo, and ChromaDB to 
                          enable natural language question-answering over a large corpus of 
                          unstructured technical documents.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>
                          Built a scalable vector database using ChromaDB and OpenAI 
                          embeddings to enable efficient semantic search over technical 
                          documentation, achieving low-latency response times.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>
                          Enhanced retrieval precision and diversity using Marginal Relevance 
                          (MMR) with tunable parameters, and re-ranked results using cosine 
                          similarity to improve answer grounding and traceability.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>
                          Evaluated system performance using RAGAS, measuring key metrics 
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
          </Card>
        </div>
      </div>
    </section>
  );
}
