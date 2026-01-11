import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, FileText, Award, Target, TrendingUp } from "lucide-react";
import { cn } from "./cn";

const stages = [
  {
    id: "compliance",
    title: "Compliance",
    description: "Complete all Registrations, Certifications, and paperwork.",
    icon: Shield,
    color: "#e5e7eb", // gray for bottom linear
    position: "linear-left"
  },
  {
    id: "context",
    title: "Context",
    description: "Understand requirements and position for success.",
    icon: FileText,
    color: "#e5e7eb", // gray for bottom linear
    position: "linear-center"
  },
  {
    id: "compete",
    title: "Compete",
    description: "Working with your team to write persuasive bids.",
    icon: Award,
    color: "#8b1538", // crimson for loop
    position: "loop-left"
  },
  {
    id: "capture",
    title: "Capture",
    description: "Identify the right opportunities, by any means.",
    icon: Target,
    color: "#1e3a5f", // navy for loop
    position: "loop-right"
  },
  {
    id: "continuity",
    title: "Continuity",
    description: "Learn how to systematically grow your GovCon Department.",
    icon: TrendingUp,
    color: "#e5e7eb", // gray for bottom linear
    position: "linear-right"
  },
];

export default function MethodologyLoop() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-16">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl font-bold text-gov-navy">The Stages</h2>
        <p className="mt-3 text-lg text-slate-600">
          Powerful results built through a clear, steady path.
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block relative h-80">
        {/* Bottom linear path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid meet">
          {/* Main horizontal line */}
          <motion.path
            d="M 50 200 L 1150 200"
            stroke="#9ca3af"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          
          {/* Arrows on linear path */}
          <motion.path
            d="M 380 185 L 420 200 L 380 215"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          />
          <motion.path
            d="M 780 185 L 820 200 L 780 215"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          />

          {/* Top circular loop */}
          <motion.path
            d="M 350 200 C 350 80, 850 80, 850 200"
            stroke="#9ca3af"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          />

          {/* Arrows on circular path */}
          <motion.path
            d="M 470 110 L 490 90 L 510 110"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
          />
          <motion.path
            d="M 730 110 L 710 90 L 690 110"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          />
        </svg>

        {/* Stage nodes */}
        {/* Compliance - Bottom Left */}
        <motion.div
          className="absolute"
          style={{ left: "5%", top: "55%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          onMouseEnter={() => setActiveStage("compliance")}
          onMouseLeave={() => setActiveStage(null)}
        >
          <StageNode stage={stages[0]} isActive={activeStage === "compliance"} />
        </motion.div>

        {/* Context - Bottom Center */}
        <motion.div
          className="absolute"
          style={{ left: "50%", top: "55%", transform: "translateX(-50%)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          onMouseEnter={() => setActiveStage("context")}
          onMouseLeave={() => setActiveStage(null)}
        >
          <StageNode stage={stages[1]} isActive={activeStage === "context"} />
        </motion.div>

        {/* Compete - Top Left */}
        <motion.div
          className="absolute"
          style={{ left: "25%", top: "5%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          onMouseEnter={() => setActiveStage("compete")}
          onMouseLeave={() => setActiveStage(null)}
        >
          <StageNode stage={stages[2]} isActive={activeStage === "compete"} colored />
        </motion.div>

        {/* Capture - Top Right */}
        <motion.div
          className="absolute"
          style={{ left: "75%", top: "5%", transform: "translateX(-50%)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          onMouseEnter={() => setActiveStage("capture")}
          onMouseLeave={() => setActiveStage(null)}
        >
          <StageNode stage={stages[3]} isActive={activeStage === "capture"} colored />
        </motion.div>

        {/* Continuity - Bottom Right */}
        <motion.div
          className="absolute"
          style={{ right: "5%", top: "55%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          onMouseEnter={() => setActiveStage("continuity")}
          onMouseLeave={() => setActiveStage(null)}
        >
          <StageNode stage={stages[4]} isActive={activeStage === "continuity"} />
        </motion.div>

        {/* Description popup */}
        <AnimatePresence>
          {activeStage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl border-2 border-gov-blue px-6 py-4 max-w-md"
            >
              <h3 className="font-bold text-gov-navy text-lg">
                {stages.find(s => s.id === activeStage)?.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                {stages.find(s => s.id === activeStage)?.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile View - Vertical Stack */}
      <div className="md:hidden space-y-4">
        {stages.map((stage, idx) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-xl border-2 border-slate-200 p-4 hover:border-gov-blue transition"
          >
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-xl shrink-0",
                  stage.position.includes("loop")
                    ? stage.id === "compete"
                      ? "bg-gov-crimson text-white"
                      : "bg-gov-navy text-white"
                    : "bg-slate-200 text-slate-700"
                )}
              >
                <stage.icon size={28} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gov-navy">{stage.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{stage.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function StageNode({ 
  stage, 
  isActive, 
  colored = false 
}: { 
  stage: typeof stages[0]; 
  isActive: boolean;
  colored?: boolean;
}) {
  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-2xl border-4 shadow-lg cursor-pointer transition-all duration-200",
          colored
            ? stage.id === "compete"
              ? "bg-gov-crimson border-gov-crimson text-white"
              : "bg-gov-navy border-gov-navy text-white"
            : "bg-white border-slate-300 text-slate-700",
          isActive && "ring-4 ring-gov-blue ring-opacity-50"
        )}
      >
        <stage.icon size={32} strokeWidth={2.5} />
      </div>
      <div className="mt-2 text-center">
        <p className="text-sm font-bold text-gov-navy">{stage.title}</p>
      </div>
    </motion.div>
  );
}

