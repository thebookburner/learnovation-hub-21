import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface Section {
  id: string;
  title: string;
  ctaText: string;
  ctaAction: string;
  headline?: string;
}

const sections: Section[] = [
  {
    id: "hero",
    title: "Home",
    ctaText: "Start Your Journey",
    ctaAction: "Get Started",
    headline: "Transform Your Vision Into Digital Reality"
  },
  {
    id: "valueProposition",
    title: "Value",
    ctaText: "Discover Your Path",
    ctaAction: "Learn More",
    headline: "Empowering Growth Through Innovation"
  },
  {
    id: "features",
    title: "Features",
    ctaText: "Explore Features",
    ctaAction: "See Features",
    headline: "Comprehensive Digital Solutions"
  },
  {
    id: "philosophy",
    title: "Philosophy",
    ctaText: "Understand Our Approach",
    ctaAction: "Learn More",
    headline: "Our Guiding Principles"
  },
  {
    id: "featuredWork",
    title: "Work",
    ctaText: "See Our Impact",
    ctaAction: "View Projects",
    headline: "Featured Projects"
  },
  {
    id: "resourceHub",
    title: "Resources",
    ctaText: "Access Resources",
    ctaAction: "Browse Now",
    headline: "Resource Hub"
  }
];

export const DynamicNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>(sections[0]);
  const [previousSection, setPreviousSection] = useState<Section>(sections[0]);
  const [morphProgress, setMorphProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle nav transformation
      setIsScrolled(window.scrollY > 100);

      // Find active section
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );

      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.3; // 30% into viewport

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            if (activeSection.id !== sections[i].id) {
              setPreviousSection(activeSection);
              setActiveSection(sections[i]);
            }
            
            // Calculate morph progress
            const progress = Math.max(0, Math.min(1, 1 - (rect.top / triggerPoint)));
            setMorphProgress(progress);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    console.log("DynamicNav: Scroll listener added");
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <motion.div
      initial={false}
      animate={{
        height: isScrolled ? "64px" : "80px",
        backgroundColor: isScrolled
          ? "rgba(30, 41, 59, 0.95)"
          : "rgba(30, 41, 59, 0)",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ backdropFilter: isScrolled ? "blur(8px)" : "none" }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <motion.div layout className="flex items-center gap-8">
          <span className="text-xl font-bold text-white">Teach Oneself</span>
          {!isScrolled && (
            <nav className="hidden md:flex gap-6">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center gap-4"
            >
              <motion.div 
                className="relative overflow-hidden h-8"
                style={{ width: "200px" }}
              >
                <motion.span
                  key={activeSection.ctaText}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center text-gray-300"
                >
                  {activeSection.ctaText}
                </motion.span>
              </motion.div>
              
              <motion.div 
                className="relative"
                style={{ 
                  transformOrigin: morphProgress < 0.5 ? "left" : "right"
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, morphProgress * 360, 0]
                }}
                transition={{ duration: 0.5 }}
              >
                <Button 
                  className="bg-primary hover:bg-primary/90 relative overflow-hidden"
                  style={{
                    transform: `scale(${1 + morphProgress * 0.1})`
                  }}
                >
                  <motion.span
                    key={activeSection.ctaAction}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    {activeSection.ctaAction}
                  </motion.span>
                  <ArrowRight className="ml-2 w-4 h-4 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-secondary"
                    initial={{ x: "-100%" }}
                    animate={{ x: `${morphProgress * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};