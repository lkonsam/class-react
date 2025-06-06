import { Outlet } from "react-router-dom";
import UserHeader from "../components/UserHeader";

export default function User() {
  return (
    <div>
      <UserHeader />
      <h2>User Group URL show green</h2>
      <main
        style={{
          color: "GREEN",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
