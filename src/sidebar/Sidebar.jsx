import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle"> About Me </span>
          <img className="sidebarImg" src="https://cloudfront.slrlounge.com/wp-content/uploads/2017/06/1960brittany-putnam-andrew0604-800x1200.jpg" alt="" />
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aperiam dicta nesciunt libero consequatur asperiores et error ea in, minus soluta est praesentium perspiciatis? Neque aperiam veniam odit pariatur velit. </p>

      </div>

      <div className="sidebarItem">
      <span className="sidebarTitle"> CATEGORIES </span>

      <ul className="sidebarList">
        <li className="sidebarListItem"> Life </li>
        <li className="sidebarListItem"> Music </li>
        <li className="sidebarListItem"> Style </li>
        <li className="sidebarListItem"> Sport </li>
        <li className="sidebarListItem"> Tech </li>
        <li className="sidebarListItem"> Cinema </li>
        
        
         </ul>          

      </div>

      <div className="sidebarItem">
      <span className="sidebarTitle"> FOLLOW US </span>
      <div className="sidebarSocial">

      <i className="sidebarIcon fa-brands fa-facebook-square"></i>
      <i className="sidebarIcon fa-brands fa-twitter-square"></i>
      <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
      <i className="sidebarIcon fa-brands fa-instagram-square"></i>

      </div>


      </div>

    </div>
  )
}
