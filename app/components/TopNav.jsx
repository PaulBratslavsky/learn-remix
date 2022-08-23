import { Link } from "@remix-run/react";
import MenuLink from "~/components/MenuLink";
import ButtonLink from "~/components/ButtonLink";

export default function TopNav() {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-10">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link
            className="text-4xl text-primary hover:text-secondary font-bold"
            to="/"
          >
            Remix Fun
          </Link>
        </div>
        <nav>
          <ul className="flex">
            <MenuLink to="/posts">Posts</MenuLink>
          </ul>
        </nav>
        <div className="flex-none">
          <ButtonLink className="btn-sm" to="posts/add-post">Recommend Topic</ButtonLink>
        </div>
      </div>
    </div>
  );
}
