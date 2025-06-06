// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
import Header from "./components/Header";
import Counter from "./components/Counter";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <h2>Default Group is RED</h2>
      <main
        style={{
          color: "RED",
        }}
      >
        <Outlet />
      </main>

      {/* <BrowserRouter>
        <div>
          <Header />

          <h1> marque notification </h1>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hero/yahoo" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </div>
      </BrowserRouter> */}
    </div>
  );
}
