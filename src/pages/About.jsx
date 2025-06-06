import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const redirectBtn = () => {
    navigate("/leitaba/url");
  };

  return (
    <>
      <h1>This is about page</h1>
      <button onClick={redirectBtn}> Redirect to Home page</button>
    </>
  );
}
