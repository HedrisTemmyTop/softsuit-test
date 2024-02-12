import logo from "./../../assets/softalliance.png";
import "./_header.scss";
import { GoHomeFill } from "react-icons/go";
import { IoIosArrowDown, IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="soft alliance" />
      </div>
      <div className="header__organization">
        <div className="header__organization--org">
          <span className="header__organization--icon">
            <GoHomeFill />
          </span>

          <div className="header__organization--text">
            <div>Change Organization</div>
            <div>PaperSoft Limited</div>
          </div>
          <span className="header__organization--icon-down">
            <IoIosArrowDown />
          </span>
        </div>
        <div className="header__organization--search">
          <input
            type="text"
            placeholder="Search for anything..."
            className="header__organization--input"
          />
          <span className="header__organization--icon-search">
            <CiSearch />
          </span>
        </div>
      </div>
      <div className="header__profile">
        <span className="header__profile--notification">
          <IoIosNotifications />
        </span>
        <img alt="henry okoro" className="header__profile--user" />

        <span className="header__profile--name">
          <div>Henry Okoro</div>
          <div>Payroll manager</div>
        </span>
      </div>
    </header>
  );
};

export default Header;
