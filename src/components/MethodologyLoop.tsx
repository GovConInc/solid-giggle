import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, FileText, Award, Target, TrendingUp, ChevronRight } from "lucide-react";

const stages = [
  {
    id: "compliance",
    title: "Compliance",
    subtitle: "Get Certified",
    description: "Complete all Registrations, Certifications, and paperwork required to do business with the government.",
    details: ["SAM.gov Registration", "NAICS Code Selection", "Capability Statement", "Required Certifications"],
    icon: Shield,
    number: "01",
  },
  {
    id: "context",
    title: "Context",
    subtitle: "Know the Landscape",
    description: "Understand agency requirements, procurement patterns, and position your company for success.",
    details: ["Market Research", "Agency Analysis", "Competitor Intelligence", "Requirement Mapping"],
    icon: FileText,
    number: "02",
  },
  {
    id: "capture",
    title: "Capture",
    subtitle: "Find Opportunities",
    description: "Identify the right opportunities through strategic research, relationships, and market intelligence.",
    details: ["Opportunity Pipeline", "Relationship Building", "Bid/No-Bid Analysis", "Teaming Partners"],
    icon: Target,
    emphasized: true,
    color: "navy",
    number: "03",
  },
  {
    id: "compete",
    title: "Compete",
    subtitle: "Win the Work",
    description: "Working with your team to write persuasive, compliant bids that stand out from the competition.",
    details: ["Proposal Writing", "Pricing Strategy", "Compliance Matrix", "Win Themes"],
    icon: Award,
    emphasized: true,
    color: "crimson",
    number: "04",
  },
  {
    id: "continuity",
    title: "Continuity",
    subtitle: "Scale & Repeat",
    description: "Learn how to systematically grow your GovCon department with repeatable processes.",
    details: ["Process Documentation", "Team Development", "Contract Management", "Growth Strategy"],
    icon: TrendingUp,
    number: "05",
  },
];

export default function OurProcess() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gov-crimson/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gov-navy/5 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gov-crimson/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-gov-crimson animate-pulse" />
            <span className="text-xs font-bold text-gov-crimson uppercase tracking-[0.2em]">
              The 5C Methodology
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
            Our Process
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A proven methodology that transforms government contracting from overwhelming to achievable.
          </p>
        </motion.div>

        {/* Progress Line (Desktop) */}
        <div className="hidden lg:block relative mb-8">
          <div className="absolute top-1/2 left-[10%] right-[10%] h-1 bg-gray-200 rounded-full -translate-y-1/2" />
          <motion.div 
            className="absolute top-1/2 left-[10%] h-1 bg-gradient-to-r from-gray-400 via-gov-navy via-50% to-gov-crimson rounded-full -translate-y-1/2"
            initial={{ width: 0 }}
            whileInView={{ width: '80%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
          {/* Progress dots */}
          <div className="relative flex justify-between px-[10%]">
            {stages.map((stage, idx) => (
              <motion.div
                key={stage.id}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.15, type: "spring", stiffness: 300 }}
                className={`
                  w-4 h-4 rounded-full border-4 border-white shadow-md
                  ${stage.emphasized 
                    ? stage.color === "navy" 
                      ? "bg-gov-navy" 
                      : "bg-gov-crimson"
                    : "bg-gray-400"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isEmphasized = stage.emphasized;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative cursor-pointer
                  ${isEmphasized ? "lg:-mt-4" : ""}
                `}
              >
                <div className={`
                  relative h-full rounded-2xl p-6 transition-all duration-500 ease-out
                  ${isEmphasized
                    ? stage.color === "crimson"
                      ? "bg-gradient-to-br from-gov-crimson to-red-800"
                      : "bg-gradient-to-br from-gov-navy to-slate-900"
                    : "bg-white border border-gray-200"
                  }
                  ${isHovered
                    ? isEmphasized
                      ? "shadow-2xl scale-[1.03] -translate-y-2"
                      : "shadow-xl scale-[1.02] -translate-y-1 border-gray-300"
                    : isEmphasized
                      ? "shadow-xl"
                      : "shadow-md"
                  }
                `}>
                  
                  {/* Step Number - Large Background */}
                  <div className={`
                    absolute top-4 right-4 font-display text-6xl font-black leading-none
                    ${isEmphasized ? "text-white/10" : "text-gray-100"}
                  `}>
                    {stage.number}
                  </div>

                  {/* Icon Container */}
                  <div className={`
                    relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5
                    transition-transform duration-300
                    ${isHovered ? "scale-110" : ""}
                    ${isEmphasized
                      ? "bg-white/20 backdrop-blur-sm"
                      : "bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
                    }
                  `}>
                    <Icon
                      size={26}
                      strokeWidth={2}
                      className={`
                        transition-all duration-300
                        ${isEmphasized ? "text-white" : "text-gray-800"}
                        ${isHovered ? "scale-110" : ""}
                      `}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Subtitle */}
                    <p className={`
                      text-[11px] font-bold uppercase tracking-[0.15em] mb-2
                      ${isEmphasized ? "text-white/60" : "text-gray-400"}
                    `}>
                      {stage.subtitle}
                    </p>

                    {/* Title */}
                    <h3 className={`
                      font-display text-xl font-bold mb-3
                      ${isEmphasized ? "text-white" : "text-gray-900"}
                    `}>
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p className={`
                      text-sm leading-relaxed mb-4
                      ${isEmphasized ? "text-white/80" : "text-gray-600"}
                    `}>
                      {stage.description}
                    </p>

                    {/* Details - Expandable on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className={`
                            pt-4 border-t
                            ${isEmphasized ? "border-white/20" : "border-gray-200"}
                          `}>
                            <div className="flex flex-wrap gap-2">
                              {stage.details.map((detail, i) => (
                                <span
                                  key={i}
                                  className={`
                                    text-xs font-medium px-3 py-1.5 rounded-full
                                    ${isEmphasized
                                      ? "bg-white/15 text-white/90"
                                      : "bg-gray-100 text-gray-700"
                                    }
                                  `}
                                >
                                  {detail}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Emphasized Badge */}
                  {isEmphasized && (
                    <div className={`
                      absolute -top-3 left-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                      ${stage.color === "crimson" 
                        ? "bg-white text-gov-crimson" 
                        : "bg-white text-gov-navy"
                      }
                      shadow-lg
                    `}>
                      Core Phase
                    </div>
                  )}

                  {/* Hover indicator */}
                  <div className={`
                    absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${isEmphasized ? "bg-white/10" : "bg-gray-100"}
                    ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}
                  `}>
                    <ChevronRight 
                      size={16} 
                      className={isEmphasized ? "text-white" : "text-gray-600"} 
                    />
                  </div>
                </div>

                {/* Connection Arrow (Mobile/Tablet) */}
                {idx < stages.length - 1 && (
                  <div className="flex lg:hidden justify-center py-4">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                    >
                      <ChevronRight size={18} className="text-gray-400 rotate-90" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Loop Indicator - Removed */}
      </div>
    </section>
  );
}