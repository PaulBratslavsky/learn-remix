import { Link } from "@remix-run/react";

export default function ButtonLink({ children, to, className }) {
  return (
    <Link className={`btn btn-primary ${className ? className : ""}`} to={to}>
      {children}
    </Link>
  );
}
