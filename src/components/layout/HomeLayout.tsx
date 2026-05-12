import { Outlet } from "react-router-dom";
import { Navbar } from "../NavBar";
import { Footer } from "../Footer";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="flex-grow bg-white">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default HomeLayout;
