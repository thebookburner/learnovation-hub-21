import { motion } from "framer-motion";
import { UserRound, Rocket, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const PersonalIntro = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/cc7e3933-325f-45b1-9798-ed58f18bf45d.png')] opacity-10 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserRound className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Meet Your Innovation Partner
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-primary/10 rounded-lg p-8 mb-8"
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              With over a decade of experience in digital innovation and strategic consulting, I help organizations and individuals navigate the complexities of digital transformation. My approach combines technical expertise with creative thinking to deliver solutions that drive real impact.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you're looking to revolutionize your digital presence, develop innovative products, or foster a culture of continuous learning, I'm here to guide you through the journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule a Consultation
              <Rocket className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Get in Touch
              <Mail className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};