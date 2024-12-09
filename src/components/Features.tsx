import { Brain, Code, Rocket, Users, Palette, ChartBar } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

const features = [
  {
    title: "Digital Strategy",
    description: "Data-driven strategies to maximize your digital presence and ROI",
    icon: ChartBar,
  },
  {
    title: "Creative Design",
    description: "Stunning visuals and engaging user experiences that captivate your audience",
    icon: Palette,
  },
  {
    title: "Technical Excellence",
    description: "Robust development solutions built with cutting-edge technologies",
    icon: Code,
  },
  {
    title: "Growth Partnership",
    description: "Long-term collaboration focused on sustainable business growth",
    icon: Rocket,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Comprehensive Digital Solutions
        </h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={item}>
              <Card 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/5 backdrop-blur-sm border-primary/10 group"
              >
                <feature.icon className="h-12 w-12 mb-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};