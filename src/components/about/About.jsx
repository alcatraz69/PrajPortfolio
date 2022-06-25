import "./about.css";
import Praj from "../../img/praj.jpeg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Praj}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          {/* It is a long established fact that a reader will be distracted by the
          readable content. */}
        </p>
        <p className="a-desc">
        A meticulous and organized individual seeking an Entry-level position in the field of UI/UX Designing. 
        Skilled at developing clean UI, analyzing data, and identifying solutions. 
        Strong ability to handle complex projects. 
        Innovative, creative, and willing to contribute ideas and learn new things.
        </p>
          <br/>
        <p className="a-desc">
        I'm a certified UI/UX designer, who has completed the Google UX Design Professional Certificate over a period of six months.
        Learned the design process from beginning to end, <em>including:</em>
        </p>
        <ul className="a-desc-list">
          <li>Empathizing with users</li>
          <li>Defining user pain points</li>
          <li>Coming up with ideas for design solutions</li>
          <li>Creating wireframes, mockups, and prototypes</li>
          <li>Testing designs through usability studies</li>
          <li>Iterating on designs based on feedback</li>
        </ul>


        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
