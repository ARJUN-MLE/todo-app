'use client'

import { motion } from 'framer-motion'
import { useTodoStore } from '@/store/todoStore'
import { Badge } from '@/components/ui/Badge'

export function TaskCounter() {
  const tasks = useTodoStore((state) => state.tasks)
  const completedCount = tasks.filter((t) => t.completed).length
  const totalCount = tasks.length

  if (totalCount === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
    >
      <Badge variant="secondary">
        {completedCount} of {totalCount} done
      </Badge>
    </motion.div>
  )
}
