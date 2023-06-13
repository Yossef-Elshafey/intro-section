import arrowDown from "../../assets/icon-arrow-down.svg";
import arrowUp from "../../assets/icon-arrow-up.svg";
import todo from "../../assets/icon-todo.svg";
import calendar from "../../assets/icon-calendar.svg";
import remind from "../../assets/icon-reminders.svg";
import planning from "../../assets/icon-planning.svg";
import { useRef } from "react";

export default function DropDown() {
  const featuresDropMenuRef = useRef(null);
  const companyDropMenuRef = useRef(null);
  const imgRef = useRef([]);
  function showDropMenu(event, targetList) {
    // targetList( useRef value)
    targetList.classList.toggle("hidden");
    if (event.target === featuresDropMenuRef.current.parentElement) {
      if (!targetList.classList.contains("hidden")) {
        imgRef.current[0].src = arrowUp;
      } else {
        imgRef.current[0].src = arrowDown;
      }
    } else if (event.target === companyDropMenuRef.current.parentElement) {
      if (!targetList.classList.contains("hidden")) {
        imgRef.current[1].src = arrowUp;
      } else {
        imgRef.current[1].src = arrowDown;
      }
    }
  }
  return (
    <>
      <li
        className="list-style relative "
        onClick={(event) => showDropMenu(event, featuresDropMenuRef.current)}
      >
        Features
        <img
          ref={(featuresRef) => {
            imgRef.current.push(featuresRef);
          }}
          src={arrowDown}
          alt=""
          className="arrow"
        />
        <ul className=" drop-down hidden  " ref={featuresDropMenuRef}>
          <li className=" drop-down-list">
            <img src={todo} alt="" className=" w-auto h-auto mr-2 " />
            Todo List
          </li>
          <li className="drop-down-list">
            <img src={calendar} alt="" className=" w-auto h-auto mr-2" />
            Calendar
          </li>
          <li className="drop-down-list">
            <img src={remind} alt="" className=" w-auto h-auto mr-2" />
            Reminders
          </li>
          <li className="drop-down-list">
            <img src={planning} alt="" className=" w-auto h-auto mr-2" />
            Planning
          </li>
        </ul>
      </li>
      <li
        className="list-style"
        onClick={(event) => showDropMenu(event, companyDropMenuRef.current)}
      >
        Company
        <img
          src={arrowDown}
          ref={(companyRef) => imgRef.current.push(companyRef)}
          alt=""
          className="arrow"
        />
        <ul className=" drop-down hidden  " ref={companyDropMenuRef}>
          <li className=" drop-down-list">History</li>
          <li className="drop-down-list">Our Team</li>
          <li className="drop-down-list">Blog</li>
        </ul>
      </li>
    </>
  );
}
