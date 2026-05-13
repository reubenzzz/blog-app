import { NextResponse } from 'next/server';
import { fetchPosts } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('q');

  const results = await fetchPosts(search);

  // Add artificial delay to simulate real API
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(results);
}
