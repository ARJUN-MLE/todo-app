'use client'

import { motion } from 'framer-motion'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning'
}

const variantStyles = {
  default:
    'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white',
  secondary:
    'bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-400',
  success:
    'bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-400',
  warning:
    'bg-yellow-100 text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-400',
}

export function Badge({
  variant = 'default',
  className = '',
  ...props
}: BadgeProps) {
  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variantStyles[variant]} ${className}`}
      {...props}
    />
  )
}
