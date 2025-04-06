# ✨ Tweet Sentiment Analysis

A real-time sentiment analysis tool for tweets, built with Next.js, TypeScript, and Tailwind CSS. This project uses Natural Language Processing (NLP) to analyze the sentiment of tweets and classify them as Positive, Negative, or Neutral.

## 🚀 Features

- Real-Time Sentiment Analysis: Analyze tweet sentiments instantly using NLP models.  
- Modern UI/UX: Clean, responsive, and interactive interface with Framer Motion animations.  
- Live Twitter Data: Fetches real-time tweets using the Twitter API.  
- Charts & Insights: Displays sentiment trends with Recharts visualization.  
- Dark Mode: A sleek dark mode UI for better user experience.  
- Type Safety: Built with TypeScript for better reliability.  

## ⚙️ Tech Stack

- Framework: Next.js 14  
- Language: TypeScript  
- Styling: Tailwind CSS  
- Animations: Framer Motion  
- State Management: Zustand  
- API Integration: Twitter API v2  
- Data Visualization: Recharts  
- Sentiment Analysis: Natural.js / VADER / Hugging Face API  
- Deployment: Vercel  

## 📂 Project Structure

tweet-sentiment-analysis/  
│   ├── package.json          # Project dependencies & scripts  
│   ├── tsconfig.json         # TypeScript configuration  
│   ├── vite.config.ts        # Vite configuration  
│   ├── public/               # Static assets (favicon, images, etc.)  
│   ├── src/                  # Main source code  
│   │   ├── App.tsx           # Root component  
│   │   ├── main.tsx          # Vite entry point  
│   │   ├── index.css         # Global styles  
│   │   ├── types.ts          # TypeScript types  
│   │   ├── vite-env.d.ts     # Vite environment types  
│   │   ├── components/       # Reusable components  
│   │   │   ├── TweetCard.tsx    # Component for displaying tweets  
│   │   │   ├── TweetInput.tsx   # Input box for analyzing tweets  
│   │   ├── services/         # API calls and utilities  
│   │   │   ├── sentiment.ts  # Sentiment analysis logic  
│   │   │   ├── twitter.ts    # Twitter API integration  
│   │   ├── hooks/            # Custom hooks (if any)  
│   │   ├── context/          # Global state management  
│   │   ├── assets/           # Images, icons, etc.  
│   ├── node_modules/         # Dependencies  
│   ├── .gitignore            # Files to ignore in Git  
│   ├── .env.local            # Environment variables  

## ©️ Getting Started

1. Clone the repository:
\`\`\`sh
git clone https://github.com/yashumak/Tweet-Sentiment-Analysis.git
\`\`\`

2. Install dependencies:
\`\`\`sh
npm install
# or
yarn install
\`\`\`

3. Create a .env.local file in the root directory and add your environment variables:
\`\`\`
NEXT_PUBLIC_TWITTER_BEARER_TOKEN=your_twitter_api_key
NEXT_PUBLIC_HUGGINGFACE_API_KEY=your_huggingface_api_key
\`\`\`

4. Run the development server:
\`\`\`sh
npm run dev
# or
yarn dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment Variables

- NEXT_PUBLIC_TWITTER_BEARER_TOKEN: Twitter API key  
- NEXT_PUBLIC_HUGGINGFACE_API_KEY: Hugging Face API key (if using NLP models)  

## ⚙️ Customization

1. UI Styling: Update tailwind.config.ts for theme customization.  
2. Sentiment Model: Modify the NLP model in utils/sentiment.ts.  
3. Tweet Fetching: Adjust API parameters in services/twitter.ts.  

## 🙈 Sentiment Categories

- Positive: Tweets with happy, optimistic words.  
- Neutral: Tweets with balanced or unclear sentiment.  
- Negative: Tweets expressing sadness, anger, or frustration.  

## Responsive Design

This is fully responsive with breakpoints for:  
- Mobile: < 640px  
- Tablet: 640px - 1024px  
- Desktop: > 1024px  

## 📜 Scripts

- npm run dev: Start development server  
- npm run build: Build for production  
- npm run start: Start production server  
- npm run lint: Run ESLint  

## 🖇️ Social Links

**Yash Umak**  
- LinkedIn: [@yash-umak](https://www.linkedin.com/in/yash-umak-5242ab320/)  
- GitHub: [@yashumak](https://github.com/yashumak)  

 
