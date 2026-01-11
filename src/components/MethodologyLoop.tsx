import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, FileText, Award, Target, TrendingUp } from "lucide-react";
import { cn } from "./cn"; // Assuming you have this utility

// Defined using PERCENTAGES to ensure perfect responsiveness
const stages = [
  {
    id: "compliance",
    title: "Compliance",
    description: "Complete all Registrations, Certifications, and paperwork.",
    icon: Shield,
    top: "75%",
    left: "10%",
  },
  {
    id: "context",
    title: "Context",
    description: "Understand requirements and position for success.",
    icon: FileText,
    top: "75%",
    left: "30%",
  },
  {
    id: "compete",
    title: "Compete",
    description: "Working with your team to write persuasive bids.",
    icon: Award,
    top: "35%", // Top of the loop roughly
    left: "48%", // Left side of loop
  },
  {
    id: "capture",
    title: "Capture",
    description: "Identify the right opportunities, by any means.",
    icon: Target,
    top: "35%", 
    left: "72%", // Right side of loop
  },
  {
    id: "continuity",
    title: "Continuity",
    description: "Learn how to systematically grow your GovCon Department.",
    icon: TrendingUp,
    top: "75%",
    left: "90%",
  },
];

export default function MethodologyLoop() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  // Path styling
  const pathColor = "#9ca3af"; // Thick gray (Tailwind slate-400)
  const pathWidth = "16"; // Thicker line

  return (
    <div className="relative w-full max-w-7xl mx-auto py-24 px-4">
      <div className="text-center mb-20">
        <h2 className="font-display text-4xl font-bold text-gov-navy">
          The Stages
        </h2>
        <p className="mt-4 text-xl text-slate-600">
          Powerful results built through a clear, steady path.
        </p>
      </div>

      {/* --- DESKTOP ANIMATED VIEW --- */}
      {/* Fixed aspect ratio container to ensure alignment */}
      <div className="hidden lg:block relative w-full aspect-[2.5/1]">
        
        {/* SVG LAYER */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none" // Forces SVG to stretch exactly to container
        >
          {/* 1. Base Horizontal Line */}
          <path
            d="M 50 300 L 950 300"
            stroke={pathColor}
            strokeWidth={pathWidth}
            strokeLinecap="round"
            fill="none"
          />

          {/* 2. The Cyclotron Loop */}
          {/* A circle centered at (600, 200) with radius 100 */}
          {/* It tangents the bottom line at (600, 300) */}
          <path
            d="M 600 300 
               A 100 100 0 1 1 600 100
               A 100 100 0 1 1 600 300"
            stroke={pathColor}
            strokeWidth={pathWidth}
            fill="none"
          />

          {/* --- BIG CHEVRON ARROWS --- */}
          {/* These are drawn manually to look like the reference image */}
          
          {/* Arrow 1: Compliance -> Context */}
          <path
            d="M 200 285 L 220 300 L 200 315"
            stroke={pathColor}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
          />

          {/* Arrow 2: Context -> Loop */}
          <path
            d="M 400 285 L 420 300 L 400 315"
            stroke={pathColor}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
          />

          {/* Arrow 3: Top of Loop (Pointing LEFT per reference) */}
          <path
            d="M 610 85 L 590 100 L 610 115"
            stroke={pathColor}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
          />

          {/* Arrow 4: Bottom of Loop (Pointing RIGHT - Feedback merge) */}
          <path
            d="M 590 285 L 610 300 L 590 315"
            stroke={pathColor}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
          />

           {/* Arrow 5: Loop -> Continuity */}
           <path
            d="M 800 285 L 820 300 L 800 315"
            stroke={pathColor}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
          />
        </svg>

        {/* --- NODES LAYER --- */}
        {stages.map((stage) => (
          <div
            key={stage.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: stage.left, top: stage.top }}
            onMouseEnter={() => setActiveStage(stage.id)}
            onMouseLeave={() => setActiveStage(null)}
          >
            <StageNode
              stage={stage}
              isActive={activeStage === stage.id}
              isLoopNode={stage.id === "compete" || stage.id === "capture"}
            />
          </div>
        ))}

        {/* --- POPUP CARD --- */}
        <AnimatePresence>
          {activeStage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-1/2 top-[55%] -translate-x-1/2 z-30 w-72 bg-white p-4 rounded-xl shadow-xl border border-slate-200 text-center pointer-events-none"
            >
              <h3 className="font-bold text-gov-navy text-lg">
                {stages.find((s) => s.id === activeStage)?.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                {stages.find((s) => s.id === activeStage)?.description}
              </p>
            </motion.div>
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
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center cursor-pointer group"
    >
      <div
        className={cn(
          "flex h-20 w-20 items-center justify-center rounded-2xl border-4 shadow-lg transition-all duration-200 bg-white",
          isActive ? "border-slate-400 scale-110" : "border-slate-200",
          isLoopNode && stage.id === "compete" ? "text-[#8b1538]" :
          isLoopNode && stage.id === "capture" ? "text-[#1e3a5f]" : 
          "text-slate-600"
        )}
      >
        <stage.icon size={32} strokeWidth={2} />
      </div>
      
      {/* Title Label */}
      <div className={cn(
        "absolute top-24 whitespace-nowrap font-bold uppercase tracking-wider text-sm transition-opacity",
        isActive ? "opacity-0" : "opacity-100 text-slate-500"
      )}>
        {stage.title}
      </div>
    </motion.div>
  );
}
