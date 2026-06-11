import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ScrollRestoration from "../../components/ScrollRestoration/ScrollRestoration";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow">
        <ScrollRestoration />
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;