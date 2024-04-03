import { Outlet } from "react-router";
import Header from "../../components/Header/Header.tsx";
import Sidebar from "../../components/Sidebar/Sidebar.tsx";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Sidebar />
      <div className="body-container">
        <Outlet />
      </div>
    </div>
  );
};

export default LandingPage;
