import React,{ useState } from 'react';
<div className="big_box">
{Design &&(
  <>
  <div className="div1">
<div className="img1">
  <img src="https://img.freepik.com/premium-vector/team-specialists-is-working-creation-web-design-concept-teamwork-flat-2d-character-landing-page-concepts-web-design_130740-2275.jpg?ga=GA1.1.271726098.1719815295&semt=ais_user" alt="#" />
  

</div>
<div className="img2">
<img src="https://img.freepik.com/premium-photo/person-is-using-laptop-with-screen-showing-time-9-30_1059430-93544.jpg?ga=GA1.1.271726098.1719815295&semt=ais_user" alt="" />
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
    <img src="https://img.freepik.com/free-vector/marketing-consulting-concept-illustration_114360-9027.jpg?ga=GA1.1.271726098.1719815295&semt=sph" alt="" />

  </div>
  <div className="img2">
    <img src="https://img.freepik.com/premium-photo/office-computer-desktop-computer-user-interface-web-design-computer-highdefinition-pictures_1028519-5213.jpg?ga=GA1.1.271726098.1719815295&semt=sph" alt="" />
  </div>
</div>
{more&&(
  <>
  
  <div className="img3">
    <img src="https://img.freepik.com/premium-photo/3d-illustration-figma-graphic-design-web-design-black-white-black-background_617193-24.jpg?ga=GA1.1.271726098.1719815295&semt=sph" alt="" />
  </div>
  <div className="img4">
    <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?ga=GA1.1.271726098.1719815295&semt=sph" alt="" />
  </div>
  </>
)}
</>
)}
</div>
export default MyWork;