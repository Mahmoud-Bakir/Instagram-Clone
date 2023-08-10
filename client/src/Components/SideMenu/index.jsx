import "../SideMenu/style.css"
import logo from "../../assets/instagram.svg" 
import home from "../../assets/home.svg" 
import search from "../../assets/search.svg" 
import profile from "../../assets/profile.svg" 
import create from "../../assets/create.svg" 
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const SideMenu = () =>{
  const navigater = useNavigate()
  const moveToProfile = () => navigater('/profile')
  const moveToHome = () => navigater('/home')

    

    return(
        <>
        <div className="side-menu">
            <img src={logo} alt="" className="logo" />
            <div className="side-menu-subtitle" onClick={moveToHome}>
                <img src={home} alt="home" />
                <span>Home</span>
            </div>
            <div className="side-menu-subtitle">
                <img src={search} alt="search" />
                <span>Search</span>
            </div>
            <div className="side-menu-subtitle">
                <img src={create} alt="create" />
                <span>Create</span>
            </div>
            <div className="side-menu-subtitle"  onClick={moveToProfile}>
                <img src={profile} alt="profile"/>
                <span>Profile</span>
            </div>
            

        </div>
        </>
    )

}
export default SideMenu