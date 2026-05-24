'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useTodoStore } from '@/store/todoStore'
import { useTodoActions } from '@/hooks/useTodoActions'

export function ClearCompletedButton() {
  const completedCount = useTodoStore(
    (state) => state.tasks.filter((t) => t.completed).length
  )
  const { handleClearCompleted } = useTodoActions()

  if (completedCount === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Button
        onClick={handleClearCompleted}
        variant="secondary"
        size="sm"
        className="gap-2"
      >
        <Check className="w-4 h-4" />
        Clear {completedCount} completed
      </Button>
    </motion.div>
  )
}
