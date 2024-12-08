import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent to-background">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/0750354a-c138-4cb0-ad18-2dff06d6e857.png')] opacity-10 bg-center bg-no-repeat bg-contain" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Teach Oneself
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Empowering individuals through self-directed learning and innovative thinking
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};