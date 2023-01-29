import React from "react";
import Header from '../Header/Header';
import "./Content.css";
import {
  Link
} from "react-router-dom";
function Content() {
  return (
    <>
    <Header />

      <div className="contencontain">
      <div>    <div class="title">Snapshot</div> </div>
        <div class="rectangle">

            <div class="whiterectanglebox">
            <br /><br />
            <div className="subtitle">All Jobs </div>
            <img src="Images/alljobs.png" alt="logo" width="20px" height="20px" />
            <font color="blue" size="24px"> 100 </font><span class="tab"></span>
            <img src="Images/arrow.png" alt="logo" width="20px" height="20px" />
          </div>


          <div className="whiterectanglebox">
            <div> </div>
            <br /> <br />
            <div className="subtitle"> Eligible Jobs</div>
            <img src="Images/alljobs.png" alt="logo" width="20px" height="20px" />
            <font color="blue"> 80 </font><span class="tab"></span>
            <img src="Images/arrow.png" alt="logo" width="20px" height="20px" />
          </div>

          <div className="whiterectanglebox">
            <div> </div>
            <br /> <br />
            <div className="subtitle"> Applied Jobs</div>
            <img src="Images/appliedJobs.png" alt="logo" width="20px" height="20px" />
            <font color="blue"> 70 </font><span class="tab"></span>
            <img src="Images/arrow.png" alt="logo" width="20px" height="20px" />
          </div>
          <br /><br />
        </div>

        <br />
        <div className="rectangle">

          <div className="myapplication">
            <div>My Applications</div>
            <div className="whiterectanglebox">
              <div className="subtitle">Shortlisted </div>
              <img src="Images/shortlisted.png" alt="logo" width="20px" height="20px" />
              <font color="blue"> 38 </font><span class="tab"></span>
              <img src="Images/arrow.png" alt="logo" width="20px" height="20px" />
            </div>
          </div>
          <div className="Interviewing"><br />
          <div className="whiterectanglebox">
            <div className="subtitle">Interviewing</div>
            <img src="Images/interview.png" alt="logo" width="20px" height="20px" />
            <font color="blue"> 21 </font><span class="tab"></span>
            <img src="Images/arrow.png" alt="logo" width="20px" height="20px" />
          </div>
          </div>
          <div className="rejected">
            <br />
            <div className="whiterectanglebox">
            <div className="subtitle">Rejected</div>
            <img src="Images/reject.png" alt="reject" width="20px" height="20px" />
            <font color="blue"> 10</font><span class="tab"></span>
            <img src="Images/arrow.png" alt="logo" width="20px" height="20px" />
          </div>
          </div>
          <div className="offerreceived">
            <br />
            <div className="whiterectanglebox">
            <div className="subtitle">Offer Received</div>
            <img src="Images/offer.png" alt="logo" width="20px" height="20px" />
            <font color="blue"> 10 </font><span class="tab"></span>
            <img src="Images/arrow.png" alt="logo" width="20px" height="20px" />
          </div>
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
              JPC -1692 Developer<span class="tab"></span>
              <button className="buttoncolor" > Apply</button>

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
        <br />
        <div className="section5">
          <div className="jobbox1">
            <div className="jpctitle1">JPC -1692 Developer<span class="tab"></span>
              <font color="green" size="2">Applied</font>
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
