import "@/styles/stylesGates/cardGates.css";

interface CardGatesProps { 
  image: string;
  title: string;
  description: string
  currentIndex: number;
}

const CardGates = ({image, title, description, currentIndex } : CardGatesProps ) => {
  const classNameId = "card-gates";

  const handleClick = () => {
    console.log("CardGates clicked: ", currentIndex);
  }

  return (
    <div className={`${classNameId}`} onClick={handleClick} >
      <div className={`${classNameId}__image-container`} > 
        <img src={image} alt="style gate" />
      </div>
      <div className={`${classNameId}__text-container`}>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{__html: description}} />
        {/* <p>Crafted with the highest <strong>quality.</strong></p> */}
      </div>
    </div>  
  );
};

export default CardGates;