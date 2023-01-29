import "./Login.css"
import axios from 'axios';
import React,{useState} from 'react';
import Header from '../components/Header/Header';
import { Link,useNavigate
  } from "react-router-dom";

// it will be integrated login api

const Login = () => {
    // singing up with email, and possword

    let [data, setData] = useState({});
    let navigate = useNavigate();
    const handleChange = (e) => {
        setData({
            ...data,
         [e.target.name] : e.target.value
     })
    }
    console.log(data);

    async function sendData() {

        let res = await axios.post('/useraccount',data);
        console.log(res.data)
        navigate('/Content')
    }
    return (
        <>
        <Header />
        <div>

             {/* <div classname="imgcontainer">
                <img src="./Images/Avatar.png" alt="Avatar" class="avatar" />
             </div> */}
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
                 <button class="btn" type="submit" onClick={sendData} >Login</button>
                </div>


               {/* <Link to="/signup"> signup  </Link> */}

               {/* <Link to="/Content"> Content Page  </Link> */}
              <div className='signup' >
                New User? Register Here.
                <Link to="/Signup">
                    <br/>
                    <button class="btn1"> Register</button>
                </Link>

            </div>


        </div>
        </>
    );
}

export default Login;
