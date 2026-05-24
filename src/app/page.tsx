'use client'

import { motion } from 'framer-motion'
import { CheckSquare } from 'lucide-react'
import { useHydration } from '@/hooks/useHydration'
import { Card } from '@/components/ui/Card'
import { TaskInput } from '@/components/tasks/TaskInput'
import { TaskList } from '@/components/tasks/TaskList'
import { FilterTabs } from '@/components/tasks/FilterTabs'
import { TaskCounter } from '@/components/tasks/TaskCounter'
import { ClearCompletedButton } from '@/components/tasks/ClearCompletedButton'
import { DarkModeToggle } from '@/components/DarkModeToggle'
import { CommandPalette } from '@/components/CommandPalette'

export default function Home() {
  const isHydrated = useHydration()

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-12 w-12 bg-gray-200 dark:bg-gray-800 rounded-lg" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Gradient background effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 dark:bg-gray-900/50 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 dark:bg-gray-900/50 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-950/80"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-black dark:bg-white"
              >
                <CheckSquare className="w-6 h-6 text-white dark:text-black" />
              </motion.div>
              <h1 className="text-2xl font-bold text-black dark:text-white">
                Tasks
              </h1>
            </div>
            <DarkModeToggle />
          </div>
        </motion.header>

        {/* Main content */}
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Input section */}
            <Card className="p-6">
              <TaskInput />
            </Card>

            {/* Stats and filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <FilterTabs />
              <TaskCounter />
            </div>

            {/* Task list */}
            <Card className="p-6">
              <TaskList />
            </Card>

            {/* Clear completed button */}
            <motion.div
              layout
              className="flex justify-end"
            >
              <ClearCompletedButton />
            </motion.div>
          </motion.div>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-200 dark:border-gray-800 py-8 mt-12"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>Built with Next.js, TypeScript, Tailwind CSS & Framer Motion</p>
          </div>
        </motion.footer>

      {/* Command Palette */}
      <CommandPalette />
      </div>
    </div>
  )
}
