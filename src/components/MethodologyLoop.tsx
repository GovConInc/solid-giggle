import { motion } from "framer-motion";
import { FileCheck, Search, Handshake, BarChart3, Shield } from "lucide-react";

const stages = [
  {
    id: "capture",
    title: "Capture Stage",
    description: "Identify the right opportunities, by any means.",
    icon: Search,
    position: { top: "15%", right: "20%" },
    iconBg: "bg-gov-blue",
  },
  {
    id: "continuity",
    title: "Continuity Stage",
    description: "Learn how to systematically grow your GovCon Department.",
    icon: BarChart3,
    position: { top: "35%", right: "5%" },
    iconBg: "bg-gov-crimson",
  },
  {
    id: "proposal",
    title: "Proposal Stage",
    description: "Working with your team to write persuasive bids.",
    icon: FileCheck,
    position: { top: "15%", left: "20%" },
    iconBg: "bg-gov-navy",
  },
  {
    id: "design",
    title: "Design Stage",
    description: "Create our marketing material, identify key bid traits & more.",
    icon: Handshake,
    position: { bottom: "25%", left: "12%" },
    iconBg: "bg-gov-blue",
  },
  {
    id: "compliance",
    title: "Compliance Stage",
    description: "Complete all Registrations, Certifications, and paperwork.",
    icon: Shield,
    position: { bottom: "25%", right: "12%" },
    iconBg: "bg-gov-green",
  },
];

export default function MethodologyLoop() {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl font-bold text-gov-navy">The Stages</h2>
        <p className="mt-3 text-lg text-slate-600">
          Powerful results built through a clear, steady path.
        </p>
      </div>

      {/* SVG Loop Path */}
      <div className="relative h-[600px] sm:h-[500px]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main circular path */}
          <motion.path
            d="M 400 80 
               C 580 80, 680 200, 680 300 
               C 680 420, 580 520, 400 520 
               C 220 520, 120 420, 120 300
               C 120 200, 220 80, 400 80"
            stroke="url(#gradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Arrow indicators */}
          <motion.path
            d="M 600 120 L 620 110 L 610 135 Z"
            fill="#8b1538"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.path
            d="M 670 380 L 685 390 L 660 395 Z"
            fill="#8b1538"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
          <motion.path
            d="M 200 470 L 180 480 L 190 455 Z"
            fill="#8b1538"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b1538" />
              <stop offset="50%" stopColor="#1e3a5f" />
              <stop offset="100%" stopColor="#8b1538" />
            </linearGradient>
          </defs>
        </svg>

        {/* Stage Cards */}
        {stages.map((stage, index) => (
          <motion.div
            key={stage.id}
            className="absolute"
            style={stage.position}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <div className="flex flex-col items-center max-w-[200px]">
              {/* Icon Circle */}
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${stage.iconBg} text-white shadow-lg mb-4`}
              >
                <stage.icon size={32} />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-bold text-gov-navy mb-1">{stage.title}</h3>
                <p className="text-sm text-slate-600 leading-snug">{stage.description}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Center tagline */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="bg-white/90 backdrop-blur rounded-2xl px-8 py-6 shadow-xl border-2 border-gov-crimson/20">
            <p className="text-2xl font-display font-bold gradient-text">
              Your Path to Winning
            </p>
            <p className="text-sm text-slate-600 mt-2">A repeatable system</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
