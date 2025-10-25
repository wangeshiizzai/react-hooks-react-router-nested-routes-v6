import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      {/* 👇 This is where nested routes will appear */}
      <Outlet />
    </>
  );
}

export default App;
