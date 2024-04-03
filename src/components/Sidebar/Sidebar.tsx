import { useState } from "react";
import { useNavigate } from "react-router";

import { CalendarIcon } from "@heroicons/react/16/solid";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [over, setOver] = useState(false);

  const mouseEnter = () => {
    setOver(true);
  };

  const mouseLeave = () => {
    setOver(false);
  };
  const onClickHandler = (url: string) => {
    navigate(url);
    return;
  };

  return (
    <div
      className="sidebar-container"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <ul className="sidebar-list">
        <li
          className="sidebar-list-btn"
          onClick={() => onClickHandler("/calc-date")}
        >
          <CalendarIcon style={{ paddingRight: "10px", width: "20px" }} />{" "}
          {over ? <span className="sidebar-list-text">Data</span> : null}
        </li>
        <li
          className="sidebar-list-btn"
          onClick={() => onClickHandler("/memo-cut")}
        >
          <PencilSquareIcon style={{ paddingRight: "10px", width: "20px" }} />{" "}
          {over ? <span className="sidebar-list-text">Memo</span> : null}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
