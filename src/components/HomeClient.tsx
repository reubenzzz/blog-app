'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { Post } from '@/lib/data';
import { Search } from 'lucide-react';
import Link from 'next/link';

export function HomeClient({ initialPosts }: { initialPosts: Post[] }) {
  const [search, setSearch] = useState('');

  const { data: posts = initialPosts, isLoading } = useQuery<Post[]>({
    queryKey: ['posts', search],
    queryFn: async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
      const params = search ? `?q=${encodeURIComponent(search)}` : '';
      const res = await fetch(`${baseUrl}/api/posts${params}`);
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    },
    initialData: search ? undefined : initialPosts,
  });

  const featuredPosts = posts.filter(p => p.featured);
  const largeFeatured = featuredPosts.find(p => p.featuredSize === 'large');
  const smallFeatured = featuredPosts.filter(p => p.featuredSize === 'small').slice(0, 4);
  const recentPosts = posts.filter(p => !p.featured);

  return (
    <div className="space-y-16">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto sm:max-w-none sm:mx-0 w-full sm:w-80">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search posts..."
          className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-full leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 sm:text-sm transition-colors"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {isLoading && <div className="text-center py-12 text-gray-500">Loading posts...</div>}

      {!isLoading && posts.length === 0 && (
        <div className="text-center py-12 text-gray-500">No posts found matching your search.</div>
      )}

      {!isLoading && posts.length > 0 && (
        <>
          {/* Featured Section */}
          {!search && largeFeatured && (
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Link href={`/posts/${largeFeatured.id}`} className="group block relative rounded-3xl overflow-hidden aspect-[16/9] lg:aspect-auto lg:h-[500px]">
                  <img 
                    src={largeFeatured.image} 
                    alt={largeFeatured.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 sm:p-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-4">
                      {largeFeatured.category}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
                      {largeFeatured.title}
                    </h2>
                  </div>
                </Link>
              </div>
              
              <div className="lg:col-span-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Other featured posts</h3>
                <div className="flex flex-col gap-6">
                  {smallFeatured.map((post) => (
                    <Link key={post.id} href={`/posts/${post.id}`} className="group flex gap-4 items-center">
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 leading-tight group-hover:text-gray-600 transition-colors line-clamp-3">
                        {post.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Recent Posts Section */}
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Recent Posts</h3>
              <button className="px-5 py-2 text-sm font-medium border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-gray-900 bg-white">
                All Posts
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Link key={post.id} href={`/posts/${post.id}`} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    {post.author && (
                      <div className="flex items-center gap-3 mt-auto">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name} 
                          className="w-10 h-10 rounded-full object-cover bg-gray-100"
                        />
                        <div className="flex flex-col text-sm">
                          <span className="font-semibold text-gray-900">{post.author.name}</span>
                          <span className="text-gray-500">{post.readTime}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
