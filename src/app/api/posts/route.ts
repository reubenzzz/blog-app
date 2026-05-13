import { NextResponse } from 'next/server';

export interface Post {
  id: string;
  title: string;
  category?: string;
  excerpt?: string;
  author?: {
    name: string;
    avatar: string;
  };
  readTime?: string;
  image: string;
  featured?: boolean;
  featuredSize?: 'large' | 'small';
}

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Unlocking Business Efficiency with SaaS Solutions',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    featuredSize: 'large',
  },
  {
    id: '2',
    title: 'Revolutionizing industries through SaaS implementation',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
    featured: true,
    featuredSize: 'small',
  },
  {
    id: '3',
    title: 'Synergizing saas and UX design for elevating digital experiences',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    featured: true,
    featuredSize: 'small',
  },
  {
    id: '4',
    title: 'Navigating saas waters with intuitive UI and UX',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
    featured: true,
    featuredSize: 'small',
  },
  {
    id: '5',
    title: 'Sculpting saas success - the art of UI and UX design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80',
    featured: true,
    featuredSize: 'small',
  },
  {
    id: '6',
    title: 'Transforming saas platforms - a UI/UX design odyssey',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
    featured: true,
    featuredSize: 'small',
  },
  {
    id: '7',
    title: 'Mastering UI Elements: A Practical Guide for Designers',
    excerpt: 'Dive into the world of user interfaces with our expert guides, latest trends, and practical tips.',
    author: {
      name: 'Jennifer Taylor',
      avatar: 'https://i.pravatar.cc/150?u=jennifer'
    },
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: '8',
    title: 'Crafting Seamless Experiences: The Art of Intuitive UI Design',
    excerpt: 'Explore the principles and techniques that drive user-centric UI design, ensuring a seamless and in...',
    author: {
      name: 'Jennifer Taylor',
      avatar: 'https://i.pravatar.cc/150?u=jennifer'
    },
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: '9',
    title: 'Beyond Aesthetics: The Power of Emotional UX Design',
    excerpt: 'Delve into the realm of emotional design and discover how incorporating empathy and psychol...',
    author: {
      name: 'Ryan A.',
      avatar: 'https://i.pravatar.cc/150?u=ryan'
    },
    readTime: '2 min read',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80',
    featured: false,
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('q');

  let results = mockPosts;

  if (search) {
    const lowercaseSearch = search.toLowerCase();
    results = mockPosts.filter((post) => 
      post.title.toLowerCase().includes(lowercaseSearch) ||
      post.excerpt?.toLowerCase().includes(lowercaseSearch)
    );
  }

  // Add artificial delay to simulate real API
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(results);
}
