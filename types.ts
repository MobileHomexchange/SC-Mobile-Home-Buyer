
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

// Integration Types
export interface DealDetails {
  bedrooms: number;
  bathrooms: number;
  year: number;
  size: string;
  condition: string;
  park: string;
}

export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  room: string;
  alt?: string;
}

export interface Deal {
  id: number | string;
  title: string;
  location: string;
  price: string;
  status: 'Sold' | 'Available';
  description: string;
  tags: string[];
  media: MediaItem[];
  details: DealDetails;
}

// Added missing interface for property valuation results
export interface ValuationResult {
  low_range: number;
  high_range: number;
  confidence_score: number;
}
