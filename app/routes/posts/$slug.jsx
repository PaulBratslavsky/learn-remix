import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node'
import { getPostBySlug } from '~/api/posts/get-post-by-slug.server';
import Post from "~/components/Post";

export async function loader({params}) {
  const slug = params.slug;
  const response = await getPostBySlug (slug);
  
  const data = await response.json()

  if (!data.data?.attributes.slug) throw json("Not Found", { status: 404 })
  else return data;
}

// Nested Error Page
export function CatchBoundary() {
  return (
    <div>
      <h2>We couldn't find that page!</h2>
    </div>
  );
}

export default function PostRoute() {
  const { data } = useLoaderData()
  return <Post data={data} />;
}
