import { Link } from "@remix-run/react";

export default function SideMenuLinks({ data = [], component }) {
  const Component = component;
  return data.map((data) => {
    const { title, slug } = data.attributes;
    return (
      <Link key={data.id} to={slug}>
        {component ? <Component data={data} /> : title}
      </Link>
    );
  });
}
