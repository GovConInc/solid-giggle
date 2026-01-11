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
  },
  {
    id: "context",
    title: "Context",
    description: "Understand requirements and position for success.",
    icon: FileText,
  },
  {
    id: "compete",
    title: "Compete",
    description: "Working with your team to write persuasive bids.",
    icon: Award,
  },
  {
    id: "capture",
    title: "Capture",
    description: "Identify the right opportunities, by any means.",
    icon: Target,
  },
  {
    id: "continuity",
    title: "Continuity",
    description: "Learn how to systematically grow your GovCon Department.",
    icon: TrendingUp,
  },
];

export default function MethodologyLoop() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-7xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold text-gov-navy">
          The Stages
        </h2>
        <p className="mt-4 text-xl text-slate-600">
          Powerful results built through a clear, steady path.
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block relative" style={{ height: "400px" }}>
        {/* SVG Layer - Paths */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 1200 400" 
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Horizontal baseline */}
          <motion.line
            x1="100"
            y1="320"
            x2="1100"
            y2="320"
            stroke="#94a3b8"
            strokeWidth="16"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Loop arc - circular path */}
          <motion.path
            d="M 480 320 Q 480 80, 720 80 Q 960 80, 960 320"
            stroke="#94a3b8"
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          />

          {/* Arrows */}
          {/* Arrow 1: Compliance → Context */}
          <motion.polygon
            points="310,305 340,320 310,335"
            fill="#64748b"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          />

          {/* Arrow 2: Context → up to loop */}
          <motion.polygon
            points="520,305 550,320 520,335"
            fill="#64748b"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          />

          {/* Arrow 3: Top of loop pointing left */}
          <motion.polygon
            points="735,65 720,95 705,65"
            fill="#64748b"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.3 }}
          />

          {/* Arrow 4: End of loop back down */}
          <motion.polygon
            points="930,305 960,320 930,335"
            fill="#64748b"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.3 }}
          />

          {/* Arrow 5: Continuity */}
          <motion.polygon
            points="1020,305 1050,320 1020,335"
            fill="#64748b"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.3 }}
          />
        </svg>

        {/* Node Layer */}
        {/* Compliance - Far Left */}
        <motion.div
          className="absolute"
          style={{ left: "7%", top: "70%", transform: "translate(-50%, -50%)" }}
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
          style={{ left: "28%", top: "70%", transform: "translate(-50%, -50%)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          onMouseEnter={() => setActiveStage("context")}
          onMouseLeave={() => setActiveStage(null)}
        >
          <StageNode stage={stages[1]} isActive={activeStage === "context"} />
        </motion.div>

        {/* Compete - Top Left (crimson) */}
        <motion.div
          className="absolute"
          style={{ left: "47%", top: "15%", transform: "translate(-50%, -50%)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          onMouseEnter={() => setActiveStage("compete")}
          onMouseLeave={() => setActiveStage(null)}
        >
          <StageNode stage={stages[2]} isActive={activeStage === "compete"} colored="crimson" />
        </motion.div>

        {/* Capture - Top Right (navy) */}
        <motion.div
          className="absolute"
          style={{ left: "73%", top: "15%", transform: "translate(-50%, -50%)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          onMouseEnter={() => setActiveStage("capture")}
          onMouseLeave={() => setActiveStage(null)}
        >
          <StageNode stage={stages[3]} isActive={activeStage === "capture"} colored="navy" />
        </motion.div>

        {/* Continuity - Far Right */}
        <motion.div
          className="absolute"
          style={{ right: "7%", top: "70%", transform: "translate(50%, -50%)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          onMouseEnter={() => setActiveStage("continuity")}
          onMouseLeave={() => setActiveStage(null)}
        >
          <StageNode stage={stages[4]} isActive={activeStage === "continuity"} />
        </motion.div>

        {/* Popup Description */}
        <AnimatePresence>
          {activeStage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-1/2 bottom-0 -translate-x-1/2 z-30 w-80 bg-white p-6 rounded-2xl shadow-2xl border-2 border-gov-blue"
            >
              <h3 className="font-bold text-gov-navy text-xl mb-2">
                {stages.find((s) => s.id === activeStage)?.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {stages.find((s) => s.id === activeStage)?.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden space-y-6">
        {stages.map((stage, idx) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-sm"
          >
            <div className="flex items-start gap-5">
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-2xl shrink-0 text-white shadow-lg",
                  stage.id === "compete"
                    ? "bg-gov-crimson"
                    : stage.id === "capture"
                    ? "bg-gov-navy"
                    : "bg-slate-500"
                )}
              >
                <stage.icon size={32} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gov-navy uppercase tracking-wide">
                  {stage.title}
                </h3>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  {stage.description}
                </p>
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
  colored,
}: {
  stage: any;
  isActive: boolean;
  colored?: "crimson" | "navy";
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className="flex flex-col items-center cursor-pointer"
    >
      {/* Hexagon-style node */}
      <div
        className={cn(
          "flex h-20 w-20 items-center justify-center rounded-2xl border-4 shadow-xl transition-all duration-200",
          colored === "crimson"
            ? "bg-gov-crimson border-gov-crimson text-white"
            : colored === "navy"
            ? "bg-gov-navy border-gov-navy text-white"
            : "bg-white border-slate-300 text-slate-700",
          isActive && "ring-4 ring-gov-blue ring-opacity-50 scale-110"
        )}
      >
        <stage.icon size={36} strokeWidth={2.5} />
      </div>

      {/* Label */}
      <div className="mt-3 text-center">
        <p className={cn(
          "text-sm font-bold uppercase tracking-wider transition-opacity",
          isActive ? "text-gov-blue" : "text-slate-600"
        )}>
          {stage.title}
        </p>
      </div>
    </motion.div>
  );
}
