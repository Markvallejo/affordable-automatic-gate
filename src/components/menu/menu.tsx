import "@/styles/menu/menu.css";

interface MenuProps { 
  closeModalHandler: () => void
}

const Menu = ({ closeModalHandler } : MenuProps) => {
  const classNameId = "menu";
  
  return (
    <div className={`${classNameId}__wrapper`}>
      <div className={`${classNameId}__content`}>
        <div className={`${classNameId}__item`}>
          <a href="#automatic-gate" className={`${classNameId}__main-item`} onClick={closeModalHandler} >
            <span>Affordable Automatic Gate</span> 
            -Houston valley-
          </a>
        </div>
        <div className={`${classNameId}__separator` } />
        <div className={`${classNameId}__item`}>
          <a href="#gate-styles" onClick={closeModalHandler} >- Gate Styles</a>
        </div>
        <div className={`${classNameId}__separator` } />
        <div className={`${classNameId}__item`}>
          <a href="#direct-call" onClick={closeModalHandler} >- Direct Call</a>
        </div>
        <div className={`${classNameId}__separator` } />
        <div className={`${classNameId}__item`}>
          <a href="#cost-estimate" onClick={closeModalHandler} >- Cost Estimate</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
