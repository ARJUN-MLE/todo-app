'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input = ({ className, error, ...props }: InputProps) => {
  return (
    <div className="w-full">
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn(
          'w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900',
          'border border-gray-200 dark:border-gray-800',
          'text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white',
          'transition-all duration-200',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          error && 'border-red-500 dark:border-red-500',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  )
}
