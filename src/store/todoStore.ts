import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type FilterType = 'all' | 'active' | 'completed'

export interface Task {
  id: string
  title: string
  completed: boolean
  createdAt: number
  dueDate?: number
}

interface TodoStore {
  tasks: Task[]
  filter: FilterType
  addTask: (title: string) => void
  deleteTask: (id: string) => void
  toggleTask: (id: string) => void
  setFilter: (filter: FilterType) => void
  clearCompleted: () => void
  reorderTasks: (tasks: Task[]) => void
  getFilteredTasks: () => Task[]
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      filter: 'all',

      addTask: (title: string) => {
        const newTask: Task = {
          id: Math.random().toString(36).substr(2, 9),
          title: title.trim(),
          completed: false,
          createdAt: Date.now(),
        }
        set((state) => ({
          tasks: [newTask, ...state.tasks],
        }))
      },

      deleteTask: (id: string) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }))
      },

      toggleTask: (id: string) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        }))
      },

      setFilter: (filter: FilterType) => {
        set({ filter })
      },

      clearCompleted: () => {
        set((state) => ({
          tasks: state.tasks.filter((task) => !task.completed),
        }))
      },

      reorderTasks: (tasks: Task[]) => {
        set({ tasks })
      },

      getFilteredTasks: () => {
        const { tasks, filter } = get()
        switch (filter) {
          case 'active':
            return tasks.filter((task) => !task.completed)
          case 'completed':
            return tasks.filter((task) => task.completed)
          default:
            return tasks
        }
      },
    }),
    {
      name: 'todo-storage',
    }
  )
)
