import "@/styles/cover/imageCard.css";

interface Image { 
  src: string;
  alt: string;
  currentIndex?: number;
}

const ImageCard = ({ src, alt, currentIndex } : Image ) => {
  const handleClick = () => {
    console.log(`open gallery ${currentIndex}`);
  };

  return (
    <div className="image-card-container" onClick={handleClick}>
     <div className="image-container">
        <img src={src} alt={alt} />
      </div>
      <div className="image-card-gradient" />
    </div>
  );
};

export default ImageCard;
