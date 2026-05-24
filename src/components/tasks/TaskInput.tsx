'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useTodoActions } from '@/hooks/useTodoActions'

export function TaskInput() {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const { handleAddTask } = useTodoActions()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleAddTask(input)
      setInput('')
      inputRef.current?.focus()
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="flex gap-2"
    >
      <Input
        ref={inputRef}
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1"
      />
      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={!input.trim()}
        className="px-6"
      >
        <Plus className="w-4 h-4" />
      </Button>
    </motion.form>
  )
}
