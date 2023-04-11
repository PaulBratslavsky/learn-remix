import { Outlet, useLoaderData } from "@remix-run/react";
import { getAllShortPosts } from "~/api/posts/get-all-short-posts.server";

import ShortPostLayout from "~/components/ShortPostLayout";
import SideMenu from "~/components/SideMenu";
import Footer from "~/components/Footer";
import ShortPostLink from '~/components/ShortPostLink';

export async function loader() {
  const response = await getAllShortPosts();
  return response.json();
}

export default function PostsRoute() {
  const { data } = useLoaderData();
  if (!data) return <h1 className='container mx-auto text-center my-36 text-4xl'>Beep boop beep.... <span className="text-pink-500">erp</span>!</h1>;
  return (
    <ShortPostLayout data={data} menu={SideMenu} menuComponent={ShortPostLink}>
      <Outlet />
      <Footer />
    </ShortPostLayout>
  );
}