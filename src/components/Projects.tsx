import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Production-Grade Financial Analysis & Screening Pipeline",
    period: "Aug 2025 – Sep 2025",
    description:
      "Developed a modular, production-grade financial analysis pipeline for automated stock screening, technical and fundamental metrics calculation, signal detection, and results export, following best practices and robust testing.",
    tech: ["Typer (CLI)", "SQLAlchemy", "yfinance", "Pytest", "UV", "Pydantic", "YAML"],
    type: "Individual Project",
    github: "https://github.com/mathushasiva",
  },
  {
    title: "AI Travel Planner with Agentic Workflow",
    period: "Jul 2025 – Aug 2025",
    description:
      "Developed an AI-powered travel planning application with itinerary generation, real-time weather integration, and intelligent recommendations using agentic workflow architecture for autonomous trip organization.",
    tech: ["LangGraph", "Streamlit", "FastAPI", "Groq", "REST APIs"],
    type: "Individual Project",
    github: "https://github.com/mathushasiva",
  },
  {
    title: "AI-Driven Image Transformation Platform",
    period: "Jan 2025 – Feb 2025",
    description:
      "Built intelligent image editing solution with automated enhancement tools, dynamic filters, and instant processing. Showcases AI implementation and comprehensive full-stack development skills.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Cloudinary AI", "Shadcn", "TailwindCSS"],
    type: "Individual Project",
    github: "https://github.com/mathushasiva",
  },
  {
    title: "AI-Based Power Quality Disturbance Classification",
    period: "May 2024 – Jun 2025",
    description:
      "Applied STFT to transform power signals into spectrum images and developed CNN and CNN with LSTM, achieving 98% highest accuracy for power quality disturbances.",
    tech: ["MATLAB", "STFT", "TensorFlow", "CNN", "LSTM"],
    type: "Group Project",
    github: "https://github.com/mathushasiva",
  },
  {
    title: "Interactive Image Gallery Web Application",
    period: "Apr 2025 – May 2025",
    description:
      "A scalable web application that allows users to create accounts, upload and organize images, explore galleries, connect with others, and enjoy seamless and secure image sharing with social interaction.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "REST API"],
    type: "Individual Project",
    github: "https://github.com/mathushasiva",
  },
  {
    title: "Image-to-Story Generator",
    period: "Dec 2024 – Jan 2025",
    description:
      "Built a Streamlit web app that transforms images into narrated short stories by integrating vision, language, and speech processing.",
    tech: ["Streamlit", "BLIP", "Falcon-7B", "gTTS", "Hugging Face"],
    type: "Individual Project",
    github: "https://github.com/mathushasiva",
  },
  {
    title: "AI-Powered Chatbot for Harry Potter Books",
    period: "Mar 2024 – Apr 2024",
    description:
      "Developed a document-aware chatbot using LangChain to answer questions from Harry Potter books. Integrated multiple LLMs for text generation, FAISS for efficient document retrieval, and deployed a user-friendly interface.",
    tech: ["Python", "LangChain", "Hugging Face", "LLMs", "FAISS", "Gradio"],
    type: "Individual Project",
    github: "https://github.com/mathushasiva",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Projects
            </h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in AI, ML, and full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out border-border/50 flex flex-col group cursor-pointer relative overflow-hidden"
              >
                {/* Gradient overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                
                <div className="space-y-4 flex-1 relative z-10">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 flex-shrink-0 hover:scale-125 hover:rotate-12 hover:bg-primary/10 hover:text-primary transition-all duration-300 ease-out opacity-70 group-hover:opacity-100"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View project on GitHub"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                      <span>{project.period}</span>
                      <span>•</span>
                      <span>{project.type}</span>
                    </div>
                  </div>

                  <p className="text-foreground/80 text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
