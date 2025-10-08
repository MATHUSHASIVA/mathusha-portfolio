import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Generative AI & LLMs",
    icon: Brain,
    skills: [
      "LLM Deployment",
      "Generative Models",
      "Prompt Engineering",
      "RAG Architecture",
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Wrench,
    skills: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "LangChain",
      "Ragas",
      "Gradio",
      "Streamlit",
      "FastAPI",
      "Flask",
    ],
  },
  {
    title: "NLP & Vector Databases",
    icon: Database,
    skills: [
      "Text Preprocessing",
      "Tokenization",
      "TF-IDF Similarity",
      "RAG",
      "FAISS",
      "ChromaDB",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Full-Stack Development",
    icon: Code,
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "React",
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Authentication",
      "Responsive UI Design",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 gradient-subtle relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-8 bg-primary rounded-full"></div>
              <div className="h-1 w-20 gradient-primary rounded-full"></div>
              <div className="h-1 w-8 bg-accent rounded-full"></div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A comprehensive toolkit for building intelligent systems and scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isEven = index % 2 === 0;
              return (
                <Card
                  key={category.title}
                  className="p-8 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out border-border/50 group relative overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${isEven ? 'from-primary/5 to-accent/5' : 'from-accent/5 to-primary/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-xl transition-all duration-300 group-hover:scale-110 ${isEven ? 'gradient-primary' : 'bg-gradient-to-r from-accent to-primary'} shadow-lg group-hover:shadow-xl`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1 space-y-6">
                        <h3 className={`text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r ${isEven ? 'group-hover:from-primary group-hover:to-accent' : 'group-hover:from-accent group-hover:to-primary'} group-hover:bg-clip-text transition-all duration-300`}>
                          {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {category.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className={`text-sm px-4 py-2 hover:scale-105 transition-all duration-300 cursor-pointer ${isEven ? 'hover:bg-primary/10 hover:text-primary hover:border-primary/30' : 'hover:bg-accent/10 hover:text-accent hover:border-accent/30'}`}
                              style={{
                                animationDelay: `${skillIndex * 100}ms`
                              }}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
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
