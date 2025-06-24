import logo from './logo.svg';
import './App.css';
// import MyWork from './MyWork';
import React,{ useState } from 'react';
import {useTypewriter,Cursor} from 'react-simple-typewriter';
function App() {
  const [display,setdisplay]=useState("none");
function show(){
  if(display=="none"){
    setdisplay("flex");

  }
  else{
    setdisplay("none");
  }
}
function hide(){
  setdisplay("none");
}
const [more,setmore]=useState(false);
const [Design,setDesign]=useState(true);
const [Marketing,setMarketing]=useState(true);
const [Photography,setPhotography]=useState(true);
function varible(){
  setmore(more=>!more);
};
function funcDesign(){
  setDesign(true);
  setMarketing(false);
  setPhotography(false);
  document.querySelector('.btn_Design').style.backgroundColor='orange';
  document.querySelector('.btn_All').style.backgroundColor='rgb(237, 235, 235)';
  document.querySelector('.btn_Marketing').style.backgroundColor='rgb(237, 235, 235)';
  document.querySelector('.btn_Photography').style.backgroundColor='rgb(237, 235, 235)';
  document.querySelector('.btn_Design').style.color='white';
  document.querySelector('.btn_All').style.color='black';
  document.querySelector('.btn_Marketing').style.color='black';
  document.querySelector('.btn_Photography').style.color='black';
}
function funcMarketing(){
  setMarketing(true);
  setDesign(false);
  setPhotography(false);
  document.querySelector('.btn_Design').style.backgroundColor='rgb(237, 235, 235)';
  document.querySelector('.btn_All').style.backgroundColor='rgb(237, 235, 235)';
  document.querySelector('.btn_Marketing').style.backgroundColor='orange';
  document.querySelector('.btn_Photography').style.backgroundColor='rgb(237, 235, 235)';
  document.querySelector('.btn_Design').style.color='black';
  document.querySelector('.btn_All').style.color='black';
  document.querySelector('.btn_Marketing').style.color='white';
  document.querySelector('.btn_Photography').style.color='black';
}
function funcPhotography(){
  setPhotography(true);
  setDesign(false);
  setMarketing(false);
  document.querySelector('.btn_Design').style.backgroundColor='rgb(237, 235, 235)';
  document.querySelector('.btn_All').style.backgroundColor='rgb(237, 235, 235)';
  document.querySelector('.btn_Marketing').style.backgroundColor='rgb(237, 235, 235)';
  document.querySelector('.btn_Photography').style.backgroundColor='orange';
  document.querySelector('.btn_Design').style.color='black';
  document.querySelector('.btn_All').style.color='black';
  document.querySelector('.btn_Marketing').style.color='black';
  document.querySelector('.btn_Photography').style.color='white';
}
function funcAll(){
  setDesign(true);
  setMarketing(true);
  setPhotography(true);
  document.querySelector('.btn_Design').style.backgroundColor='rgb(237, 235, 235)';
  document.querySelector('.btn_All').style.backgroundColor='orange';
  document.querySelector('.btn_Marketing').style.backgroundColor='rgb(237, 235, 235)';
  document.querySelector('.btn_Photography').style.backgroundColor='rgb(237, 235, 235)';
  document.querySelector('.btn_Design').style.color='black';
  document.querySelector('.btn_All').style.color='white';
  document.querySelector('.btn_Marketing').style.color='black';
  document.querySelector('.btn_Photography').style.color='black';
}



  const [text]=useTypewriter({
    words:["Coder","Programmer","Sarvan Suthar","Web Developer","Web Designer","App Developer"],
    loop:{},
    delaySpeed:300,
    typeSpeed:100,
    deleteSpeed:300
  })

  return (
    <> 
        <header>
      <div className="top" >
        <div class="left">
          PORTFOLIO
        </div>
        <div className="slidebar">
          <a href="#" onClick={show} className='change2'><i class="fa-solid fa-bars"></i></a>
        </div>
        <ul className="sidebar">
            <a href="#HOME">HOME</a> 
            <a href="#ABOUT">ABOUT</a>
            <a href="#SERVICE">SERVICE</a> 
            <a href="#WORK">WORK</a>
            <a href="#RESUME">RESUME</a>
        </ul>
      </div>
    <div className="right">
    <nav>
        <ul className="sidebar" style={{display:display}}>
            <li><a href="#HOME">HOME</a></li> 
            <li><a href="#ABOUT">ABOUT</a></li> 
            <li><a href="#SERVICE">SERVICE</a></li> 
            <li><a href="#WORK">WORK</a></li> 
            <li><a href="#RESUME">RESUME</a></li>
        </ul>

    </nav>
    </div>
</header>
<div class="center" id='HOME'>
    <div class="left2">
        <p className='welcome'>WELCOME !</p>
        <div class="main">
            <div class="Iam">
                I Am
            </div>
            <div class="dynamic">
              {text}<Cursor/>
            </div>
        </div>
        <div className="about">
          "

As a Computer Science student at IIT Ropar, I have developed strong programming skills in C++, Java, and Python. My academic and project experiences focus on software and web development, with a keen interest in algorithms, data structures, and graph theory. Proficient in tools like NetworkX and pandas, I excel in problem-solving and technical innovation. I value collaborative environments with open communication and regular meetings. My goal is to specialize in a dynamic tech field, leveraging my expertise and passion to drive impactful projects and solutions."

        </div>
        <div className='handle'>
        <a href="https://leetcode.com/u/sarvansuthar/" className='icon'>
          <img src="leetcode_icon.png" alt="L" />
        </a>
        <a href="https://www.geeksforgeeks.org/user/sutharsa5vhd/" className='icon'><img src="geeksforgeeks_icon.png" alt="" className='gfg'/></a>
        <a href="https://www.linkedin.com/in/sarvan-suthar-498b28296/"className='icon'><img src="icons8-linkedin.gif" alt="" className='a1' /></a>
        <a href="https://codeforces.com/profile/sutharsarvan29"className='icon'><img src="codeforces.png" alt="" className='a1' /></a>
        <a href="https://github.com/sarvansuthar"className='icon'><img src="icons8-github.gif" alt="" className='a1'/></a>
        </div>
    </div>
    <div class="right2">
      <div className="dc">

      </div>
      <div className="bg">
      <img src="" alt="error" className='photo'/>
      </div>
    </div>
</div>
    
{/* Page-2 start from here  */}
<div className='page2_start' id='SERVICE'>
  <p>My</p>
  <p className='serv'>Services</p>
</div>
<div className='aboutserv'>
<p className='about2'>
  "My Services cater to a range of industries offering expertise in Web Development Photography,Web Design,App Development,Vedio Editing,and SEO."
</p>
</div>
<div className="aboutserv">
  <div className="line">

  </div>
</div>
<div className="outer_box">
  <div className="boxes">
    <div className="box">
    <i class="fa-brands fa-github" style={{fontSize:"2rem"}}></i>
      <div className="lar">WEB DEVELOPMENT</div>
      <p className='detail'>
        Crafting interactive and dynamic website using cutting-edge technologies and frameworks to bring ideas to life.
      </p>
    </div>
    <div className="box">
    <i class="fa-solid fa-camera" style={{fontSize:"2rem"}}></i>
    <div className="lar">PHOTOGRAPHY</div>
    <p className='detail'>
      Capturing moments and stories through the lens,transforming ordinary scenes into captivating visual narratives.
    </p>

    </div>
    <div className="box">
    <i class="fa-regular fa-object-ungroup" style={{fontSize:"2rem"}}></i>
    <div className="lar">
      WEB DESIGN
    </div>
    <p className='detail'>
      Designing aesthatically pleasing and user-friendly interfaces,blending creativity with functionality to enhance digital experiences.
      </p>

    </div>
    <div className="box">
    <i class="fa-brands fa-apple" style={{fontSize:"2rem"}}></i>
    <div className="lar">
      APP DEVELOPMENT
    </div>
    <p className="detail">
     Creating apps that are intuitive, reliable, and enhance user experiences across various platforms like iOS and Android.
    </p>
    </div>
    <div className="box">
    <i class="fa-solid fa-code" style={{fontSize:"2rem"}}></i>
    <div className="lar">
      CODER
    </div>
    <p className='detail'>
    Debugging and optimizing code for performance and reliability are essential to delivering high-quality software solutions that meet user requirements and industry standards.
    </p>
    </div>
    <div className="box">
    <i class="fa-solid fa-lightbulb" style={{fontSize:"2rem"}}></i>
    <div className="lar">
      PROBLEM SOLVER
    </div>
    <p className='detail'>
    To analyze and resolve technical challenges that arise during software development. This involves identifying bugs, optimizing code performance.


    </p>
    
    </div>
  </div>
</div>
<div className='page2_start' id='WORK'>
  <p>My</p>
  <p className='serv'>Work</p>
</div>
<div className='aboutserv'>
<p className='about2'>
  "My work ia a fusion of creativity and technical expertise to craft captivating digital experiences."
</p>
</div>
<div className="aboutserv">
  <div className="line">

  </div>
</div>
<div className="page3">  
    <button href="#" onClick={funcAll} className='btn_All'>All</button>
    <button href="#" onClick={funcDesign} className='btn_Design'>Design</button>
    <button href="#" onClick={funcMarketing} className='btn_Marketing'>Marketing</button>
    <button href="#" onClick={funcPhotography} className='btn_Photography'>Photography</button>
</div>
<div className="big_box">
{Design &&(
  <>
  <div className="div1">
<div className="img1">
  <img src="photo5.jpg" alt="#" />
  <div className='D1'></div>
  

</div>
<div className="img2">
<img src="https://www.w3care.com/images/uploads/blog/_listing/Website_Design_Inspiration.webp" alt="" />
</div>
</div>
{more&&(
  <div className="img1">
  <img src="https://img.freepik.com/free-vector/creative-business-landing-page_52683-60296.jpg?ga=GA1.1.271726098.1719815295&semt=sph" alt="" />
</div>
)
}
  </>
)

}
{Marketing &&(
  <>
  <div className="div2">
  <div className="img1">
  <img src="https://img.freepik.com/free-photo/photographer-hand-holding-camera-standing-viewpoint-clouds-panorama-viewpoint-sunrise_335224-1320.jpg?ga=GA1.1.271726098.1719815295&semt=sph" alt="" />
  </div>
  <div className="img2">
    <img src="https://img.freepik.com/free-vector/camera-concept-illustration_114360-27048.jpg?ga=GA1.1.271726098.1719815295&semt=sph" alt="" />
  </div>
</div>
{more&&(
  <div className="img2">
  <img src="https://img.freepik.com/premium-photo/photo-laptop-tablet-surrounded-by-stationery-items_1055425-40971.jpg?ga=GA1.1.271726098.1719815295&semt=sph" alt="" />
  
</div>
)}
  </>
)

}
{Photography &&(
  <>
  <div className="div3">
  <div className="img1">
    <img src="photo1.jpg" alt="" />

  </div>
  <div className="img2">
    <img src="photo2.jpg" alt="" />
  </div>
</div>
{more&&(
  <>
  
  <div className="img3">
    <img src="photo3.jpg" alt="" />
  </div>
  <div className="img4">
    <img src="photo4.jpg" alt="" />
  </div>
  </>
)}
</>
)}
</div>
{!more&&(
  <div className="button_show">
  <button  onClick={varible}>Show more</button>
</div>
)

}
{more&&(
  <div className="button_show">
  <button onClick={varible}>Show less</button>
</div>
)
}
<div className="page4">
  <div className="left4">
    <div className="div_left">
      <i class="fa-solid fa-pencil"></i>
      <div className="v_line">
      </div>
      <i class="fa-solid fa-pencil"></i>
      <div className="v_line">
      </div>
      <i class="fa-solid fa-pencil"></i>
    </div>
    <div className="div_right">
      <div className="page4_box">
        <div className="year">
          2019-2020
        </div>
      <div>Secondary Education</div>
      <p>I completed my secondary education at an RBSE-affiliated school in Jalore, Rajasthan.</p>
      <br />
      <p>"I secured 89.67% in my 10th-grade board examination."</p>
      </div>
      <div className="page4_box">
        <div className="year">2021-2022</div>
      <div>Senior Secondary Education</div>
      <p>After completing my 10th grade, I changed schools and continued my education at another RBSE-affiliated institution in Jalore, Rajasthan.</p>
      <br />
      <p>"I secured 89.63% in my 12th-grade board examination."</p>
      </div>
      <div className="page4_box">
        <div className="year">2022-2023</div>
      <div>Jee examination</div>
      <p>I pursued my JEE preparation at Allen Coaching Institute, Jaipur.</p>
      <br />
      <p>"I secured an All India Rank (AIR) of 4522 in JEE Advanced, out of approximately 1 million candidates."
</p>
      </div>
    </div>
  </div>
  <div className="left4">
    <div className="div_left">
      <i class="fa-solid fa-pencil"></i>
      <div className="v_line">
      </div>
      <i class="fa-solid fa-pencil"></i>
      <div className="v_line">
      </div>
      <i class="fa-solid fa-pencil"></i>
    </div>
    <div className="div_right">
    <div className="page4_box">
      <div className="year">
        2023-2024
      </div>
      <div>Bachelor of Technology – 1st Year</div>
      <p>"I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering at IIT Ropar. </p>
      <br />
      <p>"My cumulative GPA at the end of the first year stands at 7.45 (on a 10-point scale)."

</p>
    </div>
    <div className="page4_box">
      <div className="year">
        2024-2025
      </div>
      <div>Bachelor of Technology – 2nd Year </div>
      <p></p>
      <br />
      <p>"By the end of my second year, my cumulative GPA improved to 7.51 (on a 10-point scale)."</p>
    </div>
    <div className="page4_box">
      <div className="year">
        2025-2026
      </div>
      <div>Bachelor of Technology – 3rd Year </div>
      <p></p>
      <br />
      <p>"I will be entering my third year of the B.Tech program in July." </p>
    </div>
    </div>
  </div>
</div>

</>
);
}

export default App;
