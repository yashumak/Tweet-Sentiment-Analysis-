import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { MessageSquare, Repeat2, Heart, BarChart2 } from 'lucide-react';
import type { Tweet } from '../types';

interface TweetCardProps {
  tweet: Tweet;
  onAnalyze: (tweetId: string) => void;
}

export function TweetCard({ tweet, onAnalyze }: TweetCardProps) {
  const getSentimentColor = (sentiment?: string) => {
    switch (sentiment) {
      case 'positive':
        return 'text-green-500';
      case 'negative':
        return 'text-red-500';
      case 'neutral':
        return 'text-gray-500';
      default:
        return '';
    }
  };

  const getSentimentEmoji = (sentiment?: string) => {
    switch (sentiment) {
      case 'positive':
        return '😊';
      case 'negative':
        return '😔';
      case 'neutral':
        return '😐';
      default:
        return '';
    }
  };

  return (
    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-200">
      <div className="flex space-x-3">
        <img
          src={tweet.author.avatar}
          alt={tweet.author.name}
          className="h-12 w-12 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 flex-wrap">
            <span className="font-bold hover:underline cursor-pointer">
              {tweet.author.name}
            </span>
            <span className="text-gray-500">@{tweet.author.username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500 hover:underline cursor-pointer">
              {formatDistanceToNow(tweet.timestamp)} ago
            </span>
          </div>
          <p className="mt-2 text-gray-900 whitespace-pre-wrap break-words">
            {tweet.content}
          </p>
          <div className="mt-3 flex items-center justify-between text-gray-500 max-w-md">
            <button className="group flex items-center space-x-2 hover:text-blue-500 transition-colors duration-200">
              <div className="p-2 rounded-full group-hover:bg-blue-50">
                <MessageSquare size={18} />
              </div>
              <span>{tweet.comments}</span>
            </button>
            <button className="group flex items-center space-x-2 hover:text-green-500 transition-colors duration-200">
              <div className="p-2 rounded-full group-hover:bg-green-50">
                <Repeat2 size={18} />
              </div>
              <span>{tweet.retweets}</span>
            </button>
            <button className="group flex items-center space-x-2 hover:text-red-500 transition-colors duration-200">
              <div className="p-2 rounded-full group-hover:bg-red-50">
                <Heart size={18} />
              </div>
              <span>{tweet.likes}</span>
            </button>
            <button
              onClick={() => onAnalyze(tweet.id)}
              className="group flex items-center space-x-2 hover:text-purple-500 transition-colors duration-200"
            >
              <div className="p-2 rounded-full group-hover:bg-purple-50">
                <BarChart2 size={18} />
              </div>
              <span className={`${getSentimentColor(tweet.sentiment)} flex items-center space-x-1`}>
                <span>{tweet.sentiment ? tweet.sentiment : 'Analyze'}</span>
                {tweet.sentiment && <span>{getSentimentEmoji(tweet.sentiment)}</span>}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}