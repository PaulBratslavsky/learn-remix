import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getPostBySlug } from "~/api/posts/get-post-by-slug.server";
import Post from "~/components/Post";
import HeroText from "~/components/HeroText";

export async function loader({ params }) {
  const slug = params.slug;
  const response = await getPostBySlug(slug);
  const data = await response.json();

  if (!data.data?.attributes.slug) throw json("Not Found", { status: 404 });
  else return data;
}

export function CatchBoundary() {
  return (
    <HeroText title="Not Found" text="Sorry, I really did try to find it." />
  );
}

export default function PostRoute() {
  const { data } = useLoaderData();
  return <Post data={data} />;
}
