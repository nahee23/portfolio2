import { TbBowlSpoon } from "react-icons/tb";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-primary text-base-100">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <TbBowlSpoon className="inline pr-2 text-3xl" />
          <Link href="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link href="/" className="btn btn-ghost btn-sm rounded-btn">
              HOME
            </Link>
            <Link href="/about" className="btn btn-ghost btn-sm rounded-btn">
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

//Props 타이틀 입력 안했을때 기본 깃허브 finder 입력
Navbar.defaultProps = {
  title: "RESTAURANT FINDER",
};
//Props 타이틀 타입은 문자열
Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
