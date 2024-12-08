import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = element.dataset.speed || "0.5";
        const yPos = -(scrolled * parseFloat(speed));
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent to-background">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/cc7e3933-325f-45b1-9798-ed58f18bf45d.png')] opacity-30 bg-center bg-cover bg-no-repeat parallax" data-speed="0.2">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Unlock Strategic Brilliance,
            <br />
            Master Your Mind
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed parallax" data-speed="0.3">
            Strategic insights, self-directed growth, and technological innovation to fuel your evolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center parallax" data-speed="0.4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Explore My Work
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};