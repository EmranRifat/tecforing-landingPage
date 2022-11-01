import React from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <img className="w-28 ml-32" src={logo} alt="" />
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a>BUSINESS CYBERSECURITY</a>
            </li>
            <div class="dropdown dropdown-hover">
              <label tabindex="0" class="btn btn-link text-black  m-1">
                Hover
              </label>
              <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <li>
              <a>Academy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
