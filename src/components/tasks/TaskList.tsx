'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTodoStore } from '@/store/todoStore'
import { TaskItem } from './TaskItem'
import { EmptyState } from './EmptyState'

export function TaskList() {
  const tasks = useTodoStore((state) => state.getFilteredTasks())

  return (
    <div className="space-y-2">
      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <AnimatePresence mode="popLayout">
          {tasks.map((task, index) => (
            <TaskItem key={task.id} task={task} index={index} />
          ))}
        </AnimatePresence>
      )}
    </div>
  )
}
