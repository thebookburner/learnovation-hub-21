import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface Section {
  id: string;
  title: string;
  ctaText: string;
  ctaAction: string;
}

const sections: Section[] = [
  {
    id: "hero",
    title: "Home",
    ctaText: "Start Your Journey",
    ctaAction: "Get Started",
  },
  {
    id: "valueProposition",
    title: "Value",
    ctaText: "Discover Your Path",
    ctaAction: "Learn More",
  },
  {
    id: "features",
    title: "Features",
    ctaText: "Explore Features",
    ctaAction: "See Features",
  },
  {
    id: "philosophy",
    title: "Philosophy",
    ctaText: "Understand Our Approach",
    ctaAction: "Learn More",
  },
  {
    id: "featuredWork",
    title: "Work",
    ctaText: "See Our Impact",
    ctaAction: "View Projects",
  },
  {
    id: "resourceHub",
    title: "Resources",
    ctaText: "Access Resources",
    ctaAction: "Browse Now",
  },
];

export const DynamicNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>(sections[0]);

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
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    console.log("DynamicNav: Scroll listener added");
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <motion.div
          layout
          className="flex items-center gap-8"
        >
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
              <span className="text-gray-300">{activeSection.ctaText}</span>
              <Button className="bg-primary hover:bg-primary/90">
                {activeSection.ctaAction}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};