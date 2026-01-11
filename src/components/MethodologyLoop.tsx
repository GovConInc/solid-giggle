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
    position: "linear-left",
    order: 1
  },
  {
    id: "context",
    title: "Context",
    description: "Understand requirements and position for success.",
    icon: FileText,
    position: "linear-center-left",
    order: 2
  },
  {
    id: "capture",
    title: "Capture",
    description: "Identify the right opportunities, by any means.",
    icon: Target,
    position: "loop-right",
    order: 3
  },
  {
    id: "compete",
    title: "Compete",
    description: "Working with your team to write persuasive bids.",
    icon: Award,
    position: "loop-left",
    order: 4
  },
  {
    id: "continuity",
    title: "Continuity",
    description: "Learn how to systematically grow your GovCon Department.",
    icon: TrendingUp,
    position: "linear-right",
    order: 5
  },
];

export default function MethodologyLoop() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  // Refined path styling
  const pathColor = "#94a3b8"; // slate-400
  const pathWidth = "20"; // Thicker for prominence
  const arrowColor = "#64748b"; // slate-500

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
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid meet">
          {/* Main horizontal baseline */}
          <motion.path
            d="M 80 200 L 1120 200"
            stroke={pathColor}
            strokeWidth={pathWidth}
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          
          {/* Arrow: Compliance → Context */}
          <motion.path
            d="M 300 185 L 330 200 L 300 215"
            fill="none"
            stroke={arrowColor}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          />

          {/* Loop arc: Context → UP to Capture → ACROSS to Compete → DOWN */}
          <motion.path
            d="M 480 200 C 500 80, 700 80, 720 200"
            stroke={pathColor}
            strokeWidth={pathWidth}
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Arrow going UP to Capture (right side of loop) */}
          <motion.path
            d="M 680 120 L 700 100 L 720 120"
            fill="none"
            stroke={arrowColor}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.4 }}
          />

          {/* Arrow going DOWN from Compete (left side of loop) */}
          <motion.path
            d="M 520 120 L 500 100 L 480 120"
            fill="none"
            stroke={arrowColor}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.4 }}
          />

          {/* Arrow: After loop → Continuity */}
          <motion.path
            d="M 900 185 L 930 200 L 900 215"
            fill="none"
            stroke={arrowColor}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.4 }}
          />
        </svg>

        {/* Stage nodes */}
        {/* Compliance - Far Left */}
        <motion.div
          className="absolute"
          style={{ left: "5%", top: "57%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          onMouseEnter={() => setActiveStage("compliance")}
          onMouseLeave={() => setActiveStage(null)}
        >
          <StageNode stage={stages[0]} isActive={activeStage === "compliance"} />
        </motion.div>

        {/* Context - Center Left */}
        <motion.div
          className="absolute"
          style={{ left: "28%", top: "57%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          onMouseEnter={() => setActiveStage("context")}
          onMouseLeave={() => setActiveStage(null)}
        >
          <StageNode stage={stages[1]} isActive={activeStage === "context"} />
        </motion.div>

        {/* Capture - Top Right (NAVY) */}
        <motion.div
          className="absolute"
          style={{ left: "72%", top: "5%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          onMouseEnter={() => setActiveStage("capture")}
          onMouseLeave={() => setActiveStage(null)}
        >
          <StageNode stage={stages[2]} isActive={activeStage === "capture"} colored="navy" />
        </motion.div>

        {/* Compete - Top Left (CRIMSON) */}
        <motion.div
          className="absolute"
          style={{ left: "28%", top: "5%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          onMouseEnter={() => setActiveStage("compete")}
          onMouseLeave={() => setActiveStage(null)}
        >
          <StageNode stage={stages[3]} isActive={activeStage === "compete"} colored="crimson" />
        </motion.div>

        {/* Continuity - Far Right */}
        <motion.div
          className="absolute"
          style={{ right: "5%", top: "57%" }}
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
              className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl border-2 border-gov-blue px-6 py-4 max-w-md z-10"
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
                  stage.id === "capture"
                    ? "bg-gov-navy text-white"
                    : stage.id === "compete"
                    ? "bg-gov-crimson text-white"
                    : "bg-slate-100 text-slate-700 border-2 border-slate-300"
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

      {/* Flow description for clarity */}
      <div className="mt-8 text-center text-sm text-slate-500">
        <p>Compliance → Context → Capture → Compete → Continuity</p>
      </div>
    </div>
  );
}

function StageNode({ 
  stage, 
  isActive, 
  colored 
}: { 
  stage: typeof stages[0]; 
  isActive: boolean;
  colored?: "navy" | "crimson";
}) {
  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-2xl border-4 shadow-lg cursor-pointer transition-all duration-200",
          colored === "crimson"
            ? "bg-gov-crimson border-gov-crimson text-white"
            : colored === "navy"
            ? "bg-gov-navy border-gov-navy text-white"
            : "bg-white border-slate-300 text-slate-700",
          isActive && "ring-4 ring-gov-blue ring-opacity-50 scale-110"
        )}
      >
        <stage.icon size={30} strokeWidth={2.5} />
      </div>
      <div className="mt-3 text-center">
        <p className="text-sm font-bold text-gov-navy">{stage.title}</p>
      </div>
    </motion.div>
  );
}
