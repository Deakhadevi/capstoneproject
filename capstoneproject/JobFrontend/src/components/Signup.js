import axios from 'axios';
import "./Login.css";
import Header from '../components/Header/Header';
import React,{useState} from 'react';
import {
    Link,useNavigate
      }  from "react-router-dom";

function Signup() {
  let [data, setData] = useState({});
  let navigate = useNavigate();
    const handleChange = (e) => {
        setData({
          // const [userType ]= useState("user")
            ...data,
          [e.target.name] : e.target.value
     })
    }
    console.log(data);

    async function sendData() {
        let res = await axios.post('/useraccount',data);
        console.log(res.data)
        navigate('/')
    }
  return (
    <>
    <Header />
    <div>
           <div className="container">
                 <label><b>Username</b></label>
                <input type="text" placeholder="Enter Email" name='email' onChange={handleChange} required />
                <br/>

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password"  name='password'  onChange={handleChange} required />
                <br/>
                </div>
                <div className='submitbtn'>
                {/* <input type="submit"  onClick={sendData} value="Login" /> */}
                <button class="btn" type="submit" onClick={sendData} >Register</button>
            </div>
            <br/>
            {/* <input type="text" placeholder='email' name='email'  onChange={handleChange}/>
            <input type="text" placeholder='password' name='password' onChange={handleChange}/>
            <input type="submit" onClick={sendData} /> */}
            <Link to="/Login">
            {/* <p>Are you register user ? login here </p> */}
            </Link>


    </div>
    </>
  )
}

export default Signup

