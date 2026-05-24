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
## 🌐 Deployment

This project is ready to deploy to multiple platforms. See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for step-by-step instructions.

### Quick Deployment Options:

Vercel is the official Next.js hosting platform with zero-config deployment.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

**Features:**
- Zero-config Next.js deployment
- Automatic preview URLs for PRs
- Global CDN included
- Free tier available

### 2. **Netlify** (Free with Build Limits)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

Or connect your repo at [netlify.com](https://netlify.com) for continuous deployment.

**Features:**
- Free tier with 300 minutes/month builds
- Automatic deployments from Git
- Custom domain support

### 3. **Docker + Any Cloud Provider**

Using the included `Dockerfile` and `docker-compose.yml`:

```bash
# Build and push to Docker Hub
docker build -t your-username/todo-app:latest .
docker push your-username/todo-app:latest

# Then deploy on:
# - Railway.app
# - Render.com
# - AWS ECS
# - DigitalOcean App Platform
# - Google Cloud Run
```

**Railway.app** (Recommended for Docker):
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repo
3. Set build command: `npm run build`
4. Set start command: `npm start`
5. Deploy!

### 4. **GitHub Pages** (Static Export)

For a static version (loses server-side benefits):

```bash
# Update next.config.js:
# output: 'export'

npm run build
# Deploy the 'out' folder to GitHub Pages
```

### 5. **AWS** (Scalable)

**Option A: Using AWS Amplify**
```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

**Option B: Using AWS EC2 with Node.js**
```bash
# SSH into EC2 instance
ssh -i key.pem ec2-user@your-instance-ip

# Install Node.js and git
sudo yum install nodejs git

# Clone repo and deploy
git clone your-repo
cd todo-app
npm install
npm run build
npm start
```

### 6. **Other Platforms**

| Platform | Setup Time | Free Tier | Steps |
|----------|-----------|-----------|-------|
| **Render** | 2 min | ✅ Yes | Connect repo → Deploy |
| **Fly.io** | 3 min | ✅ Limited | `flyctl launch` |
| **Heroku** | 2 min | ❌ Paid only | `heroku create` |
| **DigitalOcean** | 5 min | ✅ Limited | Container or App Platform |

### Environment Variables

For any deployment, set these if needed:

```bash
NODE_ENV=production
# Add other vars from .env.example
```

### Monitoring & Logs

After deployment:
- **Vercel**: Check [vercel.com/dashboard](https://vercel.com/dashboard)
- **Netlify**: Check [netlify.com/team/sites](https://app.netlify.com/team/sites)
- **Docker/Cloud**: Use cloud provider's logging dashboard
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
