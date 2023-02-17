import "./Pagination.scss";
import { Link } from "react-router-dom";
const Pagination = ({ links , handelLink }) => {
  return (
      <div className="pagination">
      <ul>
        {links.links.map((item) => (
          <li key={item.label}>
            <button onClick={()=>handelLink(item.url)}>{item.label}</button>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default Pagination;
