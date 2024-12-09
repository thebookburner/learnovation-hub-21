import { motion } from "framer-motion";
import { Mail, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const SubscriptionOffer = () => {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent opacity-50" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Bell className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Stay Ahead of Innovation
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to receive exclusive insights, industry trends, and practical strategies for digital transformation and innovation.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-primary/10 rounded-lg p-8"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/50 border-primary/20 focus:border-primary"
              />
              <Button size="lg" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                Subscribe Now
                <Mail className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Join our community of innovators and stay updated with the latest insights and opportunities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};