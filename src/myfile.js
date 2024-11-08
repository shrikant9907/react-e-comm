// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login2 = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [msg, setMsg] = useState("");

//     const navigate = useNavigate();

//     const handleInput = (event) => {
//         const value = event.target.value;
//         const name = event.target.name;
//         if (name === "email") {
//             setEmail(value);
//         }
//         if (name === "password") {
//             setPassword(value);
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         if (email === "" || password === "") {
//             alert("Please enter details!");
//             return;
//         }

//         // Retrieve user details from localStorage
//         const getDetails = JSON.parse(localStorage.getItem("user")) || [];

//         const isValidUser = getDetails.some((curValue) => {
//             return curValue.email === email && curValue.password === password;
//         });

//         if (isValidUser) {
//             alert("Login Successfully!");
//             navigate("/");
//         } else {
//             setMsg("Invalid Email or Password!");
//         }
//     };

//     return (
//         <div>
//             <div>
//                 <p className='errMsg'>{msg}</p>
//                 <form onSubmit={handleSubmit} className='login-form'>
//                     <div className='heading'>
//                         <p>Log In</p>
//                     </div>
//                     <div className='account'>
//                         <input
//                             type='text'
//                             name='email'
//                             placeholder='Enter your Email'
//                             onChange={handleInput}
//                         />
//                         <input
//                             type='password'
//                             name='password'
//                             placeholder='Enter your Password'
//                             onChange={handleInput}
//                         />
//                         <p>If you have to create an account? <a href=''>Signup</a></p>
//                     </div>
//                     <button>Log In</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login2;
// import React, { useState } from 'react'
// // import Img from "../Images/main.jpg"
// import { useNavigate } from 'react-router-dom'

// const Register2 = () => {
//   const userDetail = {
//     name:"",
//     email:"",
//     password:"",
//     value:1
//   }
//   const [data, setData] = useState(userDetail);

//   const navigate = useNavigate();

//   const handleInput = (event) =>{
//     const name = event.target.name;
//     const value = event.target.value;

//     setData({...data, [name]:value})
//   }
  
//   const handleSubmit = (event) =>{
//     event.preventDefault();
//     if(data.name == "" || data.email == "" || data.password == ""){
//       alert("Please Enter Detail!")
//     }else{
//     const getData = JSON.parse(localStorage.getItem("user") || "[]");
//     let arr = [];
//     arr = [...getData];
//     arr.push(data)
//     localStorage.setItem("user", JSON.stringify(arr));
//     alert("Signup Successfullu !");
//     navigate("/login")

//     }
    
//   }
  
//   return (
//     <div>
//         <div className='main-page'>
//             <form onSubmit={handleSubmit}>
//                 <div className='heading'>
//                     <p>Sign Up</p>
//                 </div>
//                 <div className='account'>
//                  <input type='text' name='name' placeholder='Enter your Name' onChange={handleInput}/>
//                  <input type='email' name='email' placeholder='Enter your Email' onChange={handleInput}/>
//                  <input type='password' name='password' placeholder='Enter your Password' onChange={handleInput}/>
//                  <p>Already have an account ? <a href='/login'>Login</a></p>
//                 </div>
//                 <button>SignUp</button>
//             </form>
//             <div>
//             </div>

 
//         </div>
//     </div>
//   )
// }

// export default Register2