import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle"> Update your account </span>
          <span className="settingsDeleteTitle"> Delete account </span>


        </div>

        <form className="settingsForm">
            <label> Profile Picture </label>
            <div className="settingsPP">
              <img src="https://cloudfront.slrlounge.com/wp-content/uploads/2017/06/1960brittany-putnam-andrew0604-800x1200.jpg" alt="" />

              <label htmlFor="fileInput">
              <i className=" settingsPPIcon fa-solid fa-user"></i>
                  </label>

                  <input type="file" id="fileInput" style={{display: "none"}}></input>


            </div>

            <label> Username </label>
            <input type="text" placeholder="Hassan Tanoli" />
            <input type="email" placeholder="hassan@gmail.com" />
            <input type="password" />

            <button className="settingsSubmit"> Update </button>


          </form>
        
         </div>
        <Sidebar/>

      
    </div>
  )
}
