import React from "react";
import "./../styles/heroStyle.css";
import image22 from "./../images/image 22.png";
import image23 from "./../images/image 23.png";
import image24 from "./../images/image 24.png";
import image25 from "./../images/image 25.png";
import image26 from "./../images/image 26.png";
import image27 from "./../images/image 27.png";
import image28 from "./../images/image 28.png";
import image29 from "./../images/image 29.png";
import image30 from "./../images/image 30.png";

export default function Hero() {
  return (
    <div className="hero-content">
      <div>
        <img className="image28" src={image28} />
      </div>
      <div>
        <div>
          <img className="image27" src={image27} />
        </div>
        <div>
          <img className="image30" src={image30} />
        </div>
        <div>
          <img className="image31" src={image26} />
        </div>
        <div>
          <img className="image29" src={image29} />
        </div>
        <div>
          <img className="image22" src={image22} />
        </div>
        <div>
          <img className="image23" src={image23} />
        </div>
        <div>
          <img className="image24" src={image24} />
        </div>
        <div>
          <img className="image25" src={image25} />
        </div>
        <section className="section-content">
        <h1>Online Experiences</h1>
        <p>Join uniqure interaction activities led by <br></br>one-of-a-kind
           hosts-all without leaving <br></br> home.</p>
        </section>
      </div>

      {/* <img className="image29" src={image29}/> */}

      {/* <img className="image22" src={image22}/>
            <img className="image23" src={image23}/>
            <img className="image24" src={image24}/>
            <img className="image25" src={image25}/>
         
       */}
    </div>
  );
}
