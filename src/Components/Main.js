import React from "react";
import "../Components/Main.css";
import Dayslogo from "../img/days.png";
import StructureLogo from "../img/Structure.png";
import Schedule from "../img/Group.png";
import Sheduleleft from "../img/left.png";
import Sheduleright from "../img/right.png";
import MailLogo from "../img/Mail1.png";
import Whatsapp from "../img/whatsapp.png";
const Main = (props) => {
  return (
    <>
      <div className="continer-fluit">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-3">
            <span className="display-6">{props.titlename}</span>
          </div>
          <div className="container-fluid py-2 days">
            <span className="display-8">90 Days Program</span>
          </div>
          <div className="row align-items-md-stretch py-4">
            <div className="col-md-6">
              <div className="h-100 p-5 rounded-3 video_box">
                <h6>Introduction Video</h6>
              </div>
            </div>

            <div className="col-md-6">
              <div className="h-100  video_box2">
                <span className="detailbox">Details</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="detailbox2">Techniques</span>
                <p className="Detailsdesc">
                  {props.Details}
                </p>
                <span className="Detailsdoller">AED 99/-</span>
                <button className="btn btn-secondary button_join" type="button">
                  Join now
                </button>{" "}
                
              </div>
            </div>
          </div>
        </div>

        <div class="structure1 text-secondary py-2">
          <div class="py-5">
            <span class="structure" id="">
              Structure of program
            </span>
            <p className="structure_p">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
              <p>sed do eiusmod.</p>
            </p>
            <div className="col-lg-6 ">
              <p className="structureLogo">
                <img src={Dayslogo} />
              </p>
              <div className="structureCat">
                Yoga | Recovery | Rest | Repeat
              </div>
            </div>
            <div className="col-sm-6 structurerightlogo">
              <img src={StructureLogo} />
            </div>
          </div>
        </div>
      </div>
      <div className="continer-fluit">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-3">
            <span className="display-6"></span>
          </div>
          <div className="container-fluid">
            <span className="display-8"></span>
          </div>
          <div className="row">
            <div className="col-md-6 schedule">
              <div className="p-5">
                <img src={Schedule} className="schedulelogo" />
              </div>
            </div>
            <div className="Schedulehead">Schedule</div>

            <div className="col-md-6">
              <div className="h-100 p-5 bg-light rounded-3">
                <div className="Schedulerleft">
                  <img src={Sheduleright} />
                </div>
                <div className="Schedulerright">
                  <img src={Sheduleleft} />
                </div>
                <div className="scheduleday">Day 1-Class</div>

                <div className="col-md-6">
                  <div className="h-100 p-5 schedulevideo rounded-3">
                    <h6>
                      <section></section>
                    </h6>
                  </div>
                </div>
                <p className="scheduledesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="scheduledesc1">Join Today.</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="Schedulehead">Our Teachers</div>
            <div className="schedule">
              <div className="Teachers">
                <nav className="Teachersli">
                  <ul>
                    <li>
                      <span>Ashrei Mitra</span>
                    </li>
                    <li>
                      <span>Rahul</span>
                    </li>
                    <li>
                      <span className="TeacherAsh">Ashrei Mitra</span>
                    </li>
                    <li>
                      <span>Ashray</span>
                    </li>
                    <li>
                      <a>Zora</a>
                    </li>
                  </ul>
                </nav>
                <div className="Teacherside">
                  <div className="Teachertext">
                    {props.ourteam}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer0">
          <div class="text-secondary py-2">
            <div class="py-5">
              <span class="footer4">Let’s talk</span>
              <br />
              <span className="footer5">Book an appointment?</span>
              <hr />
              <p className="footer6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vitae facilisis lorem. Integer non pharetra mauris, non
                tincidunt metus.
                <br /> Aenean in lectus diam...{" "}
              </p>
              <div className="email1">someone@example.com <img src={MailLogo}/>
              <br/>
              <br/>
              <div className="email">+91- 385 526 5060 &nbsp;  <img src={Whatsapp}/>
              </div>
              </div>
            </div>
          </div>
          <div className="footerMain"><div className="footerMain2">© 2021 Copyright - Artistic yoga Privacy Policy Terms of use</div></div>
        </div>
      </div>
    </>
  );
};

export default Main;
