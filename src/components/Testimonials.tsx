import { motion } from "framer-motion";
import { UserRound, Star } from "lucide-react";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Innovation Director",
    company: "TechForward",
    content: "The strategic insights and innovative approaches have transformed how we think about digital transformation. A true partner in our growth journey.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Learning Officer",
    company: "EduTech Global",
    content: "Their unique blend of technical expertise and creative thinking helped us develop a groundbreaking learning platform that exceeded our expectations.",
    rating: 5
  },
  {
    name: "Dr. Emily Watson",
    role: "Research Lead",
    company: "Future Labs",
    content: "The consulting services provided were instrumental in helping us navigate complex digital challenges and implement effective solutions.",
    rating: 5
  }
];

export const Testimonials = () => {
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
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from organizations and individuals who have transformed their approach to innovation and growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserRound className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-gray-300 flex-grow">{testimonial.content}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};