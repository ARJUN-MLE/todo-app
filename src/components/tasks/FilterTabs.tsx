'use client'

import { motion } from 'framer-motion'
import { FilterType, useTodoStore } from '@/store/todoStore'

const filters: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
]

export function FilterTabs() {
  const { filter, setFilter, tasks } = useTodoStore()

  const completedCount = tasks.filter((t) => t.completed).length
  const activeCount = tasks.length - completedCount

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 p-1 rounded-lg border border-gray-200 dark:border-gray-700 w-fit"
    >
      {filters.map((f) => (
        <motion.button
          key={f.value}
          onClick={() => setFilter(f.value)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            filter === f.value
              ? 'bg-white dark:bg-gray-900 text-black dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          {f.label}
          {f.value === 'active' && activeCount > 0 && (
            <span className="ml-2 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2 py-0.5 rounded-full">
              {activeCount}
            </span>
          )}
          {f.value === 'completed' && completedCount > 0 && (
            <span className="ml-2 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
              {completedCount}
            </span>
          )}
        </motion.button>
      ))}
    </motion.div>
  )
}
