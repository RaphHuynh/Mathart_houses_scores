import { motion } from "framer-motion";

export default function HouseCard({ name, points, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="rounded-2xl p-10 border shadow-lg w-full flex flex-col justify-between"
      style={{ backgroundColor: "rgba(0,0,0,0.1)",  }}
    >
      <div className="text-5xl font-bold tracking-wide text-center" style={{ color: color }}>{name}</div>
      <div className="flex-grow flex items-center justify-center">
        <div className="text-6xl font-extrabold">{points}</div>
      </div>
    </motion.div>
  );
}
