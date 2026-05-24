import { useCallback } from 'react'
import { useTodoStore } from '@/store/todoStore'

export const useTodoActions = () => {
  const { addTask, deleteTask, toggleTask, clearCompleted } = useTodoStore()

  const handleAddTask = useCallback(
    (title: string) => {
      if (title.trim()) {
        addTask(title)
      }
    },
    [addTask]
  )

  const handleDeleteTask = useCallback(
    (id: string) => {
      deleteTask(id)
    },
    [deleteTask]
  )

  const handleToggleTask = useCallback(
    (id: string) => {
      toggleTask(id)
    },
    [toggleTask]
  )

  const handleClearCompleted = useCallback(() => {
    clearCompleted()
  }, [clearCompleted])

  return {
    handleAddTask,
    handleDeleteTask,
    handleToggleTask,
    handleClearCompleted,
  }
}
