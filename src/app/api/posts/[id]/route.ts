import { NextResponse } from 'next/server';
// We'll fetch from the main route or use the same mock data.
// Since mockPosts is exported, we can just import it.
import { GET as getAllPosts } from '../route';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Reuse the main get to have a single source of truth for mock data
  const url = new URL(request.url);
  url.search = '';
  const allPostsReq = new Request(url);
  const allPostsRes = await getAllPosts(allPostsReq);
  const allPosts = await allPostsRes.json();
  
  const post = allPosts.find((p: any) => p.id === id);
  
  if (!post) {
    return new NextResponse('Post not found', { status: 404 });
  }
  
  return NextResponse.json(post);
}
