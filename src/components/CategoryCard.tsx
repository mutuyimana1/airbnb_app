import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/types";

// interface CategoryCardProps {
//   title: string;
//   listings: number;
//   Icon: LucideIcon;
// }

const CategoryCard: React.FC<Category> = ({ title, listings, Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="relative flex items-center justify-between p-6 bg-[#32363d] rounded-2xl cursor-pointer group border border-transparent hover:border-gray-600 transition-colors"
    >
      {/* Small Arrow Icon Top-Left */}
      <ArrowUpRight className="absolute top-4 left-4 w-4 h-4 text-gray-500 opacity-50 group-hover:text-white transition-colors" />

      {/* Text Content */}
      <div className="flex-1 text-right mr-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-gray-400 text-sm italic">listings +{listings}</p>
      </div>

      {/* Icon Container */}
      <div className="p-3 bg-[#1a1d21] rounded-xl group-hover:bg-[#FF5A5F] transition-colors duration-300">
        <Icon className="w-6 h-6 text-[#FF5A5F] group-hover:text-white transition-colors duration-300" />
      </div>
    </motion.div>
  );
};
export default CategoryCard;
