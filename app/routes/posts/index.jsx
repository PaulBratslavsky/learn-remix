import Slider from "~/components/Slider";

import { useLoaderData } from "@remix-run/react";
import { getAllPosts } from "~/api/posts/get-all-posts.server";

export async function loader() {
  const response = await getAllPosts();
  return response.json();
}

export default function () {
  const { data } = useLoaderData();
  const posts = data.attributes.posts_in_group;
  return <Slider data={posts} />
}
