import { motion } from 'framer-motion';
import React from 'react';

type CardProps = {
  title: string;
  icon?: string;
  svg?: 'upload' | 'chat';
  color: string;
  children: React.ReactNode;
};

export default function Card({ title, icon, svg, color, children }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-xl shadow-lg p-6 bg-white border-t-4 ${color} transition-transform duration-200`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl ${color}`}>
          {icon && <span>{icon}</span>}
          {svg === 'upload' && (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          )}
          {svg === 'chat' && (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5" />
            </svg>
          )}
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}