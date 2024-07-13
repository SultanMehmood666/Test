import Link from "next/link";
import { FaPlus, FaAngleDoubleRight } from "react-icons/fa";

const MenuList = ({ addListing }) => {
  return (
    <ul>
      <li className="menu-icon">
        <Link href="/">
          Home
        </Link>
      </li>
      <li className="menu-icon">
        <Link href="/about">
          About
          {/* <FaPlus /> */}
        </Link>
      </li>
      <li className="menu-icon">
        <Link href="/ConstructionWorks">
        Construction
        </Link>
      </li>
      <li className="menu-icon">
        <Link href="/RealEstate">
        Real Estate
        {/* <FaPlus /> */}
        </Link>
      </li>
      {/* Interrior Design Page uncomment later */}
      {/* <li className="menu-icon mega-menu-parent"> */}
        {/* <Link href="/InteriorDesign"> */}
          {/* Interior Design  */}
          {/* <FaPlus /> */}
        {/* </Link> */}
      {/* </li> */}

      {/* <li className="menu-icon"> */}
        {/* <Link href="#"> */}
          {/* Transfer Exchange */}
          {/* <FaPlus /> */}
        {/* </Link> */}
        {/* <ul> */}
          {/* <li> */}
            {/* <Link href="/Ex-DHA">DHA</Link> */}
          {/* </li> */}
        {/* </ul> */}
      {/* </li> */}
      <li className="menu-icon">
        <Link href="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/Maps">Maps</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MenuList;
