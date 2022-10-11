import "./Header.css";
import {Link} from 'react-router-dom'
 
const pages = ["AboutUs","Connect","Profile"]
function Header() {
  return (
    <div className="header">
      <h1>Header</h1>
<Link to="/"><button>Home</button></Link>
{pages.map(pageItem=>
  <Link to={pageItem}><button>{pageItem}</button></Link>
)
}
    </div>
  );
};

export default Header;
