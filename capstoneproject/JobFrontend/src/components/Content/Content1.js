import React from "react";
import Header from '../Header/Header';
import "./Content.css";
import { Link
} from "react-router-dom";
function Content() {
  return (
    <>
    <Header />

    <div className="contencontain">
      <br />
      <div className="rectangle">
        <div classname="snapshot">
          <div>Snapshot</div>
          {/* <img src="Images/alljobs.png " alt="logo" /> */}
          <div className="subtitle">All Jobs </div>
          100
        </div>
        <div className="myapp">
          <div> </div>
          <br />
          <div className="subtitle"> Eligible Jobs</div>
          80
        </div>
        <div className="appliedjobs">
          <div> </div>
          <br />
          <div className="subtitle"> Applied Jobs</div>
          70 <br />
        </div>
        <br />
      </div>
      <div className="rectangle">
        <div className="myapplication ">
          <div>My application</div>
          <div className="shortlisted">
            <div className="subtitle">Shortlisted </div>
            38
          </div>
        </div>
        <div className="Interviewing">
          <br />
          <div className="subtitle">Inverviewing</div>
          21
        </div>
        <div className="rejected">
          <br />
          <div className="subtitle">Rejected</div>
          10
        </div>
        <div className="offerreceived">
          <br />
          <div className="subtitle">Offer Received</div>
          10
        </div>
      </div>

      <div className="section2">
        <div className="searchbox">
          <div className="title"> All Jobs </div>


          <input type="text" placeholder="Title, Client, Location...." />
          <button className="button ">Search</button>
        </div>
      </div>

      <div className="section3">
        <br />
        <div className="dropdown">
          <select name="jobs" id="jobs">
            <option value="1">All Jobs</option>
          </select>
          <select name="industry" id="industry">
            <option value="1">Industry</option>
          </select>
          <select name="location" id="location">
            <option value="1">Location</option>
          </select>
          <select name="jobtype" id="jobtype">
            <option value="1">Job Type</option>
          </select>
          <select name="posteddate" id="posteddate">
            <option value="1">Posted Date</option>
          </select>
        </div>
      </div>
      <div className="section4">
        <div className="jobbox">
          <div className="jpctitle">
            JPC -1692 Developer
            <button className="btn1"> Apply</button>
            <br />
          </div>
        </div>
        <div className="joblocation">
          <span>Mumbai, Maharastra</span>
          <span>Full Time </span>
          <span>150-100</span>
          <span>CEIPAL</span>
        </div>
        <div className="paratext">
           We are looking for Technical Project Manager who can coordinate diverse programs handled by in-house developed
          team.Displays a strong sense of ownership and provide assistance, identify and resolve various issues,
          keep proper track of progress across different teams and ensure smooth functioning across all verticals.
          Should communicate progress as well as risks involved in the project to the stakeholders.
          Experience in advanced Data Warehouse concepts.Cloud architect with hands on development background.
        </div>
      </div>
      <br/>
      <div className="section5">
        <div className="jobbox1">
          <div className="jpctitle1">
            JPC -1692 Developer
            <button className="btn2"> Applied</button>
            <br />
          </div>
        </div>
        <div className="joblocation1">
          <span>Mumbai, Maharastra</span>
          <span>Full Time </span>
          <span>150-100</span>
          <span>CEIPAL</span>
        </div>
        <div className="paratext1">
          We are looking for Technical Project Manager who can coordinate diverse programs handled by in-house developed
          team.Displays a strong sense of ownership and provide assistance, identify and resolve various issues,
          keep proper track of progress across different teams and ensure smooth functioning across all verticals.
          Should communicate progress as well as risks involved in the project to the stakeholders.
          Experience in advanced Data Warehouse concepts.Cloud architect with hands on development background.
        </div>
      </div>
      <Link to="/Candidate"> Candidate Page  </Link>

    </div>
    </>
  );
}

export default Content;
