import React, { useState } from 'react';
import { Calendar, User, ArrowRight, X, Info, BookOpen, ChevronDown } from 'lucide-react';
import { BlogPost } from '../types.ts';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "5 Critical Questions Before Selling Your Mobile Home in SC",
    excerpt: "Avoid costly mistakes with these 5 essential questions every SC owner should ask before accepting an offer.",
    date: "Mar 01, 2024",
    author: "Solutions Team",
    category: "Selling Guide",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    content: `
      <p class="lead">Selling a manufactured home in the Carolinas isn't just a transaction; it's a legal process that requires specific expertise. I've seen too many owners in Columbia and Charleston rush into sales without asking these simple questions.</p>
      
      <h3>1. Is my title legally prepared for transfer?</h3>
      <p>In SC, mobile home titles are handled by the DMV. If yours is missing, has an old lien, or is in a deceased relative's name, the sale will stall. We help check this for free.</p>

      <h3>2. Does the buyer understand Park Regulations?</h3>
      <p>If your home is in a park, the buyer must be approved by management. Many "investors" forget this, leading to deals falling through at the last second.</p>

      <h3>3. What is "As-Is" really worth?</h3>
      <p>Don't over-repair. Often, the cost of a new roof doesn't translate to a higher sale price for a mobile home. We value homes based on their current Carolinas market footprint.</p>

      <h3>4. Who pays for the title and DMV fees?</h3>
      <p>Always clarify this up front. With our guaranteed model, we handle all paperwork and costs associated with the transfer.</p>

      <h3>5. Can I keep the "Upside"?</h3>
      <p>Most buyers want to buy low and sell high. We give you a floor price and let YOU keep 100% of the profit if we find a buyer who pays more.</p>
    `
  },
  {
    id: '2',
    title: "Mobile Home Park Closures: Your Rights in South Carolina",
    excerpt: "Facing a park closure? Learn the legal timelines and compensation options available under SC law.",
    date: "Mar 05, 2024",
    author: "Legal Dept",
    category: "Legal & Rights",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    content: `
      <h3>Understanding Park Closure Notice Timelines</h3>
      <p>When the Oakwood Park in Spartanburg announced closure, Mrs. Johnson called me in tears. Under SC law, owners are entitled to specific notice periods and, in many cases, relocation assistance.</p>
      
      <div class="bg-amber-50 p-4 border-l-4 border-amber-500 my-4">
        <strong>Important:</strong> You usually have a minimum 90-180 day window depending on the local ordinance and state statutes. Don't panic and abandon your home.
      </div>

      <h3>Your 3 Main Options:</h3>
      <ul>
        <li><strong>Relocate:</strong> Moving a home can cost $15k+. Ensure your home is new enough to be accepted at a new site.</li>
        <li><strong>Sell to a Specialist:</strong> We buy homes in closing parks and handle the logistics of moving them ourselves.</li>
        <li><strong>Government Assistance:</strong> Check if you qualify for state-funded relocation grants.</li>
      </ul>
      <p>We've helped dozens of families in Myrtle Beach and Greenville navigate these closures with dignity and fair compensation.</p>
    `
  },
  {
    id: '3',
    title: "Title Transfers: What They Don't Tell You at the DMV",
    excerpt: "Navigating SC mobile home paperwork? Avoid these common pitfalls with our plain-English guide.",
    date: "Mar 10, 2024",
    author: "Solutions Team",
    category: "Legal & Titles",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    content: `
      <h3>DMV Titles vs. Real Property Deeds</h3>
      <p>I'll never forget Mr. Thompson from Myrtle Beach. He waited 6 weeks for a 'simple' title transfer because he was treating it like a traditional house closing. In SC, unless your home is 'de-titled,' it's personal property—like a car.</p>

      <h3>Common Paperwork Pitfalls:</h3>
      <ul>
        <li><strong>Heir Property:</strong> If the owner passed away, you need specific probate documents before the DMV will touch the title.</li>
        <li><strong>Active Liens:</strong> Even a paid-off loan from 1995 can haunt you if the bank never sent the 'Lien Release' to the state.</li>
        <li><strong>Signature Mismatch:</strong> The name on the title must EXACTLY match the seller's current ID.</li>
      </ul>
      <p>We act as your proxy with the DMV, clearing these hurdles so you don't have to spend hours in line.</p>
    `
  },
  {
    id: '4',
    title: "Repair or Sell As-Is? The Mobile Home Owner's Dilemma",
    excerpt: "Torn between fixing up or selling? See which option actually puts more money in your pocket.",
    date: "Mar 15, 2024",
    author: "Property Specialist",
    category: "ROI & Repairs",
    imageUrl: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=800&q=80",
    content: `
      <h3>The Reality of Mobile Home ROI</h3>
      <p>My neighbor in Charleston spent $12,000 updating her kitchen, thinking she'd add $15,000 to her sale price. The buyer offered the same amount either way. Why? Because mobile home value is capped by the park's 'comps'.</p>

      <h3>3 Repairs ALWAYS Worth Doing:</h3>
      <ol>
        <li><strong>Fixing Leaky Faucets/Pipes:</strong> Water damage is the #1 killer of mobile home value.</li>
        <li><strong>Professional Cleaning:</strong> A $30 deep clean can add $2,000 in perceived value.</li>
        <li><strong>Securing Skirting:</strong> It's the first thing a buyer sees.</li>
      </ol>

      <h3>5 Repairs that NEVER Pay Back:</h3>
      <p>High-end granite counters, expensive lighting fixtures, and custom landscaping on park land usually result in a net loss for the seller. Our 'As-Is' model removes this headache entirely.</p>
    `
  },
  {
    id: '5',
    title: "Inherited a Mobile Home? Your 4 Options Explained",
    excerpt: "Feeling overwhelmed by an inherited property? This guide walks you through the best paths forward.",
    date: "Mar 20, 2024",
    author: "Estate Planning",
    category: "Estate Planning",
    imageUrl: "https://images.unsplash.com/photo-1516156008625-3a9d6067fad5?auto=format&fit=crop&w=800&q=80",
    content: `
      <h3>Navigating Probate and Titles</h3>
      <p>After my father passed, we found out he still owned his old single-wide in Florence. My siblings and I argued for weeks. Here's what we learned about 'Quick-Claim' vs. Probate transfers.</p>

      <h3>Your Options:</h3>
      <ul>
        <li><strong>Keep as Rental:</strong> Only viable if the park allows subletting (most in SC don't).</li>
        <li><strong>Move to Private Land:</strong> Requires a site permit and heavy moving costs.</li>
        <li><strong>The Fast Cash Sale:</strong> We provide a guaranteed price to the estate so you can distribute funds to heirs immediately.</li>
        <li><strong>Refurbish:</strong> High risk, high effort, but potentially higher reward if you have the skills.</li>
      </ul>
      <p>We specialize in working with estate attorneys to simplify the title transfer during the probate period.</p>
    `
  },
  {
    id: '6',
    title: "Mobile Home Relocation: When It Makes Sense (And Doesn't)",
    excerpt: "Thinking about moving your home? Understand the real costs and risks before you hire a mover.",
    date: "Mar 25, 2024",
    author: "Moving Guide",
    category: "Moving Guide",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    content: `
      <h3>The $15,000 Question</h3>
      <p>The Smith family in Greenville paid $18,000 to move their 1998 double-wide only to discover their new park wouldn't accept anything over 10 years old. They were stuck with a home they couldn't place.</p>

      <h3>Relocation Reality Check:</h3>
      <ul>
        <li><strong>Permits:</strong> SC and NC require specific wide-load permits for every county you cross.</li>
        <li><strong>Age Restrictions:</strong> Most modern parks won't take homes older than 15-20 years.</li>
        <li><strong>Structural Risks:</strong> Moving an older home often causes wall cracks and plumbing failures.</li>
      </ul>
      <p>Often, it's financially smarter to sell your current home and buy a newer one at the target location. We can help calculate that break-even point for you.</p>
    `
  },
  {
    id: '7',
    title: "The 7-Day Close: Moving Fast During Life Transitions",
    excerpt: "Need to sell fast? Here is exactly how our 7-day process works for SC owners.",
    date: "Mar 28, 2024",
    author: "Solutions Team",
    category: "Success Stories",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    content: `
      <h3>Speed Without Sacrifice</h3>
      <p>When Sarah got a job offer in Atlanta, she had 14 days to relocate from her home in Columbia. A traditional sale would take months. Here's how we hit the 7-day mark.</p>

      <h3>Our Streamlined Timeline:</h3>
      <ul>
        <li><strong>Day 1:</strong> Initial Audit and Guaranteed Price Offer.</li>
        <li><strong>Day 2:</strong> Title Verification with the DMV.</li>
        <li><strong>Day 3:</strong> Park Management Approval Meeting.</li>
        <li><strong>Day 7:</strong> Final Signature and Funds Transferred.</li>
      </ul>
      <p>By specializing ONLY in mobile homes, we have the direct lines to the people who make these decisions, bypassing the usual red tape.</p>
    `
  },
  {
    id: '8',
    title: "Value Myths: What is Your Home Really Worth?",
    excerpt: "Stop guessing. Learn the 3 factors that actually determine your mobile home's market value.",
    date: "Mar 30, 2024",
    author: "Market Trends",
    category: "Market Trends",
    imageUrl: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&w=800&q=80",
    content: `
      <h3>The #1 Mistake: Using Zillow</h3>
      <p>Zillow is terrible at valuing mobile homes, especially those on leased land. They often treat them as 'real estate' when they are actually 'chattel'.</p>

      <h3>The 3 Real Value Drivers:</h3>
      <ol>
        <li><strong>Location (The Park Factor):</strong> A home in a 5-star Myrtle Beach community is worth 40% more than the same home in a neglected park.</li>
        <li><strong>Title Status:</strong> A clear, 'paper-in-hand' title adds immediate value.</li>
        <li><strong>Market Velocity:</strong> How many buyers are looking for your specific configuration (e.g. 3BR/2BA) right now?</li>
      </ol>
      <p>We provide a free, accurate valuation based on actual Carolinas sale records, not internet algorithms.</p>
    `
  }
];

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 3);

  return (
    <div id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">Resources</h2>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">Manufactured Housing Knowledge</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Expert advice on mobile home titles, park regulations, and maximizing your property value in the Carolinas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2 group border border-gray-100">
              <div className="h-60 overflow-hidden relative bg-blue-50">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/95 backdrop-blur-sm text-amber-700 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg border border-amber-100">{post.category}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-gray-400 mb-4 font-bold uppercase tracking-widest">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
                  {post.date}
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors leading-tight">{post.title}</h3>
                <p className="text-gray-600 mb-8 line-clamp-3 flex-1 text-sm leading-relaxed">{post.excerpt}</p>
                <button 
                  onClick={() => setSelectedPost(post)} 
                  className="inline-flex items-center text-blue-900 font-black text-sm hover:text-amber-600 transition-colors uppercase tracking-widest group/btn"
                >
                  Read Full Article 
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-8 py-4 bg-white border-2 border-gray-100 text-blue-900 font-black rounded-xl hover:bg-gray-50 transition-all shadow-md group"
            >
              Load More Articles
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}
      </div>

      {selectedPost && (
        <div className="fixed inset-0 z-[120] overflow-y-auto" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen p-4 sm:p-6">
            <div className="fixed inset-0 bg-blue-950/90 transition-opacity backdrop-blur-md" onClick={() => setSelectedPost(null)}></div>
            
            <div className="relative bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all w-full max-w-4xl max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-300">
              
              {/* Modal Header/Image */}
              <div className="relative h-64 md:h-80 overflow-hidden flex-shrink-0 bg-blue-50">
                <img 
                  src={selectedPost.imageUrl} 
                  className="w-full h-full object-cover" 
                  alt="" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all z-30"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-8 left-8 md:left-12 z-20">
                  <span className="bg-amber-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg mb-4 inline-block">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight leading-none">{selectedPost.title}</h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto px-8 py-8 md:px-12 md:pb-16 bg-white">
                <div className="flex items-center gap-6 mb-10 pb-6 border-b border-gray-100 text-sm font-bold text-gray-400">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-blue-900" />
                    {selectedPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-blue-900" />
                    {selectedPost.date}
                  </div>
                </div>

                <article className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed font-medium
                  prose-h3:text-blue-900 prose-h3:font-black prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                  prose-p:mb-6 prose-li:mb-2 prose-strong:text-blue-950 prose-strong:font-black"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
                />

                <div className="mt-16 p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                    <BookOpen className="w-8 h-8 text-amber-500" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="font-black text-blue-950 text-xl mb-2">Want a Specialist's Opinion?</h4>
                    <p className="text-blue-800 font-medium">This article is a general guide. For specific advice on your property and a guaranteed price offer, reach out to our team today.</p>
                  </div>
                  <a 
                    href="#contact" 
                    onClick={() => setSelectedPost(null)} 
                    className="whitespace-nowrap bg-amber-600 text-white px-8 py-4 rounded-xl font-black shadow-lg hover:bg-amber-700 transition-all transform hover:scale-105"
                  >
                    Get My Valuation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};