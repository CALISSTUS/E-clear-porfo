"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { siteConfig } from "@/data/content";
import { cn } from "@/lib/cn";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const portfolioKnowledge = {
  name: "CALISSTUS",
  realName: "Gabriel Gabriel",
  title: "Creative Developer & Full-Stack Engineer",
  skills: ["Next.js", "React", "TypeScript", "Three.js", "Tailwind CSS", "Node.js", "Python", "Supabase", "MongoDB", "PostgreSQL", "Git", "GitHub", "Docker", "Framer Motion", "GSAP"],
  services: ["Frontend Development", "Backend Development", "Full-Stack Web Development", "UI/UX Design", "API Development", "AI Integration", "Website Optimization"],
  projects: ["Calisstus Luxury Fashion", "G Tablet Music", "A.C Sicat International Manpower", "Luxe Gems Elegance", "AI Chat Assistant", "Pro Task Manager", "Fitness Tracker Mobile", "Premium UI Component Kit"],
  email: "gabrielgabriel9727@gmail.com",
  location: "Remote · Worldwide",
  availability: "Open to freelance & full-time",
  github: "https://github.com/gabrieldev",
};

function generateAIResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();

  // Greetings
  if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
    return `Hello! I'm the AI assistant for ${portfolioKnowledge.name}'s portfolio. I can tell you about ${portfolioKnowledge.realName}'s skills, projects, services, or answer any questions you might have. How can I help you today?`;
  }

  // About name
  if (lowerMessage.includes("name") || lowerMessage.includes("who are you") || lowerMessage.includes("who is")) {
    return `This portfolio belongs to ${portfolioKnowledge.name} (real name: ${portfolioKnowledge.realName}), a ${portfolioKnowledge.title}. ${portfolioKnowledge.realName} is ${portfolioKnowledge.availability} and works ${portfolioKnowledge.location}.`;
  }

  // About skills
  if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("tech stack")) {
    return `${portfolioKnowledge.realName} specializes in: ${portfolioKnowledge.skills.join(", ")}. They have expertise in frontend development with React and Next.js, backend development with Node.js and Python, and modern tools like Three.js for 3D experiences.`;
  }

  // About services
  if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("what do you do")) {
    return `${portfolioKnowledge.realName} offers the following services: ${portfolioKnowledge.services.join(", ")}. Whether you need a complete web application, UI/UX design, or AI integration, they can help bring your ideas to life.`;
  }

  // About projects
  if (lowerMessage.includes("project") || lowerMessage.includes("portfolio") || lowerMessage.includes("work")) {
    return `${portfolioKnowledge.realName} has worked on several impressive projects including: ${portfolioKnowledge.projects.slice(0, 4).join(", ")}, and more. You can explore all projects in the Projects section of this portfolio.`;
  }

  // About contact
  if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("hire") || lowerMessage.includes("work together")) {
    return `You can contact ${portfolioKnowledge.realName} at ${portfolioKnowledge.email}. They are ${portfolioKnowledge.availability} and excited to work on new projects. Feel free to reach out through the Contact page!`;
  }

  // About availability
  if (lowerMessage.includes("available") || lowerMessage.includes("hire")) {
    return `${portfolioKnowledge.realName} is currently ${portfolioKnowledge.availability}. If you're interested in working together, you can reach out via the Contact page or email directly at ${portfolioKnowledge.email}.`;
  }

  // About GitHub
  if (lowerMessage.includes("github") || lowerMessage.includes("code") || lowerMessage.includes("repository")) {
    return `You can find ${portfolioKnowledge.realName}'s code and repositories on GitHub at ${portfolioKnowledge.github}. They actively contribute to open source and share their work with the community.`;
  }

  // Default response for general questions
  return `That's a great question! While I'm specifically designed to answer questions about ${portfolioKnowledge.name}'s portfolio and ${portfolioKnowledge.realName}'s work, I can tell you that they are a passionate developer focused on creating exceptional digital experiences. For more specific information about their skills, projects, or services, feel free to ask! You can also explore the different sections of this portfolio to learn more.`;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: `Hi! I'm the AI assistant for ${portfolioKnowledge.name}'s portfolio. Ask me anything about ${portfolioKnowledge.realName}'s skills, projects, services, or how to get in touch!`,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: generateAIResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-deep to-blue-ocean text-white shadow-lg shadow-cyan-500/30 flex items-center justify-center hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300",
          isOpen && "hidden"
        )}
        aria-label="Open AI chat"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-md"
          >
            <div className="glass-strong rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden border border-cyan-500/30">
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-deep to-blue-ocean p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">AI Assistant</h3>
                    <p className="text-white/70 text-xs">Ask about CALISSTUS</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-black/20">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex gap-3",
                      message.role === "user" ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                        message.role === "user"
                          ? "bg-gradient-to-br from-cyan-deep to-blue-ocean"
                          : "bg-gradient-to-br from-purple-deep to-pink-neon"
                      )}
                    >
                      {message.role === "user" ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={cn(
                        "max-w-[80%] p-3 rounded-2xl",
                        message.role === "user"
                          ? "bg-gradient-to-r from-cyan-deep to-blue-ocean text-white rounded-tr-sm"
                          : "glass text-white rounded-tl-sm"
                      )}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className="text-xs text-white/50 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-deep to-pink-neon flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="glass p-3 rounded-2xl rounded-tl-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10 bg-black/20">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-deep to-blue-ocean text-white hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
