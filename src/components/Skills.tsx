import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code, 
  Database, 
  Wrench, 
  Cpu, 
  Globe, 
  Palette,
  BookOpen 
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-blue-500 to-purple-600",
    skills: [
      "Python",
      "JavaScript (ES6+)",
      "TypeScript",
      "Java",
      "C++",
      "SQL",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    skills: [
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Scikit-learn",
      "YOLO",
      "Pandas",
      "NumPy",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "RAG",
      "Fine-tuning",
    ],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    color: "from-green-500 to-teal-600",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Streamlit",
      "FastAPI",
      "Flask",
      "REST API",
      "JWT Authentication",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    color: "from-orange-500 to-red-600",
    skills: [
      "MongoDB",
      "ChromaDB",
      "Firebase",
      "PostgreSQL",
      "FAISS",
      "Vector Databases",
      "SMTP Integration",
    ],
  },
  {
    title: "Embedded Systems & IoT",
    icon: Cpu,
    color: "from-cyan-500 to-blue-600",
    skills: [
      "Arduino",
      "NI DAQ",
      "LabVIEW",
      "Sensor Data Acquisition",
      "Real-Time Processing",
      "MATLAB",
    ],
  },
  {
    title: "Design & Media",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    skills: [
      "Figma (UI/UX)",
      "Video Editing",
      "Photography",
      "Flyer Design",
      "Color Grading",
      "Responsive UI Design",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Skills & Expertise
            </h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning AI, full-stack development, embedded systems, and creative design
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className="group p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 ease-out border-border/50 hover:border-primary/30 hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs px-2.5 py-1 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-default"
                        >
                          {skill}
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
