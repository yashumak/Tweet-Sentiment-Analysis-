import React, { useState } from 'react';
import { Home, Search, Bell, Mail, Bookmark, User, MoreHorizontal, Twitter } from 'lucide-react';
import { TweetCard } from './components/TweetCard';
import { TweetInput } from './components/TweetInput';
import type { Tweet } from './types';

const INITIAL_TWEETS: Tweet[] = [
  {
    id: '1',
    content: "Just launched my new project! 🚀 Really excited about the possibilities! This is going to be amazing and transformative for our users. #innovation #tech",
    author: {
      id: '1',
      name: 'John Doe',
      username: 'johndoe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    timestamp: new Date(),
    likes: 142,
    retweets: 52,
    comments: 25,
  },
  {
    id: '2',
    content: "Beautiful day for coding! ☀️ The sun is shining, birds are chirping, and my code is working perfectly! #webdev #coding #happiness",
    author: {
      id: '2',
      name: 'Sarah Johnson',
      username: 'sarahj',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    likes: 89,
    retweets: 15,
    comments: 8,
  },
  {
    id: '3',
    content: "Frustrated with this bug in production. Everything is breaking and nothing seems to work. Having a terrible day. 😠 #coding #bugs",
    author: {
      id: '3',
      name: 'Mike Wilson',
      username: 'mikew',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    likes: 45,
    retweets: 12,
    comments: 20,
  },
  {
    id: '4',
    content: "Just got promoted! 🎉 Hard work really does pay off. Grateful for my amazing team and all the support. Here's to new challenges! #career #success",
    author: {
      id: '4',
      name: 'Emily Chen',
      username: 'emilyc',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    likes: 234,
    retweets: 78,
    comments: 42,
  },
  {
    id: '5',
    content: "The new framework update is okay, but there are some concerning performance issues that need to be addressed. #tech #development",
    author: {
      id: '5',
      name: 'Alex Thompson',
      username: 'alext',
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    likes: 67,
    retweets: 23,
    comments: 15,
  },
  {
    id: '6',
    content: "Absolutely love the new AI features in VS Code! The suggestions are incredible and have boosted my productivity significantly! 💻✨ #vscode #ai",
    author: {
      id: '6',
      name: 'Lisa Park',
      username: 'lisap',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 90),
    likes: 156,
    retweets: 45,
    comments: 28,
  },
  {
    id: '7',
    content: "Lost all my work because I forgot to commit. This is the worst. Remember to always commit your changes, folks! 😭 #git #lessons",
    author: {
      id: '7',
      name: 'David Kim',
      username: 'davidk',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    likes: 89,
    retweets: 34,
    comments: 22,
  },
  {
    id: '8',
    content: "The community response to our open source project has been incredible! Thank you all for your contributions and support! ❤️ #opensource",
    author: {
      id: '8',
      name: 'Rachel Green',
      username: 'rachelg',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 150),
    likes: 245,
    retweets: 89,
    comments: 45,
  },
  {
    id: '9',
    content: "Meh, another framework to learn. When will it end? Feeling overwhelmed with all these new technologies. #coding #burnout",
    author: {
      id: '9',
      name: 'Tom Brown',
      username: 'tomb',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 180),
    likes: 67,
    retweets: 23,
    comments: 18,
  },
  {
    id: '10',
    content: "Just deployed my first machine learning model to production! The results are amazing and I'm so proud of what we've achieved! 🎉 #ai #ml",
    author: {
      id: '10',
      name: 'Maria Garcia',
      username: 'mariag',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 210),
    likes: 312,
    retweets: 156,
    comments: 89,
  },
];

function App() {
  const [tweets, setTweets] = useState<Tweet[]>(INITIAL_TWEETS);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNewTweet = (content: string) => {
    const newTweet: Tweet = {
      id: String(Date.now()),
      content,
      author: {
        id: '1',
        name: 'John Doe',
        username: 'johndoe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      timestamp: new Date(),
      likes: 0,
      retweets: 0,
      comments: 0,
    };
    setTweets([newTweet, ...tweets]);
  };

  const analyzeSentiment = async (tweetId: string) => {
    try {
      const tweet = tweets.find((t) => t.id === tweetId);
      if (!tweet) return;

      // Simple sentiment analysis based on content
      const text = tweet.content.toLowerCase();
      
      // Positive keywords
      const positiveWords = ['love', 'amazing', 'excellent', 'happy', 'excited', 'great', 'wonderful', 'fantastic', 'proud', 'perfect', 'incredible'];
      
      // Negative keywords
      const negativeWords = ['hate', 'terrible', 'awful', 'bad', 'worst', 'frustrated', 'disappointing', 'bug', 'break', 'meh'];
      
      let positiveScore = 0;
      let negativeScore = 0;

      // Count positive and negative words
      positiveWords.forEach(word => {
        if (text.includes(word)) positiveScore++;
      });

      negativeWords.forEach(word => {
        if (text.includes(word)) negativeScore++;
      });

      // Determine sentiment
      let sentiment: 'positive' | 'negative' | 'neutral';
      if (positiveScore > negativeScore) {
        sentiment = 'positive';
      } else if (negativeScore > positiveScore) {
        sentiment = 'negative';
      } else {
        sentiment = 'neutral';
      }

      setTweets(tweets.map((t) =>
        t.id === tweetId ? { ...t, sentiment } : t
      ));
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <Twitter className="h-6 w-6 text-blue-500" />
        </button>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[275px_1fr_350px] divide-x">
          {/* Left Sidebar */}
          <div className={`
            fixed lg:relative top-0 left-0 h-screen bg-white z-40
            transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0 transition-transform duration-200 ease-in-out
            w-64 lg:w-auto
          `}>
            <div className="flex h-screen flex-col justify-between p-4">
              <div>
                <div className="mb-4 p-2">
                  <Twitter className="h-8 w-8 text-blue-500" />
                </div>
                <nav className="space-y-2">
                  {[
                    { icon: Home, label: 'Home' },
                    { icon: Search, label: 'Explore' },
                    { icon: Bell, label: 'Notifications' },
                    { icon: Mail, label: 'Messages' },
                    { icon: Bookmark, label: 'Bookmarks' },
                    { icon: User, label: 'Profile' },
                    { icon: MoreHorizontal, label: 'More' },
                  ].map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      className="flex w-full items-center space-x-4 rounded-full p-3 hover:bg-gray-100"
                    >
                      <Icon size={24} />
                      <span className="text-xl">{label}</span>
                    </button>
                  ))}
                </nav>
                <button className="mt-4 w-full rounded-full bg-blue-500 py-3 font-bold text-white hover:bg-blue-600">
                  Tweet
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="min-h-screen border-x">
            <div className="border-b border-gray-200 p-4 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
              <h1 className="text-xl font-bold">Home</h1>
            </div>
            <TweetInput onTweet={handleNewTweet} />
            <div>
              {tweets.map((tweet) => (
                <TweetCard
                  key={tweet.id}
                  tweet={tweet}
                  onAnalyze={analyzeSentiment}
                />
              ))}
            </div>
          </main>

          {/* Right Sidebar */}
          <div className="hidden lg:block">
            <div className="p-4 sticky top-0">
              <div className="rounded-2xl bg-gray-50 p-4">
                <h2 className="text-xl font-bold">What's happening</h2>
                <div className="mt-4 space-y-4">
                  {[
                    { tag: '#WebDevelopment', posts: '340K' },
                    { tag: '#SentimentAnalysis', posts: '125K' },
                    { tag: '#Innovation', posts: '892K' },
                    { tag: '#TechNews', posts: '456K' },
                    { tag: '#AI', posts: '789K' },
                  ].map(({ tag, posts }) => (
                    <div key={tag} className="flex justify-between">
                      <div>
                        <p className="font-bold">{tag}</p>
                        <p className="text-sm text-gray-500">{posts} posts</p>
                      </div>
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreHorizontal size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;