'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useTodoStore } from '@/store/todoStore'

interface Command {
  id: string
  label: string
  description: string
  icon: React.ReactNode
  action: () => void
  shortcut?: string
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const { clearCompleted, tasks } = useTodoStore()

  const commands: Command[] = [
    {
      id: 'clear-completed',
      label: 'Clear Completed Tasks',
      description: 'Remove all completed tasks',
      icon: '🗑️',
      action: () => {
        clearCompleted()
        setIsOpen(false)
      },
      shortcut: '⌘K',
    },
    {
      id: 'focus-input',
      label: 'Focus Task Input',
      description: 'Focus on the task input field',
      icon: '⌨️',
      action: () => {
        const input = document.querySelector('input[placeholder*="Add"]') as HTMLInputElement
        input?.focus()
        setIsOpen(false)
      },
    },
  ]

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.description.toLowerCase().includes(search.toLowerCase())
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(!isOpen)
        setSearch('')
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    },
    [isOpen]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const hasCompletedTasks = tasks.some((t) => t.completed)

  return (
    <>
      {/* Command Palette Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          onClick={() => setIsOpen(true)}
          variant="secondary"
          size="sm"
          className="gap-2 shadow-lg"
          title="Open command palette (Cmd+K)"
        >
          <Search className="w-4 h-4" />
          <span className="hidden sm:inline">Commands</span>
          <kbd className="hidden sm:inline-flex items-center gap-1 ml-2 px-2 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-700 rounded">
            ⌘K
          </kbd>
        </Button>
      </motion.div>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/50"
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-1/4 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg"
            >
              <div className="rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg">
                {/* Search Input */}
                <div className="border-b border-gray-200 dark:border-gray-800 p-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      autoFocus
                      type="text"
                      placeholder="Search commands..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-10 pr-10 py-2 rounded bg-transparent text-sm placeholder:text-gray-500 focus:outline-none dark:text-white"
                    />
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Commands List */}
                <div className="max-h-64 overflow-y-auto py-2">
                  {filteredCommands.length > 0 ? (
                    filteredCommands.map((cmd) => {
                      // Disable clear-completed if no completed tasks
                      const isDisabled = cmd.id === 'clear-completed' && !hasCompletedTasks
                      
                      return (
                        <motion.button
                          key={cmd.id}
                          onClick={isDisabled ? undefined : cmd.action}
                          className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                            isDisabled
                              ? 'opacity-50 cursor-not-allowed'
                              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                          disabled={isDisabled}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{cmd.icon}</span>
                            <div className="flex-1">
                              <p className="font-medium text-gray-900 dark:text-white">
                                {cmd.label}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {cmd.description}
                              </p>
                            </div>
                            {cmd.shortcut && (
                              <kbd className="text-xs text-gray-500 dark:text-gray-400">
                                {cmd.shortcut}
                              </kbd>
                            )}
                          </div>
                        </motion.button>
                      )
                    })
                  ) : (
                    <div className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                      No commands found
                    </div>
                  )}
                </div>

                {/* Help text */}
                <div className="border-t border-gray-200 dark:border-gray-800 px-4 py-3 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <span>Press</span>
                  <kbd className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">
                    Esc
                  </kbd>
                  <span>to close</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
