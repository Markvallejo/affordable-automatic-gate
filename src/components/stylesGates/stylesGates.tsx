import "@/styles/stylesGates/stylesGates.css";
import CardGates from "./cardGates";

import gatesData from '@/data/styles_gates_data.json';

interface GridGateProps { 
 
}

const StylesGates = ({  } : GridGateProps ) => {

  const classNameId = "styles-gates";

  return (
    <div id="gate-styles" className={`${classNameId}__container`} >
      <div className={`${classNameId}__top`}>
        <div className= {`${classNameId}__image-title-container`}>
          <div className={`${classNameId}__image-container`}>
            <img src="assets/home_styles_icon.png" alt="styles icon" />
          </div>
          <div className={`${classNameId}__title-container`}>
            <h2>Gate and
            fence <strong>Styles</strong></h2>
          </div>
        </div>
        <p className={`${classNameId}__description`} >Rectangular or with arch, all built with the
          <strong> best quality materials</strong>, we specialize in
          mixing styles and creating <strong>custom designs</strong> 
          and fixing any gate and fence problems.</p>
      </div>
      <div className={`${classNameId}__grid-cards`}>
        {
          gatesData.map((gate, index) => {
            return (
              <CardGates 
                key={index}
                currentIndex={index}
                image={gate.image}
                title={gate.title}
                description={gate.description}
              />
            )
          }
          )
        }
      </div>
    </div>
  );
};

export default StylesGates;



// Gallery deleted from the code
// {
//   "image": "/assets/grid-gates/home_style_fence_only.jpg",
//   "title" : "Fence Only",
//   "description": "<p><strong>Same styles</strong> as you see in our gates.</p>",
//   "details": "<p>Discover the same superior <strong>quality materials</strong> and styles in our fences as you see in our gates.</p>",
//   "icon": "/assets/grid-gates/icon_fence_only.png"
// },
// {
//   "image": "/assets/grid-gates/home_style_brick_work.jpg",
//   "title" : "Brick work",
//   "description": "<p>Beautiful and <strong>strong</strong> columns and signs.</p>",
//   "details": "<p>Change your metal post for a <strong>beautiful and strong</strong> brick column and brick signs.</p>",
//   "icon": "/assets/grid-gates/icon_brick_work.png"
// }