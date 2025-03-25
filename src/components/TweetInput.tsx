import React, { useState } from 'react';
import { Image, Smile, Calendar } from 'lucide-react';

interface TweetInputProps {
  onTweet: (content: string) => void;
}

export function TweetInput({ onTweet }: TweetInputProps) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onTweet(content);
      setContent('');
    }
  };

  return (
    <div className="border-b border-gray-200 p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Your avatar"
            className="h-12 w-12 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening?"
              className="w-full resize-none border-0 bg-transparent text-xl placeholder-gray-500 focus:outline-none min-h-[100px]"
            />
            <div className="flex items-center justify-between border-t border-gray-200 pt-3">
              <div className="flex space-x-4 text-blue-500">
                <button type="button" className="p-2 hover:bg-blue-50 rounded-full transition-colors duration-200">
                  <Image size={20} />
                </button>
                <button type="button" className="p-2 hover:bg-blue-50 rounded-full transition-colors duration-200">
                  <Smile size={20} />
                </button>
                <button type="button" className="p-2 hover:bg-blue-50 rounded-full transition-colors duration-200">
                  <Calendar size={20} />
                </button>
              </div>
              <button
                type="submit"
                disabled={!content.trim()}
                className="rounded-full bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}