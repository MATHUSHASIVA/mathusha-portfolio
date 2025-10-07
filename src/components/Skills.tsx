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
    <section id="skills" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Technical Skills
            </h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent systems and scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className="p-6 hover:shadow-xl transition-shadow duration-300 border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg gradient-primary">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm px-3 py-1"
                          >
                            {skill}
                          </Badge>
                        ))}
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
