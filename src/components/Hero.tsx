import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 gradient-subtle"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in duration-1000">
          {/* Profile Photo */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full gradient-primary blur-xl opacity-50 animate-pulse"></div>
            <img
              src={profilePhoto}
              alt="Mathusha Sivaananthan"
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-background shadow-2xl"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Mathusha Sivaananthan
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              AI Engineer & Full-Stack Developer
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Engineering graduate specializing in Artificial Intelligence, Large Language Models, 
              and full-stack development. Passionate about building intelligent systems that solve real-world problems.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="gradient-primary text-white hover:opacity-90 shadow-lg"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/mathushasiva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://linkedin.com/in/mathusha-sivaananthan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className="mt-8 animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
