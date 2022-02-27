import "./topbar.css";
import {Link} from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft"> 
      <i className="topIcon fa-brands fa-facebook-square"></i>
      <i className="topIcon fa-brands fa-twitter-square"></i>
      <i className="topIcon fa-brands fa-pinterest-square"></i>
      <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter"> 
        <ul className="topList">
            <li className="topListItem">
              <Link to="/" className="link"> HOME </Link>
            </li>
            <li className="topListItem">
            <Link to="/link" className="link"> ABOUT </Link>
            </li>
            <li className="topListItem">
            <Link to="/contact" className="link"> CONTACT </Link>
            </li>
            <li className="topListItem">
            <Link to="/write" className="link"> WRITE </Link>
              
            </li>
            <li className="topListItem">
            <Link to="/" className="link"> LOGOUT </Link>
            </li>


        </ul>
        </div>
      <div className="topRight"> 

      {
        user ? (
          <img className="topImg" src="https://cloudfront.slrlounge.com/wp-content/uploads/2017/06/1960brittany-putnam-andrew0604-800x1200.jpg" alt="" />
        ) : (
          <ul className="topList">

            <li className="topListItem">
          <Link className="link" to="/login"> LOGIN </Link>
              
               </li>

               <li className="topListItem">
          <Link className="link" to="/register"> REGISTER </Link>
              
               </li>
          </ul>
        )
      }
     

      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
       </div>
    </div>
  )
}
