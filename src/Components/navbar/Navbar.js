import logo from "../../assets/logo.svg";
import DropDown from "./DropDownMenu";
import mobileBars from "../../assets/icon-menu.svg";
import close from "../../assets/icon-close-menu.svg";
import { useRef } from "react";

export default function Navbar() {
  // return (
  //   <nav className=" p-2 flex justify-between  ">
  //     <img src={logo} alt="" className="w-auto h-auto mr-11" />
  //     <ul className=" xl:flex gap-x-9 hidden ">
  //       <DropDown />
  //       <li className="list-style">Careers</li>
  //       <li className="list-style">About</li>
  //     </ul>
  //     <ul className=" hidden xl:flex ml-auto gap-x-4">
  //       <li className="list-style">Login</li>
  //       <li className="list-style reg ">Register</li>
  //     </ul>
  //   </nav>
  // );
  const mobMenuRef = useRef(null);
  function showMobMenu() {
    mobMenuRef.current.classList.add("animate-showContent");
    mobMenuRef.current.classList.remove("animate-hideContent");
  }
  function hideMobMenu() {
    mobMenuRef.current.classList.add("animate-hideContent");

    mobMenuRef.current.classList.remove("animate-showContent");
  }
  return (
    <>
      <nav className="flex justify-between xl:justify-normal items-center p-2 ">
        <img src={logo} alt="" className="" />
        <img
          src={mobileBars}
          alt=""
          className="h-auto w-auto xl:hidden"
          onClick={showMobMenu}
        />
        <ul ref={mobMenuRef} className="u-list-mob u-list  ">
          <img
            src={close}
            alt=""
            className="w-auto h-auto ml-auto xl:hidden  "
            onClick={hideMobMenu}
          />
          <DropDown />
          <li className="list-style">Careers</li>
          <li className="list-style">About</li>
          <div className="flex w-full text-center xl:w-fit xl:ml-auto flex-col xl:flex-row gap-x-4 xl:items-center ">
            <li className="list-style mb-4 xl:mb-0 ">Login</li>
            <li className="list-style reg">Register</li>
          </div>
        </ul>
      </nav>
    </>
  );
}
