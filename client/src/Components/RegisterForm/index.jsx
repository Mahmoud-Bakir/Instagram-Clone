import "../RegisterForm/style.css"
import logo from "../../assets/instagram.svg" 
import playstore from "../../assets/playstore.png" 
import micosoft from "../../assets/microsoft.png" 
import Partition from "../Partition";
import Button from "../Button";
import {useNavigate} from 'react-router-dom'; 
import { useState } from "react";
import axios from "axios";
const RegisterForm = () => {
  const navigater = useNavigate()
  const login = () => navigater('/login')

  const defaultState = {
    email:"",
    name:"",
    user_name:"",
    password:""
  }
  const [data,setData] = useState(defaultState)

  const handleDataChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
    console.log(data)
  }
  const handleSignup = async ()=>{
    axios.post("http://localhost:8000/api/guest/register",data)
.then((response)=>{
  localStorage.setItem("token",response.data.user.token)
  window.location.href="http://localhost:3000/home"
}
    
   
    
)}
    return (
        <>
          <div className="signup-form-container">
            <div>
            <img src={logo} alt="Instagram"/>
            </div>
            <p className="header">Sign up to see photos and videos from your friends.</p>
            <Button name={"Log in with Facebook"}/>
            <p>OR</p>
            <div className="part">
            <Partition Itype={"email"} Name={"email"} holder={"Email"} onChange={handleDataChange}/>
            </div>
            <div className="part">
            <Partition Itype={"text"} Name={"name"} holder={"Full Name"} onChange={handleDataChange}/>
            </div>
            <div className="part">
            <Partition Itype={"text"} Name={"user_name"} holder={"Username"} onChange={handleDataChange}/>
            </div>
            <div className="part">
            <Partition Itype={"password"} Name={"password"} holder={"Password"} onChange={handleDataChange}/>
            </div>
            <p className="subtitle">
            People who use our service may have uploaded your contact information to Instagram. Learn More
            </p>
            <p className="subtitle">
            By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
            </p>
            <Button name={"Signup"} onSubmit={handleSignup}/>
          </div>
          <div className="existing-container">
            <p>Have an account? <span onClick={login}>Login</span></p>
          </div>
          <div className="get">
            <span>Get the app</span>
            <div className="stores">
             <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D985327B7-64EA-431A-BB2D-0AF9C99DE09E%26utm_campaign%3DsignupPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"><img src={playstore} alt="playstore" className="play"/></a>
             <a href=""><img src={micosoft} alt="microsoft Store" className="micro" /></a>
            </div>
          </div> 
       </>
    );
}
export default RegisterForm;
