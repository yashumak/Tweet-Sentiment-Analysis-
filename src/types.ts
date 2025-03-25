export interface Tweet {
  id: string;
  content: string;
  author: User;
  timestamp: Date;
  likes: number;
  retweets: number;
  comments: number;
  sentiment?: 'positive' | 'negative' | 'neutral';
}

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}