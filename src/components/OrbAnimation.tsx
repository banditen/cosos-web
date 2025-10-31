"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  MessageSquare,
  Lightbulb,
  Sparkles
} from "lucide-react";
import { Card } from "./ui/card";

interface Message {
  id: number;
  text: string;
  angle: number;
  color: string;
  icon: typeof MessageSquare;
}

const initialMessages: Message[] = [
  { id: 1, text: "Meeting notes synthesized", angle: -30, color: "#FF0055", icon: MessageSquare },
  { id: 2, text: "Key insights extracted", angle: 30, color: "#FFD700", icon: Lightbulb },
  { id: 3, text: "Action items ready", angle: 90, color: "#00D4FF", icon: Sparkles },
];

export function OrbAnimation() {
  const [phase, setPhase] = useState<"idle" | "process" | "output">("idle");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    const sequence = async () => {
      // Processing phase
      await new Promise(resolve => setTimeout(resolve, 500));
      setPhase("process");
      
      // Output phase
      await new Promise(resolve => setTimeout(resolve, 1500));
      setPhase("output");
      
      // Reset and loop
      await new Promise(resolve => setTimeout(resolve, 4000));
      setPhase("idle");
    };

    sequence();
    const interval = setInterval(sequence, 6500);
    return () => clearInterval(interval);
  }, []);

  const handleMessageEdit = (id: number, newText: string) => {
    setMessages(prev => 
      prev.map(msg => msg.id === id ? { ...msg, text: newText } : msg)
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[500px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }}
      />
      
      {/* Animation Container */}
      <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Orb */}
      <motion.div
        className="absolute"
        style={{
          width: 128,
          height: 128,
        }}
        animate={{
          filter: phase === "process"
            ? ["drop-shadow(0 0 20px rgba(0, 102, 255, 0.5))", "drop-shadow(0 0 40px rgba(255, 0, 85, 0.5))", "drop-shadow(0 0 20px rgba(0, 102, 255, 0.5))"]
            : "drop-shadow(0 0 20px rgba(0, 102, 255, 0.3))"
        }}
        transition={{
          duration: phase === "process" ? 1.5 : 0.5,
          repeat: phase === "process" ? Infinity : 0,
          ease: "easeInOut"
        }}
      >
        <Image
          src="/Ellipse 1.png"
          alt="Orb"
          width={128}
          height={128}
          className="w-full h-full"
        />
      </motion.div>

      {/* Output Messages */}
      <AnimatePresence>
        {phase === "output" && messages.map((message) => {
          const Icon = message.icon;
          const radians = message.angle * Math.PI / 180;
          const distance = 180;
          const x = Math.cos(radians) * distance;
          const y = Math.sin(radians) * distance;
          
          return (
            <motion.div
              key={message.id}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              animate={{ x, y, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                duration: 0.5,
                delay: message.id * 0.2,
                ease: "easeOut"
              }}
              className="absolute"
            >
              <Card 
                className="p-4 shadow-lg border-0 cursor-pointer hover:shadow-xl transition-shadow"
                style={{ 
                  borderLeft: `3px solid ${message.color}`,
                  minWidth: "200px"
                }}
                onClick={() => setEditingId(message.id)}
              >
                <div className="flex items-start gap-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${message.color}20` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: message.color }} />
                  </div>
                  <div className="flex-1">
                    {editingId === message.id ? (
                      <input
                        type="text"
                        value={message.text}
                        onChange={(e) => handleMessageEdit(message.id, e.target.value)}
                        onBlur={() => setEditingId(null)}
                        autoFocus
                        className="w-full bg-transparent border-none outline-none text-sm"
                      />
                    ) : (
                      <p className="text-sm text-gray-700">{message.text}</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </AnimatePresence>
      </div>
    </div>
  );
}
