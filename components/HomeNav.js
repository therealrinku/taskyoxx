import homeNavStyles from "../styles/HomeNav.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiDotsVertical } from "react-icons/bi";

const HomeNav = ({ setDatePlus }) => {
  return (
    <div className={homeNavStyles.homeNav}>
      <button>
        <BiDotsVertical />
      </button>
      <button onClick={() => setDatePlus((prev) => prev - 1)}>
        <IoIosArrowBack />
      </button>
      <button onClick={() => setDatePlus((prev) => prev + 1)}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default HomeNav;
