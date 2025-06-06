import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/login"> Login</Link>
        <Link to="/user">Users</Link>
      </div>
    </>
  );
}
