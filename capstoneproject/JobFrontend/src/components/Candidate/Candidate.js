import "./Candidate.css"
import Header from "../Header/Header";
import axios from 'axios';
import React,{useState} from 'react';
import { Link,useNavigate
} from "react-router-dom";
const Candidate = () => {
    let [data, setData] = useState({});
    let navigate = useNavigate();
    const handleChange = (e) => {
        setData({
            ...data,
         [e.target.name] : e.target.value
     })
    }
    console.log(data);
    //getting location id from location dropdown box
    //var locationelement = document.getElementById("location");
    //var locationvalue = locationelement.value;
    //var locationtext = locationelement.options[locationelement.selectedIndex].text;

   // Getting Skill id from the combo box
   // var skillelement = document.getElementById("skill");
       // var skillvalue=skillelement.value
        //var skilltext = skillelement.options[skillelement.selectedIndex].text;

    async function sendData() {
         let res = await axios.post('/userprofile',data);
         console.log(res.data)
         navigate('/Content')
    }

    return (
        <>
         <Header />
        <div className='body'>
             <br />
             <form>

             <ul class="nobull" >
                <li>
                    <label>Firstname        </label>
                    <input type="text" placeholder='Firstname' name='firstname' onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>Lastname       </label>
                    <input type="text" placeholder='Lastname' name='lasttname' onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>Email   </label>
                    <input type="text" placeholder='Email' name='email'  onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>Contactnumber  </label>
                    <input type="text" placeholder='Contactnumber' name='contact'  onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>Address  </label>
                    <input type="text" placeholder='Address' name='address'  onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>About    </label>
                    <input type="text" placeholder='About' name='about'  onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>Currentcompany   </label>
                     <input type="text" placeholder='Currentcompany' name='currentcompany'  onChange={handleChange}/>
                </li>
                <br />
                <li>
                  <label>Current  Ctc  </label>
                  <input type="text" placeholder='Ctc' name='ctc' onChange={handleChange}/>
                </li>
                <br />
                <li>
                   <label>Experience   </label>
                    <input type="text" placeholder='Experience' name='ctc' onChange={handleChange}/>

                </li>
                <br />
                <li>
                    <label>Current Role </label>
                    <input type="text" placeholder='Current Role' name='currentrole' onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>
                         Choose your skills:
                    </label>
                    <select name="skill" id="skill" multiple>
                        <option value="1">JAVA</option>
                        <option value="2">Dotnet</option>
                        <option value="3">SQLserver</option>
                        <option value="4">Ruby on Rails</option>
                        <option value="5">Bootstrap</option>
                        <option value="6">ORACLE</option>
                        <option value="7">SQLserver</option>
                        <option value="8">ReactJs</option>
                    </select>
                </li>
                <br />
                <li>
                    <label>Expected Salary</label>
                    <input type="expectedsalary" placeholder='Expected Salary' name="expectedsalary"  onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>ResumeLink</label>
                    <input type="resumelink" placeholder='resumelink' name="resumelink"  onChange={handleChange}/>
                </li>
                <br />
                <li>
                    <label>Preferred Location</label>
                    <select id="location">
                        <option value="1">Bangalore</option>
                        <option value="2">Chennai</option>
                        <option value="3">Delhi</option>
                        <option value="4">Mumbai</option>
                        <option value="5">Hyderabad</option>
                    </select>
                </li>
            </ul>
            <br />

            <button className="btn1" onClick={sendData}> Submit</button>
            </form>
            <Link to="/Content"> Content Page  </Link>
        </div>
        </>
    );
}

export default Candidate;
