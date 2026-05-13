import { NextResponse } from 'next/server';
import { fetchPost } from '@/lib/data';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const post = await fetchPost(id);
  
  if (!post) {
    return new NextResponse('Post not found', { status: 404 });
  }
  
  return NextResponse.json(post);
}
