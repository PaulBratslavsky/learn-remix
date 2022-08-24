import { Link } from "@remix-run/react";

export default function ButtonLink({ children, to, className, onClick }) {
  return (
    <Link className={`btn btn-primary ${className ? className : ""}`} to={to} onClick={onClick}>
      {children}
    </Link>
  );
}
