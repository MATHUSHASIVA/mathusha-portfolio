import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Travel Planner with Agentic Workflow",
    period: "Jul 2025 – Aug 2025",
    description:
      "Developed an AI-powered travel planning application with itinerary generation, real-time weather integration, and intelligent recommendations using agentic workflow architecture for autonomous trip organization.",
    tech: ["LangGraph", "Streamlit", "FastAPI", "Groq", "REST APIs"],
    type: "Individual Project",
    github: "https://github.com/MATHUSHASIVA/AI-Trip-Planner.git",
  },
  {
    title: "AI-Driven Image Transformation Platform",
    period: "Jan 2025 – Feb 2025",
    description:
      "Built intelligent image editing solution with automated enhancement tools, dynamic filters, and instant processing. Showcases AI implementation and comprehensive full-stack development skills.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Cloudinary AI", "Shadcn", "TailwindCSS"],
    type: "Individual Project",
    github: "https://github.com/MATHUSHASIVA/AI-Image-SaaS-Platform.git",
  },
  {
    title: "Production-Grade Financial Analysis & Screening Pipeline",
    period: "Aug 2025 – Sep 2025",
    description:
      "Developed a modular, production-grade financial analysis pipeline for automated stock screening, technical and fundamental metrics calculation, signal detection, and results export, following best practices and robust testing.",
    tech: ["Typer (CLI)", "SQLAlchemy", "yfinance", "Pytest", "UV", "Pydantic", "YAML"],
    type: "Individual Project",
    github: "https://github.com/MATHUSHASIVA/Production-Grade-Financial-Analysis-Pipeline.git",
  },
  {
    title: "AI-Based Power Quality Disturbance Classification",
    period: "May 2024 – Jun 2025",
    description:
      "Applied STFT to transform power signals into spectrum images and developed CNN and CNN with LSTM, achieving 98% highest accuracy for power quality disturbances.",
    tech: ["MATLAB", "STFT", "TensorFlow", "CNN", "LSTM"],
    type: "Group Project",
    github: "https://github.com/MATHUSHASIVA/An-AI-based-Approach-for-Improved-Power-Quality-Disturbances-Detection-and-Classification.git",
  },
  {
    title: "Interactive Image Gallery Web Application",
    period: "Apr 2025 – May 2025",
    description:
      "A scalable web application that allows users to create accounts, upload and organize images, explore galleries, connect with others, and enjoy seamless and secure image sharing with social interaction.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "REST API"],
    type: "Individual Project",
    github: "https://github.com/MATHUSHASIVA/Photo-Sharing-Ap.git",
  },
  {
    title: "Image-to-Story Generator",
    period: "Dec 2024 – Jan 2025",
    description:
      "Built a Streamlit web app that transforms images into narrated short stories by integrating vision, language, and speech processing.",
    tech: ["Streamlit", "BLIP", "Falcon-7B", "gTTS", "Hugging Face"],
    type: "Individual Project",
    github: "https://github.com/MATHUSHASIVA/Image-to-Story-Generator.git",
  },
  {
    title: "AI-Powered Chatbot for Harry Potter Books",
    period: "Mar 2024 – Apr 2024",
    description:
      "Developed a document-aware chatbot using LangChain to answer questions from Harry Potter books. Integrated multiple LLMs for text generation, FAISS for efficient document retrieval, and deployed a user-friendly interface.",
    tech: ["Python", "LangChain", "Hugging Face", "LLMs", "FAISS", "Gradio"],
    type: "Individual Project",
    github: "https://github.com/MATHUSHASIVA/Harry-Potter-Retrieval-Augmented-QA-Chatbot-using-LangChain.git",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-accent/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-8 bg-primary rounded-full"></div>
              <div className="h-1 w-20 gradient-primary rounded-full"></div>
              <div className="h-1 w-8 bg-accent rounded-full"></div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A showcase of innovative solutions in AI, ML, and full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const isAI = project.tech.some(tech => 
                ['LangGraph', 'LangChain', 'Groq', 'LLMs', 'STFT', 'CNN', 'LSTM', 'TensorFlow', 'Hugging Face', 'BLIP', 'Falcon-7B', 'FAISS'].includes(tech)
              );
              
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 hover:scale-[1.03] transition-all duration-500 ease-out border-border/50 flex flex-col group cursor-pointer relative overflow-hidden"
                >
                  {/* Enhanced gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${isAI ? 'from-primary/8 to-accent/8' : 'from-accent/8 to-primary/8'} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`} />
                  
                  {/* Project category indicator */}
                  <div className={`absolute top-0 right-0 w-16 h-16 ${isAI ? 'bg-gradient-to-br from-primary to-accent' : 'bg-gradient-to-br from-accent to-primary'} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} style={{clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)'}}></div>
                  
                  <div className="space-y-6 flex-1 relative z-10">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className={`text-xl font-bold leading-tight transition-all duration-300 ${isAI ? 'group-hover:text-primary' : 'group-hover:text-accent'}`}>
                          {project.title}
                        </h3>
                        {project.github && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className={`h-9 w-9 flex-shrink-0 hover:scale-125 hover:rotate-12 transition-all duration-300 ease-out opacity-70 group-hover:opacity-100 ${isAI ? 'hover:bg-primary/10 hover:text-primary' : 'hover:bg-accent/10 hover:text-accent'}`}
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View project on GitHub"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </Button>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                        <span className="font-medium">{project.period}</span>
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${isAI ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                          {project.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`text-xs px-3 py-1 transition-all duration-300 ease-out cursor-pointer hover:scale-105 ${isAI ? 'border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-primary' : 'border-accent/30 hover:border-accent hover:bg-accent/10 hover:text-accent'}`}
                          style={{
                            animationDelay: `${techIndex * 50}ms`
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
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
