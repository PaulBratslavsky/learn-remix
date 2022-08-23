import { Link } from "@remix-run/react"
export default function MenuLink({ to, children }) {
  return (
    <li className='mr-3 font-bold text-info text-2xl hover:text-xl hover:text-secondary'>
      <Link to={to}>{children}</Link>
    </li>
  )
}
