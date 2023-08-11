import { useEffect, useState } from "react";
import profile from "../../assets/profile.svg" 
import  './style.css';
import "../ProfileHeader/style.css"
import axios from "axios";

const ProfileHeader=()=>{  
    const handleLogout = async ()=>{
        axios.post("http://localhost:8000/api/user/logout",{}, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
      })
    .then(
        window.location.href="http://localhost:3000/login",
        localStorage.removeItem("token")
        
    )}

    return(
        <>
         <div className="profile-head">
            <div className="profile-image">
                <img src = {profile} alt="" />
            </div>
            <div className="details-container">
            <div className="profile-details">
                <span>user name</span> {/* username */}
                <button className="button-profile">Edit profile</button>
                <button className="button-profile" onClick={handleLogout} >Sign out</button>
            </div>
            <div className="profile-details">
                <span>0 posts</span> {/* nb of posts */}
                <span>1 follower </span>{/* nb of followers */}
                <span>1 following </span>{/* nb of gollowing */}
            </div>
            <div className="profile-details">
                <span>name</span> {/* Name*/}
            </div>
            </div>
         </div>
        </>
    
    );
}
export default ProfileHeader;
