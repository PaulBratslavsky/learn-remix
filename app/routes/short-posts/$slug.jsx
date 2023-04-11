import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getShortPostBySlug } from "~/api/posts/get-short-post-by-slug.server";
import ShortPost from "~/components/ShortPost";
import HeroText from "~/components/HeroText";

export async function loader({ params }) {
  const slug = params.slug;
  console.log(`slug`, slug)
  const response = await getShortPostBySlug(slug);
  const data = await response.json();

  console.log(`data`, data)

  if (!data.data[0]?.attributes.slug) throw json("Not Found", { status: 404 });
  else return data;
}

export function CatchBoundary() {
  return (
    <HeroText title="Not Found" text="Sorry, I really did try to find it." />
  );
}

export default function PostRoute() {
  const { data } = useLoaderData();
  return <ShortPost data={data[0]} />;
}
