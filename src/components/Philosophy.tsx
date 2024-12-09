import { motion } from "framer-motion";
import { Brain, Lightbulb, Users, Target, Rocket } from "lucide-react";

const philosophyPoints = [
  {
    icon: Brain,
    title: "Strategic Innovation",
    description: "Transforming challenges into opportunities through data-driven insights and creative problem-solving"
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "Delivering measurable impact and sustainable growth through proven methodologies"
  },
  {
    icon: Users,
    title: "Collaborative Growth",
    description: "Building lasting partnerships that drive mutual success and innovation"
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "Crafting unique approaches that set your brand apart in the digital landscape"
  },
  {
    icon: Rocket,
    title: "Future-Ready",
    description: "Preparing organizations for tomorrow's challenges with cutting-edge strategies"
  }
];

export const Philosophy = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/cc7e3933-325f-45b1-9798-ed58f18bf45d.png')] opacity-10 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Our Approach to Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine strategic thinking with creative execution to deliver transformative digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <point.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-gray-400">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};