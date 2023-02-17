import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="/contact">ارتباط با ما</Link>
            </li>
            <li>
              <Link to="/post">پست ها</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
