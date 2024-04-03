import { useNavigate } from "react-router";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";

import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const onClickHandler = (url: string) => {
    navigate(url);
    return;
  };
  return (
    <div className="header-container">
      <div className="header-home" style={{ width: "90%" }}>
        <div className="header-title">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => onClickHandler("/")}
          >
            Doodles and Helpful Tools
          </span>
        </div>
        <div className="header-subtitle">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => onClickHandler("/")}
          >
            Made by Antônio Ricardo
          </span>
        </div>
      </div>
      <div className="login">
        <button className="btn-login">
          <ArrowLeftEndOnRectangleIcon style={{ marginRight: "5px" }} />
          Login?
        </button>
      </div>
    </div>
  );
};

export default Header;
