# Deployment Guide - Todo App

Complete step-by-step deployment instructions for various platforms.

## Quick Deployment (Fastest)

### **Vercel** (Recommended - 2 minutes)

1. **Create Vercel account** at [vercel.com](https://vercel.com)
2. **Click "New Project"**
3. **Import your GitHub repo** (or connect Netlify)
4. **Click Deploy** - Done! 🎉

Your app is live with:
- Free hosting ✅
- Auto deploys on git push ✅
- Free SSL certificate ✅
- Global CDN ✅

---

## Step-by-Step by Platform

### Vercel (Using CLI)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Answer prompts (accept defaults)
# 5. Copy your live URL from the output
```

### Netlify (Using CLI)

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Connect Netlify account (opens browser)
netlify login

# 3. Initialize deployment
netlify init

# 4. Build
npm run build

# 5. Deploy to production
netlify deploy --prod
```

### Railway (Docker)

Railway is perfect for Docker deployments.

1. Go to [railway.app](https://railway.app)
2. Click **"New Project"** → **"Deploy from GitHub"**
3. Select your repo
4. Click **"Deploy"**
5. Configure these environment variables if asked:
   - `NODE_ENV` = `production`
6. Your app will deploy automatically

Railway also supports deploying from a Docker image:

```bash
# Build Docker image
docker build -t my-todo-app .

# Tag for Docker Hub
docker tag my-todo-app:latest username/my-todo-app:latest

# Push to Docker Hub
docker push username/my-todo-app:latest

# In Railway dashboard, connect Docker Hub image
```

### Render.com

1. Go to [render.com](https://render.com)
2. Click **"New +"** → **"Web Service"**
3. Select your GitHub repo
4. Fill in:
   - **Name**: `todo-app`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
5. Choose **Free Plan**
6. Click **"Create Web Service"**

### AWS Amplify

```bash
# 1. Install Amplify CLI
npm install -g @aws-amplify/cli

# 2. Configure
amplify configure

# 3. Initialize
amplify init
# Answer: name, environment, editor, app type (javascript), framework (nextjs)

# 4. Add hosting
amplify add hosting
# Choose: Amazon CloudFront and S3

# 5. Publish
amplify publish
```

### AWS EC2 (Full Control)

1. **Launch EC2 instance** (t2.micro = free tier)
   - AMI: Amazon Linux 2
   - Security Group: Allow ports 80, 443, 22

2. **SSH into instance**
   ```bash
   ssh -i /path/to/key.pem ec2-user@your-instance-ip
   ```

3. **Install dependencies**
   ```bash
   sudo yum update -y
   sudo yum install -y nodejs npm git
   ```

4. **Clone and deploy**
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   npm install
   npm run build
   npm start
   ```

5. **Keep running with PM2**
   ```bash
   sudo npm install -g pm2
   pm2 start npm -- start
   pm2 startup
   pm2 save
   ```

6. **Setup Nginx reverse proxy**
   ```bash
   sudo yum install -y nginx
   sudo systemctl start nginx
   
   # Edit /etc/nginx/nginx.conf and add:
   # server {
   #     listen 80;
   #     server_name your-domain.com;
   #     location / {
   #         proxy_pass http://localhost:3000;
   #     }
   # }
   ```

### Docker (Local Testing Before Cloud)

```bash
# Build image
docker build -t my-todo-app:latest .

# Run container
docker run -p 3000:3000 my-todo-app:latest

# Push to Docker Hub
docker login
docker tag my-todo-app:latest username/my-todo-app:latest
docker push username/my-todo-app:latest
```

### GitHub Pages (Static Export Only)

⚠️ **Note**: This makes the app static - you lose server features.

1. Update `next.config.js`:
   ```js
   const nextConfig = {
     reactStrictMode: true,
     output: 'export', // Add this line
   }
   ```

2. Build and deploy:
   ```bash
   npm run build
   
   # Copy 'out' folder to GitHub Pages
   # Or set GitHub Pages source to 'gh-pages' branch
   ```

---

## Custom Domains

After deployment, add your custom domain:

| Platform | How |
|----------|-----|
| **Vercel** | Vercel Dashboard → Settings → Domains |
| **Netlify** | Site settings → Domain management → Add custom domain |
| **Railway** | Railway Dashboard → Settings → Custom Domain |
| **AWS** | Route53 or point nameservers |

### Using Nameservers

1. Buy domain (Namecheap, GoDaddy, etc.)
2. Copy nameservers from your platform
3. Update domain's nameserver settings
4. Wait 24-48 hours for propagation

---

## Environment Variables

Create `.env.local` file for secrets:

```bash
NODE_ENV=production
# Add other sensitive variables here
```

**For each platform:**
- **Vercel**: Settings → Environment Variables
- **Netlify**: Site settings → Build & deploy → Environment
- **Railway**: Variables
- **AWS**: Amplify → App settings → Environment variables

---

## Monitoring & Logs

### Vercel
- Dashboard: https://vercel.com/dashboard
- Click project → "Logs" tab
- Real-time logs and analytics

### Netlify  
- Dashboard: https://app.netlify.com
- Click site → "Logs" tab
- Deploy logs and function logs

### Railway
- Dashboard: https://railway.app/dashboard
- Click project → "Logs" tab

### AWS
- CloudWatch for EC2 logs
- Amplify console for build logs

---

## Performance Tips

1. **Enable Caching**
   - Vercel: Auto-configured
   - Netlify: Set cache headers in netlify.toml
   - Cloud Storage: Configure CDN caching

2. **Optimize Images**
   - Already using Next.js Image optimization ✅

3. **Monitor Performance**
   - Vercel Analytics: Dashboard → Analytics
   - Netlify Analytics: Site settings → Analytics
   - Google PageSpeed Insights

---

## Troubleshooting

### "Port 3000 already in use"
```bash
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9  # macOS/Linux
# Windows: netstat -ano | findstr :3000
```

### Build fails on deployment
```bash
# Test build locally first
npm run build
npm start

# Check logs on platform dashboard
```

### Environment variables not working
- Verify .env.local is in .gitignore ✅
- Rebuild after adding variables
- Don't commit sensitive values to git

### Custom domain not working
- Wait 24-48 hours for DNS propagation
- Verify nameservers in domain registrar
- Check SSL certificate (should auto-generate)

---

## Recommended Setup

For **production**:
1. **Use Vercel** (easiest, best for Next.js)
2. Add custom domain
3. Enable GitHub integration for auto-deploys
4. Setup environment variables
5. Monitor with Vercel Analytics

For **learning/experimentation**:
1. Start with Render or Railway
2. Test Docker deployment
3. Learn DevOps with AWS EC2

---

## Cost Comparison

| Platform | Free Tier | Paid Tier | Best For |
|----------|-----------|-----------|----------|
| **Vercel** | Yes (generous) | $20/mo | Production |
| **Netlify** | Limited (300 min/mo) | $19/mo | Hobby projects |
| **Railway** | $5 credit/mo | Pay-as-you-go | Small apps |
| **Render** | Limited | $7/mo minimum | Learning |
| **AWS** | 12 months free | Variable | Enterprise |
| **Heroku** | Discontinued | Paid only | Not recommended |

---

## Next Steps

1. ✅ Choose a platform (Vercel recommended)
2. ✅ Create account and connect GitHub
3. ✅ Deploy your first version
4. ✅ Add custom domain
5. ✅ Setup monitoring
6. ✅ Share your live app! 🚀

Have questions? Check the [main README](./README.md) or your platform's documentation.
