import { Link } from "react-router-dom";

const Header = ()=> {
    return (
        <header className="bg-gray-900 text-white flex justify-between items-center px-4 py-3 md:px-10 md:py-4">
        <Link to="/" className="text-lg font-bold tracking-wider">
          وبسایت من
        </Link>
  
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-400 ml-6">
                خانه
              </Link>
            </li>
            <li>
              <Link to="/calculation-tool" className="hover:text-gray-400">
                 ابزار محاسبات 
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                درباره ما
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                تماس با ما
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}


export default Header;