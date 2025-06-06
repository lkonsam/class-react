import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <Link to="/"> Home</Link>
        <Link to="/hero/yahoo"> About</Link>
        <Link to="/yahoo/berani/aba?ljdls=213"> Tomba</Link>
        <Link to="/login"> Login</Link>
      </div>
    </>
  );
}
