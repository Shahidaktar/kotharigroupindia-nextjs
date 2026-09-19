'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, ArrowUpRight } from 'lucide-react';
import type { WpBlogPost } from '@/lib/wp-posts';
import { Reveal } from '@/components/main/Reveal';

interface BlogCardProps {
  post: WpBlogPost;
  index: number;
  basePath?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, index, basePath = '/blogs' }) => {
  return (
    <Reveal key={post.id} delay={(index % 3) * 90} className="h-full">
      <Link href={`${basePath}/${post.slug}`} className="block h-full">
        <article className="group relative bg-white border border-slate-200/90 flex flex-col justify-between h-full shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500 overflow-hidden">
          {/* Image Header - full image, not cropped */}
          <div className="relative overflow-hidden bg-slate-900 border-b border-slate-200">
            {post.featuredImage ? (
              <img
                src={post.featuredImage}
                alt={post.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.opacity = '0.3';
                }}
                className="w-full h-auto object-contain opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            ) : (
              <div className="w-full aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-950" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

            {/* Category Badge */}
            {/* <div className="absolute top-4 left-4">
              <span className="bg-black text-white text-[10px] font-mono tracking-widest font-medium px-3 py-1 uppercase">
                {post.category}
              </span>
            </div> */}
          </div>

          {/* Content Body */}
          <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-slate-500 uppercase font-medium">
                <span>{post.date}</span>
                {/* <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {post.readMinutes} MIN READ
                </span> */}
              </div>

              <h3 className="text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight group-hover:text-[#1575B3] transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>

              <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            {/* Card CTA */}
            <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase group-hover:text-[#1575B3] transition-colors">
              <span>{basePath === '/successstories' ? 'READ STORY' : 'READ BLOG'}</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>
        </article>
      </Link>
    </Reveal>
  );
};