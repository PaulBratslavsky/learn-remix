import { Outlet, useLoaderData } from "@remix-run/react";
import { getAllPosts } from "~/api/posts/get-all-posts.server";

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
    <div>
      <div className="grid grid-cols-4 gap-4 container mx-auto">
        <div className="sidebar col-span-1 pt-20 max-h-screen overflow-scroll">
          <SideMenu data={data.attributes.posts_in_group.data} component={PostLink} />
        </div>
        <div className="content col-span-3 pt-20 max-h-screen overflow-scroll">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}

