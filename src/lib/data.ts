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

const EXTERNAL_MOCK_API = 'https://68bf7e239c70953d96efaba1.mockapi.io/posts';

// Helper to map JSONPlaceholder dummy data to our exact UI requirements
function mapToUIPost(data: any, index: number): Post {
  const isFeatured = index < 6;
  let featuredSize: 'large' | 'small' | undefined = undefined;
  if (isFeatured) {
    featuredSize = index === 0 ? 'large' : 'small';
  }

  const images = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80'
  const fallbackTitles = [
    'Unlocking Business Efficiency with SaaS Solutions',
    'Revolutionizing industries through SaaS implementation',
    'Synergizing saas and UX design for elevating digital experiences',
    'Navigating saas waters with intuitive UI and UX',
    'Sculpting saas success - the art of UI and UX design',
    'Transforming saas platforms - a UI/UX design odyssey',
    'Mastering UI Elements: A Practical Guide for Designers',
    'Crafting Seamless Experiences: The Art of Intuitive UI Design',
    'Beyond Aesthetics: The Power of Emotional UX Design'
  ];

  return {
    id: data.id.toString(),
    title: data.title || fallbackTitles[index % fallbackTitles.length],
    excerpt: (data.body || data.content || data.text || 'Discover the latest insights and best practices in UI/UX design with our comprehensive guides. Explore the principles and techniques that drive user-centric design.').substring(0, 100) + '...',
    category: index === 0 ? 'Business' : undefined,
    author: {
      name: index % 2 === 0 ? 'Jennifer Taylor' : 'Ryan A.',
      avatar: `https://i.pravatar.cc/150?u=${data.id}`
    },
    readTime: `${(index % 5) + 2} min read`,
    image: images[index % images.length],
    featured: isFeatured,
    featuredSize
  };
}

export async function fetchPosts(search?: string | null): Promise<Post[]> {
  const res = await fetch(EXTERNAL_MOCK_API, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch from external mock API');
  
  const rawPosts = await res.json();
  let results = rawPosts.slice(0, 9).map(mapToUIPost);

  if (search) {
    const lowercaseSearch = search.toLowerCase();
    results = results.filter((post: Post) => 
      post.title.toLowerCase().includes(lowercaseSearch) ||
      post.excerpt?.toLowerCase().includes(lowercaseSearch)
    );
  }

  return results;
}

export async function fetchPost(id: string): Promise<Post | null> {
  const res = await fetch(`${EXTERNAL_MOCK_API}/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error('Failed to fetch post from external mock API');
  }
  
  const rawPost = await res.json();
  return mapToUIPost(rawPost, parseInt(id) - 1);
}

export async function getAllPostIds(): Promise<{id: string}[]> {
  const posts = await fetchPosts();
  return posts.map(post => ({ id: post.id }));
}
