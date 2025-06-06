import { Outlet } from "react-router-dom";
import UserHeader from "../components/UserHeader";

export default function User() {
  return (
    <div>
      <UserHeader />
      <h2>User Section</h2>
      <Outlet /> {/* This renders the nested child routes */}
    </div>
  );
}
