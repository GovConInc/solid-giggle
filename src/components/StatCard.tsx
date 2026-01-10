import { motion } from "framer-motion";
import Card from "./Card";
import { cn } from "./cn";

export default function StatCard({
  label,
  value,
  detail,
  accent = "crimson",
}: {
  label: string;
  value: string;
  detail: string;
  accent?: "crimson" | "blue" | "green";
}) {
  const accents = {
    crimson: "from-gov-crimson to-gov-crimson/70",
    blue: "from-gov-blue to-gov-blue/70",
    green: "from-gov-green to-gov-green/70",
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }} 
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Card className="p-6 h-full" variant="elevated">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</p>
        <p className="mt-3 font-display text-3xl font-bold text-gov-navy">{value}</p>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">{detail}</p>
        <div className="mt-5 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
          <div className={cn("h-full w-2/3 rounded-full bg-gradient-to-r", accents[accent])} />
        </div>
      </Card>
    </motion.div>
  );
}
