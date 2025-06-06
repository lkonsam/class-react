import { Link } from "react-router-dom";

export default function UserHeader() {
  return (
    <>
      <div className="header">
        <Link to="/"> Home</Link>
        <Link to="/user/all"> About</Link>
        <Link to="/user/new"> Login</Link>
        <Link to="/user">Users</Link>
      </div>
    </>
  );
}
