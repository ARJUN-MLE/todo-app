# Tasks - Minimal To-Do App

A startup-quality minimal To-Do app built with modern web technologies. Features a clean, minimal design inspired by Linear, Notion, and Todoist with full functionality and smooth animations.

## ✨ Features

### Core Features
- ✅ **Add Tasks** - Quickly add new tasks with Enter key support
- 🗑️ **Delete Tasks** - Remove tasks with smooth animations
- ✓ **Mark Complete** - Toggle task completion status
- 📱 **Responsive Design** - Perfect on mobile, tablet, and desktop
- 💾 **Local Storage** - Tasks persist across sessions
- 🎨 **Beautiful UI** - Minimal black/white aesthetic with smooth interactions
- ⌨️ **Keyboard Support** - Press Enter to add tasks

### Filtering & Organization
- 📋 **Filter Tabs** - View All, Active, or Completed tasks
- 🎯 **Task Counter** - See progress at a glance (X of Y done)
- 🧹 **Clear Completed** - Bulk remove completed tasks
- 📊 **Stats Display** - Active and completed counts in tabs

### Animations & UX
- 🎬 **Framer Motion** - Smooth animations and micro-interactions
- 🌓 **Dark Mode** - Full dark mode support with toggle
- ✨ **Fade Animations** - Smooth enter/exit animations for tasks
- 🎯 **Hover States** - Beautiful hover effects on interactive elements

### Bonus Features
- 🌙 **Dark Mode Toggle** - Switch between light and dark themes
- 📱 **Mobile Optimized** - Touch-friendly controls and responsive layout
- ⚡ **Fast Loading** - Optimized performance with Next.js
- 🎨 **Minimal Design** - Clean, distraction-free interface
- 🔐 **Production Ready** - Full TypeScript, no placeholder code

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Zustand** - Lightweight state management
- **Lucide Icons** - Beautiful icon library
- **Sonner** - Toast notifications (ready for integration)

## 📁 Project Structure

```
todo-app/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx         # Main dashboard
│   │   ├── layout.tsx       # Root layout
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Badge.tsx
│   │   ├── tasks/           # Task-specific components
│   │   │   ├── TaskInput.tsx
│   │   │   ├── TaskItem.tsx
│   │   │   ├── TaskList.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   ├── FilterTabs.tsx
│   │   │   ├── TaskCounter.tsx
│   │   │   └── ClearCompletedButton.tsx
│   │   └── DarkModeToggle.tsx
│   ├── store/               # State management
│   │   └── todoStore.ts     # Zustand store with local storage
│   ├── hooks/               # Custom React hooks
│   │   ├── useHydration.ts
│   │   └── useTodoActions.ts
│   └── lib/                 # Utilities
│       └── cn.ts            # Class name utility
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## � Docker Setup

### Build Docker image

```bash
docker build -t todo-app:latest .
```

### Run the container

```bash
docker run -it --rm -p 3000:3000 todo-app:latest
```

### Verify Node.js / npm inside container

```bash
docker run --rm node:24-slim node -v
# expected: v24.16.0

docker run --rm node:24-slim npm -v
# expected: 11.13.0
```

### Using Docker Compose

```bash
docker compose up --build
```

Open browser at [http://localhost:3000](http://localhost:3000)

## �📖 Usage

### Adding Tasks
1. Type task description in the input field
2. Press Enter or click the + button
3. Task appears at the top of the list

### Managing Tasks
- **Complete Task** - Click the circle icon to mark as done
- **Delete Task** - Hover over task and click trash icon
- **Filter Tasks** - Use tabs to filter All, Active, or Completed
- **Clear Completed** - Click "Clear X completed" button to remove all done tasks

### Dark Mode
- Click the sun/moon icon in the header to toggle dark mode
- Preference is saved locally

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme.

### Typography
Modify font imports in `layout.tsx` to change fonts.

### Animations
Adjust Framer Motion settings in component files to control animation speed and style.

## 🔄 State Management

The app uses **Zustand** for lightweight state management with built-in local storage persistence.

### Main Store (`src/store/todoStore.ts`)
- `tasks` - Array of task objects
- `filter` - Current filter type (all/active/completed)
- `addTask()` - Add new task
- `deleteTask()` - Remove task by ID
- `toggleTask()` - Mark task as complete/incomplete
- `setFilter()` - Change current filter
- `clearCompleted()` - Remove all completed tasks
- `getFilteredTasks()` - Get tasks based on current filter

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators for keyboard users
- Color contrast compliance

## 🔒 Production Ready

- ✅ Type-safe with full TypeScript coverage
- ✅ No placeholder or dummy code
- ✅ Optimized for performance
- ✅ Mobile-responsive design
- ✅ Dark mode support
- ✅ Error handling
- ✅ Clean code architecture
- ✅ Reusable components

## 📚 Future Enhancements

Potential features to add:
- Task due dates and reminders
- Task categories/tags
- Drag and drop reordering
- Search/filter by text
- Task notes and descriptions
- Recurring tasks
- Calendar view
- Data export/import
- Cloud sync
- Collaborative lists

## 📝 License

MIT License - feel free to use this project for learning or as a template for your own apps.

## 🤝 Contributing

Feel free to fork and customize this template for your needs!

## 📞 Support

For issues or questions, please open an issue in the repository.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
