
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
  icon: React.ElementType;
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
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  content: string;
}

export interface Deal {
  id: number;
  title: string;
  location: string;
  price: string;
  status: string;
  description: string;
  tags: string[];
  media: { 
    type: 'image' | 'video'; 
    url: string; 
    thumbnail?: string; 
    alt?: string; 
    room?: string 
  }[];
  details: { 
    bedrooms: number; 
    bathrooms: number; 
    year: number; 
    size: string; 
    condition: string; 
    park: string 
  };
}

// Added ValuationResult interface to resolve missing export in MHEvaluator.tsx
export interface ValuationResult {
  low_range: number;
  high_range: number;
  confidence_score: number;
}
