"use client";

import { useState } from 'react';
import Image from 'next/image';
import { getImagePath } from '../../utils/imageLoader';

// TypeScript interfaces
interface MerchItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MerchItemCardProps {
  item: MerchItem;
}

// Mock data for merch items
const merchItems: MerchItem[] = [
  {
    id: 'merch1',
    name: 'Action Driving T-Shirt',
    description: 'Premium cotton t-shirt with Action Driving logo on the front and back.',
    price: 24.99,
    image: '/placeholder-image.svg'
  },
  {
    id: 'merch2',
    name: 'Stunt Driver Cap',
    description: 'Adjustable baseball cap with embroidered Action Driving logo.',
    price: 19.99,
    image: '/placeholder-image.svg'
  },
  {
    id: 'merch3',
    name: 'Racing Hoodie',
    description: 'Comfortable hoodie perfect for those cool days at the track.',
    price: 49.99,
    image: '/placeholder-image.svg'
  },
  {
    id: 'merch4',
    name: 'Action Driving Mug',
    description: 'Ceramic mug featuring our logo - perfect for your morning coffee.',
    price: 14.99,
    image: '/placeholder-image.svg'
  },
  {
    id: 'merch5',
    name: 'Stunt Driving Poster',
    description: 'High-quality poster featuring action shots from our best stunts.',
    price: 29.99,
    image: '/placeholder-image.svg'
  },
  {
    id: 'merch6',
    name: 'Action Driving Beanie',
    description: 'Warm and stylish beanie with embroidered logo.',
    price: 17.99,
    image: '/placeholder-image.svg'
  }
];

// MerchItem Card Component
const MerchItemCard = ({ item }: MerchItemCardProps) => {
  return (
    <div className="bg-background-secondary rounded-lg overflow-hidden shadow-lg transition-transform duration-default hover:scale-105">
      <div className="aspect-square relative bg-background-tertiary">
        <Image 
          src={getImagePath(item.image)} 
          alt={item.name} 
          fill 
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium">{item.name}</h3>
          <span className="text-accent font-bold">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-text-normal text-sm">{item.description}</p>
      </div>
    </div>
  );
};

export default function MerchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center">
        Merchandise
      </h1>
      
      <div className="mb-8">
        <p className="text-center text-lg max-w-3xl mx-auto">
          Check out our official Action Driving merchandise! These items are available for purchase at our events. 
          Please note that online purchasing is not available at this time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {merchItems.map(item => (
          <MerchItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}