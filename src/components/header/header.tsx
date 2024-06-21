import "@/styles/header/header.css";

const Header = () => {
  const handleMenu = () => {
    console.log("open menu");
  };

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="text-container">
          <h1 className="header">Affordable Automatic Gate</h1>
          <p>-Houston valley-</p>
        </div>
        <div className="hamburger-button--container">
          <button onClick={handleMenu}>
            <img
              src="/assets/header/header_menu.png"
              alt="icon-menu"
              height={49}
              width={56}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
