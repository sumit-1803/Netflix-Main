import React, { useState } from 'react';
import Header from './Header';
import axios from "axios";
import { API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();


  const getInputData =async (e) => {
  e.preventDefault();
  if (isLogin) {
    //login
    const user = {email,password};
    try {
      const res = await axios.post(`${API_END_POINT}/login`,user,{
        headers:{
          "Content-Type":'application/json'
        },
        withCredentials:true
      })
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      navigate("/browse");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }else{
//register
const user = {fullName,email,password};
  try {
    const res = await axios.post(`${API_END_POINT}/register`,user,{
        headers:{
          "Content-Type":'application/json'
        },
        withCredentials:true});
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
    }
    setIsLogin(true);
  } catch (error) {
  toast.error(error.response.data.message);
  console.log(error);
  }
  }
    console.log(fullName, email, password); 
    setEmail("");
    setFullName("");
    setPassword("");
  };


  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className=''>
      <Header></Header>
      <div className='absolute'>
        <img className='w-[100vw] h-[100vh]' src='https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png' alt='banner' />
      </div>
      <form onSubmit={getInputData} className='flex flex-col w-3/12 my-36 p-12 left-0 right-0 items-center justify-center mx-auto absolute rounded-md bg-black opacity-85'>
        <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "SignUp"}</h1>
        <div className='flex flex-col'>
          {!isLogin && (
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='Full Name' type='text' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
          )}
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
          <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font-bold'>{isLogin ? "Login" : "SignUp"}</button>
          <p className='mt-2 text-white'>{isLogin ? "New to Netflix?" : "Already have an Account?"}<span onClick={loginHandler} className='ml-1 text-blue-400 font-medium cursor-pointer'>Switch here</span></p>
        </div>
      </form>
    </div>
  );
}
