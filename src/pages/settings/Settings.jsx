import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        
        <div className="settingsWrapper">

            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img 
                        src="https://5.imimg.com/data5/NA/CD/GLADMIN-435943/nature-jpg-500x500.jpeg" 
                        alt="" 
                        className="settingsImg" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Ashen" />
                <label>Email</label>
                <input type="email" placeholder="ashen@gmail.com" />
                <label>Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>

        <Sidebar/>
    </div>
  )
}
