import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, FileText, Award, Target, TrendingUp } from "lucide-react";
import { cn } from "./cn"; // Assuming you have this utility, otherwise use clsx/tailwind-merge

// Configuration for the stages
const stages = [
  {
    id: "compliance",
    title: "Compliance",
    description: "Complete all Registrations, Certifications, and paperwork.",
    icon: Shield,
    position: { x: "10%", y: "80%" }, // Bottom Line Start
    color: "bg-slate-500",
  },
  {
    id: "context",
    title: "Context",
    description: "Understand requirements and position for success.",
    icon: FileText,
    position: { x: "30%", y: "80%" }, // Bottom Line Pre-Loop
    color: "bg-slate-500",
  },
  {
    id: "compete",
    title: "Compete",
    description: "Working with your team to write persuasive bids.",
    icon: Award,
    position: { x: "48%", y: "35%" }, // Top Left of Loop
    color: "bg-gov-crimson", // Ensure this class exists in your tailwind config or use arbitrary values
  },
  {
    id: "capture",
    title: "Capture",
    description: "Identify the right opportunities, by any means.",
    icon: Target,
    position: { x: "72%", y: "35%" }, // Top Right of Loop
    color: "bg-gov-navy", // Ensure this class exists
  },
  {
    id: "continuity",
    title: "Continuity",
    description: "Learn how to systematically grow your GovCon Department.",
    icon: TrendingUp,
    position: { x: "90%", y: "80%" }, // Bottom Line End
    color: "bg-slate-500",
  },
];

export default function MethodologyLoop() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-7xl mx-auto py-24 px-4 overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="font-display text-4xl font-bold text-gov-navy">The Stages</h2>
        <p className="mt-4 text-xl text-slate-600">
          Powerful results built through a clear, steady path.
        </p>
      </div>

      {/* --- DESKTOP ANIMATED VIEW --- */}
      <div className="hidden lg:block relative h-[400px] w-full">
        
        {/* The SVG Canvas */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            
            {/* Arrow Marker Definition */}
            <marker
              id="arrowhead"
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
              fill="#94a3b8"
            >
              <path d="M0,0 L6,3 L0,6 L1,3 Z" />
            </marker>
          </defs>

          {/* 1. Base Line (Compliance -> Context -> Loop Base) */}
          <motion.path
            d="M 50 320 L 450 320"
            stroke="url(#line-gradient)"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {/* 2. The Cycle Loop (Circle) */}
          {/* Defined as two arcs to allow distinct coloring or animation directions if needed */}
          <motion.path
            d="M 600 320 
               A 120 120 0 1 0 600 80 
               A 120 120 0 1 0 600 320 Z"
            stroke="#cbd5e1"
            strokeWidth="14"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          />

          {/* 3. Exit Line (Loop Base -> Continuity) */}
          <motion.path
            d="M 750 320 L 950 320"
            stroke="url(#line-gradient)"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          />

          {/* --- Directional Arrows on the Path --- */}
          
          {/* Arrow: Context -> Loop */}
          <motion.path
            d="M 380 320 L 385 320"
            stroke="none"
            fill="none"
            markerEnd="url(#arrowhead)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />

           {/* Arrow: Loop Top (Moving Left) */}
           <motion.path
            d="M 620 80 L 580 80" 
            stroke="#64748b"
            strokeWidth="6"
            strokeLinecap="round"
            markerEnd="url(#arrowhead)"
            fill="none"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          />

          {/* Arrow: Loop Bottom (Moving Right - Feedback) */}
          <motion.path
             d="M 580 320 L 620 320"
             stroke="#64748b"
             strokeWidth="6"
             strokeLinecap="round"
             markerEnd="url(#arrowhead)"
             fill="none"
             initial={{ opacity: 0, pathLength: 0 }}
             animate={{ opacity: 1, pathLength: 1 }}
             transition={{ delay: 1.8, duration: 0.5 }}
          />

          {/* Arrow: Loop -> Continuity */}
          <motion.path
            d="M 830 320 L 835 320"
            stroke="none"
            fill="none"
            markerEnd="url(#arrowhead)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          />
        </svg>

        {/* --- Interactive Nodes --- */}
        {stages.map((stage) => (
          <motion.div
            key={stage.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: stage.position.x, top: stage.position.y }}
            onMouseEnter={() => setActiveStage(stage.id)}
            onMouseLeave={() => setActiveStage(null)}
          >
            <StageNode 
              stage={stage} 
              isActive={activeStage === stage.id} 
              isLoopNode={stage.id === 'compete' || stage.id === 'capture'}
            />
          </motion.div>
        ))}

        {/* --- Info Card Popup --- */}
        <AnimatePresence mode="wait">
          {activeStage && (
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-full max-w-md z-20 pointer-events-none">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white/95 backdrop-blur-sm border border-slate-200 shadow-2xl rounded-2xl p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  {(() => {
                    const s = stages.find(s => s.id === activeStage);
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

      {/* --- MOBILE VIEW (Vertical Stack) --- */}
      <div className="lg:hidden space-y-6">
        {stages.map((stage, idx) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-5">
              <div
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-xl shrink-0 text-white shadow-md",
                  stage.id === "compete" ? "bg-red-700" : 
                  stage.id === "capture" ? "bg-blue-900" : "bg-slate-500"
                )}
              >
                <stage.icon size={28} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{stage.title}</h3>
                <p className="text-slate-600 mt-1 leading-relaxed">{stage.description}</p>
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
      whileHover={{ scale: 1.15 }}
      className="group relative flex flex-col items-center cursor-pointer"
    >
      {/* Pulse Effect for Active State */}
      {isActive && (
        <motion.div
          layoutId="pulse"
          className={cn(
            "absolute inset-0 rounded-2xl opacity-30 blur-md scale-110",
            stage.id === "compete" ? "bg-red-500" : 
            stage.id === "capture" ? "bg-blue-500" : "bg-slate-400"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
        />
      )}

      <div
        className={cn(
          "relative flex h-20 w-20 items-center justify-center rounded-2xl border-4 shadow-xl transition-colors duration-300",
          isActive ? "border-white" : "border-slate-100",
          // Conditional Coloring Logic
          stage.id === "compete" ? "bg-[#8b1538] text-white" : // Crimson
          stage.id === "capture" ? "bg-[#1e3a5f] text-white" : // Navy
          "bg-white text-slate-600 border-slate-200"
        )}
      >
        <stage.icon 
          size={36} 
          strokeWidth={isLoopNode || isActive ? 2.5 : 2} 
        />
      </div>
      
      {/* Label - Hidden on hover because the popup takes over, or keep it? 
          The popup is better for cleanliness, but let's keep the title for context. */}
      <motion.div 
        animate={{ opacity: isActive ? 0 : 1, y: isActive ? 10 : 0 }}
        className="absolute top-24 w-32 text-center"
      >
        <span className={cn(
          "text-sm font-bold uppercase tracking-wider",
          isLoopNode ? "text-slate-800" : "text-slate-500"
        )}>
          {stage.title}
        </span>
      </motion.div>
    </motion.div>
  );
}

