'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ListTodo } from 'lucide-react'
import { useTodoStore } from '@/store/todoStore'

export function EmptyState() {
  const filter = useTodoStore((state) => state.filter)

  const getEmptyMessage = () => {
    switch (filter) {
      case 'active':
        return {
          icon: <ListTodo className="w-12 h-12" />,
          title: 'All tasks completed!',
          description: 'Great job! No active tasks.',
        }
      case 'completed':
        return {
          icon: <CheckCircle2 className="w-12 h-12" />,
          title: 'No completed tasks yet',
          description: 'Complete your first task to see it here.',
        }
      default:
        return {
          icon: <ListTodo className="w-12 h-12" />,
          title: 'No tasks yet',
          description: 'Create your first task to get started.',
        }
    }
  }

  const { icon, title, description } = getEmptyMessage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-12 text-center text-gray-500 dark:text-gray-400"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mb-4 text-gray-300 dark:text-gray-600"
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
        {title}
      </h3>
      <p className="text-sm">{description}</p>
    </motion.div>
  )
}
