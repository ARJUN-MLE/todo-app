'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Trash2 } from 'lucide-react'
import { Task } from '@/store/todoStore'
import { Button } from '@/components/ui/Button'
import { useTodoActions } from '@/hooks/useTodoActions'

interface TaskItemProps {
  task: Task
  index: number
}

export function TaskItem({ task, index }: TaskItemProps) {
  const { handleToggleTask, handleDeleteTask } = useTodoActions()

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ delay: index * 0.05 }}
      className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleToggleTask(task.id)}
        className="flex-shrink-0 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
      >
        {task.completed ? (
          <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500" />
        ) : (
          <Circle className="w-5 h-5" />
        )}
      </motion.button>

      <motion.span
        layout
        className={`flex-1 text-base transition-all duration-200 ${
          task.completed
            ? 'line-through text-gray-400 dark:text-gray-500'
            : 'text-gray-900 dark:text-white'
        }`}
      >
        {task.title}
      </motion.span>

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="flex-shrink-0"
      >
        <Button
          onClick={() => handleDeleteTask(task.id)}
          variant="ghost"
          size="sm"
          className="p-1.5 text-gray-400 hover:text-red-600 dark:hover:text-red-400"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </motion.div>
    </motion.div>
  )
}
