import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo-v2.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 gradient-subtle relative overflow-hidden floating-elements"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-in">
          {/* Profile Photo */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full gradient-primary blur-xl opacity-50 animate-pulse-slow group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse-slow"></div>
            <img
              src={profilePhoto}
              alt="Mathusha Sivaananthan"
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-background shadow-2xl hover:shadow-glow transition-all duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-500"></div>
          </div>

          {/* Name and Title */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-in">
                Mathusha Sivaananthan
              </h1>
              <div className="relative">
                <p className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                  AI Engineer & Full-Stack Developer
                </p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Engineering graduate specializing in 
              <span className="text-primary font-medium"> Artificial Intelligence</span>, 
              <span className="text-accent font-medium"> Large Language Models</span>, 
              and <span className="text-primary font-medium">full-stack development</span>. 
              Passionate about building intelligent systems that solve real-world problems.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button
              variant="default"
              size="lg"
              className="gradient-primary text-white hover:opacity-90 hover:scale-105 hover:shadow-glow shadow-lg transition-all duration-300 group"
              asChild
            >
              <a href="#contact" className="flex items-center">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get in Touch
              </a>
            </Button>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:scale-110 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-lg" 
                asChild
              >
                <a
                  href="https://github.com/mathushasiva"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:scale-110 hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-300 hover:shadow-lg" 
                asChild
              >
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
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 flex flex-col items-center space-y-2">
            <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Scroll Down</span>
            <a
              href="#about"
              className="p-2 rounded-full border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-5 w-5 text-primary animate-bounce group-hover:text-accent group-hover:animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
