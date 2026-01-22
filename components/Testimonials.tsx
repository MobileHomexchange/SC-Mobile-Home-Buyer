import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "Conway, SC",
    text: "I needed to sell my manufactured home quickly when I moved. They handled the park management and title transfer perfectly. It was so much easier than I expected!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Ross",
    location: "Charlotte, NC",
    text: "My double-wide had some title issues from years ago. As mobile home specialists, they knew exactly how to fix it with the DMV and closed in 9 days.",
    rating: 5
  },
  {
    id: 3,
    name: "David & Linda P.",
    location: "Florence, SC",
    text: "Honest and reliable. They gave us a guaranteed price, then actually found a buyer who paid more, and they gave us the extra profit just like they promised!",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-5 pointer-events-none">
        <Quote className="w-96 h-96 text-blue-900" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Mobile Home Owners Say</h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">Real experiences from Carolinas families who trusted our specialized solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-8 italic flex-grow">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-amber-600 font-semibold uppercase tracking-wider">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};