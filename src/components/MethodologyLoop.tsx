import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, FileText, Award, Target, TrendingUp } from "lucide-react";
import { cn } from "./cn"; // Standard tailwind merge utility

const stages = [
  {
    id: "compliance",
    title: "Compliance",
    description: "Complete all Registrations, Certifications, and paperwork.",
    icon: Shield,
    // Using precise coordinates for the 1000x400 viewBox
    position: { x: "100", y: "320" },
  },
  {
    id: "context",
    title: "Context",
    description: "Understand requirements and position for success.",
    icon: FileText,
    position: { x: "300", y: "320" },
  },
  {
    id: "compete",
    title: "Compete",
    description: "Working with your team to write persuasive bids.",
    icon: Award,
    // Symmetrical position on the loop
    position: { x: "500", y: "160" },
  },
  {
    id: "capture",
    title: "Capture",
    description: "Identify the right opportunities, by any means.",
    icon: Target,
    // Symmetrical position on the loop
    position: { x: "700", y: "160" },
  },
  {
    id: "continuity",
    title: "Continuity",
    description: "Learn how to systematically grow your GovCon Department.",
    icon: TrendingUp,
    position: { x: "900", y: "320" },
  },
];

export default function MethodologyLoop() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  // Set the path color to black
  const strokeColor = "#000000";

  return (
    <div className="relative w-full max-w-7xl mx-auto py-24 px-4 overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="font-display text-4xl font-bold text-gov-navy">
          The Stages
        </h2>
        <p className="mt-4 text-xl text-slate-600">
          Powerful results built through a clear, steady path.
        </p>
      </div>

      {/* --- DESKTOP ANIMATED VIEW --- */}
      <div className="hidden lg:block relative h-[400px] w-full">
        {/* The SVG Canvas - ViewBox optimized for 1000x400 coordinate system */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="4"
              markerHeight="4"
              refX="2"
              refY="2"
              orient="auto"
              fill={strokeColor} // Arrowhead is now black
            >
              <path d="M0,0 L4,2 L0,4 L1,2 Z" />
            </marker>
          </defs>

          {/* 1. LEFT LINE: Start -> Loop Tangent Point */}
          <motion.path
            d="M 50 320 L 600 320"
            stroke={strokeColor}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* 2. THE LOOP: Circular Cycle */}
          <motion.path
            d="M 600 320
               A 120 120 0 1 1 600 80
               A 120 120 0 1 1 600 320"
            stroke={strokeColor}
            strokeWidth="8"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
          />

          {/* 3. RIGHT LINE: Loop Tangent Point -> End */}
          <motion.path
            d="M 600 320 L 950 320"
            stroke={strokeColor}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          />

          {/* --- ARROWS --- */}

          {/* Arrow 1: Compliance -> Context */}
          <motion.path
            d="M 200 320 L 202 320"
            stroke="none"
            markerEnd="url(#arrowhead)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />

          {/* Arrow 2: Context -> Loop */}
          <motion.path
            d="M 450 320 L 452 320"
            stroke="none"
            markerEnd="url(#arrowhead)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />

          {/* Arrow 3: Top of Loop (Moving Left) */}
          <motion.path
            d="M 610 80 L 590 80"
            stroke={strokeColor}
            strokeWidth="4"
            markerEnd="url(#arrowhead)"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          />

          {/* Arrow 4: Bottom of Loop (Moving Right/Feedback) */}
          <motion.path
            d="M 590 320 L 610 320"
            stroke={strokeColor}
            strokeWidth="4"
            markerEnd="url(#arrowhead)"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          />

          {/* Arrow 5: Loop -> Continuity */}
          <motion.path
            d="M 750 320 L 752 320"
            stroke="none"
            markerEnd="url(#arrowhead)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </svg>

        {/* --- INTERACTIVE NODES --- */}
        {stages.map((stage) => (
          <motion.div
            key={stage.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            // Use the exact coordinates from the stages array
            style={{ left: stage.position.x, top: stage.position.y }}
            onMouseEnter={() => setActiveStage(stage.id)}
            onMouseLeave={() => setActiveStage(null)}
          >
            <StageNode
              stage={stage}
              isActive={activeStage === stage.id}
              isLoopNode={stage.id === "compete" || stage.id === "capture"}
            />
          </motion.div>
        ))}

        {/* --- INFO CARD POPUP --- */}
        <AnimatePresence mode="wait">
          {activeStage && (
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-full max-w-md z-20 pointer-events-none">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl rounded-2xl p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  {/* Icon wrapper to prevent type errors */}
                  {(() => {
                    const s = stages.find((s) => s.id === activeStage);
                    const Icon = s?.icon || Shield;
                    return <Icon className="text-gov-navy w-8 h-8" />;
                  })()}
                </div>
                <h3 className="text-xl font-bold text-gov-navy mb-2">
                  {stages.find((s) => s.id === activeStage)?.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {stages.find((s) => s.id === activeStage)?.description}
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="lg:hidden space-y-6">
        {stages.map((stage, idx) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
          >
            <div className="flex items-start gap-5">
              <div
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-xl shrink-0 text-white shadow-md",
                  stage.id === "compete"
                    ? "bg-[#8b1538]"
                    : stage.id === "capture"
                    ? "bg-[#1e3a5f]"
                    : "bg-slate-500"
                )}
              >
                <stage.icon size={28} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {stage.title}
                </h3>
                <p className="text-slate-600 mt-1 leading-relaxed">
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

// Sub-component for the Nodes
function StageNode({
  stage,
  isActive,
  isLoopNode,
}: {
  stage: any;
  isActive: boolean;
  isLoopNode: boolean;
}) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className="group relative flex flex-col items-center cursor-pointer"
    >
      {/* Pulse Effect */}
      {isActive && (
        <motion.div
          layoutId="pulse"
          className={cn(
            "absolute inset-0 rounded-2xl opacity-30 blur-md scale-125",
            stage.id === "compete"
              ? "bg-[#8b1538]"
              : stage.id === "capture"
              ? "bg-[#1e3a5f]"
              : "bg-slate-400"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
        />
      )}

      <div
        className={cn(
          "relative flex h-16 w-16 items-center justify-center rounded-2xl border-4 shadow-xl transition-all duration-300",
          isActive ? "border-white scale-110" : "border-slate-100",
          stage.id === "compete"
            ? "bg-[#8b1538] text-white"
            : stage.id === "capture"
            ? "bg-[#1e3a5f] text-white"
            : "bg-white text-slate-600 border-slate-200"
        )}
      >
        <stage.icon
          size={32}
          strokeWidth={isLoopNode || isActive ? 2.5 : 2}
        />
      </div>

      {/* Label under node */}
      <motion.div
        animate={{ opacity: isActive ? 0 : 1, y: isActive ? 5 : 0 }}
        className="absolute top-20 w-32 text-center"
      >
        <span
          className={cn(
            "text-xs font-bold uppercase tracking-wider",
            isLoopNode ? "text-slate-800" : "text-slate-500"
          )}
        >
          {stage.title}
        </span>
      </motion.div>
    </motion.div>
  );
}
