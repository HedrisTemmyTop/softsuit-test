import { useState, FC } from "react";
import "./_sidebar.scss";
import { FaShuffle } from "react-icons/fa6";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdPeople,
  IoMdPerson,
} from "react-icons/io";
import { Link } from "../../types/links";
import { BiSolidDashboard } from "react-icons/bi";
import { PiTreeStructureFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { Link as Links } from "react-router-dom";

const mainLink: Link[] = [
  {
    id: 1,
    icon: <FaShuffle />,
    label: ["Switch Module", "Payroll Management"],
    children: {
      element: [
        "System Administration",
        "People Management",
        "Payroll Management",
        "Self Service",
      ],
    },
  },
];

const Sidebar: FC = () => {
  const [openModule, setOpenModule] = useState<boolean>(false);
  const [element, setElment] = useState<boolean>(true);

  const handleModule = () => {
    setOpenModule((prev) => !prev);
  };
  const handleElToggle = () => {
    setElment((prev) => !prev);
  };
  return (
    <aside className="sidebar">
      <div className="sidebar__container">
        {mainLink.map((link) => (
          <div key={link.id} className="sidebar__element">
            <div
              className="sidebar__content sidebar__content-special"
              onClick={handleModule}
            >
              <span className="sidebar__content--icon-shuffle">
                {link.icon}
              </span>
              <span className="sidebar__content--text">
                {link.label.map((label) => (
                  <div key={label}>{label}</div>
                ))}
              </span>
              {link.children && (
                <div>
                  <span className="sidebar__content--icon">
                    {openModule ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
              )}
            </div>
            {openModule && (
              <div className="sidebar__content--children">
                <div></div>
                <div>
                  {link.children &&
                    link.children.element.map((child) => <div>{child}</div>)}
                </div>

                <div></div>
              </div>
            )}
          </div>
        ))}
        <main className="sidebar__main">
          <ul className="sidebar__list">
            <li className="sidebar__item">
              <BiSolidDashboard />

              <span>Dashboard</span>
            </li>
            <li className="sidebar__item">
              <PiTreeStructureFill className="transform" />

              <span>Payroll Activities</span>
            </li>
            <li>
              <div className="sidebar__item active" onClick={handleElToggle}>
                <IoSettingsSharp />

                <span>Element Setup</span>
                <span className="icon-down">
                  {element ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              {element && (
                <Links className="sidebar__item--summary" to="/elements">
                  <div className="active__element">Elements</div>
                  <div>Balances</div>
                </Links>
              )}
            </li>
            <li className="sidebar__item">
              <IoMdPeople />

              <span>Employees</span>
              <span></span>
            </li>
          </ul>
          <ul className="sidebar__bottom">
            <li className="sidebar__item">
              <IoSettingsSharp />

              <span>Payroll Settings</span>
              <span className="icon-down">
                <IoIosArrowDown />
              </span>
            </li>
            <li className="sidebar__item">
              <IoMdPerson />

              <span>My Account </span>
            </li>
            <li className="sidebar__item">
              <TbLogout />

              <span>Logout </span>
            </li>
          </ul>
        </main>
      </div>
    </aside>
  );
};

export default Sidebar;
