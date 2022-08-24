import { Outlet, useLoaderData } from "@remix-run/react";
import { getAllPosts } from "~/api/posts/get-all-posts.server";

import PostLayout from "~/components/PostLayout";
import SideMenu from "~/components/SideMenu";
import PostLink from "~/components/PostLink";
import Footer from "~/components/Footer";

export async function loader() {
  const response = await getAllPosts();
  return response.json();
}

export default function PostsRoute() {
  const { data } = useLoaderData();
  return (
    <PostLayout data={data} menu={SideMenu} menuComponent={PostLink}>
      <Outlet />
      <Footer />
    </PostLayout>
  );
}
