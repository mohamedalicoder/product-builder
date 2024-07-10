

interface IProps {
  imageUrl: string;
  alt: string;
  className: string;
}

const Image = ({ imageUrl, alt, className }: IProps) => {
  return (
    <div>
      <img src={imageUrl} alt={alt} className={`${className} object-fill`} />
    </div>
  );
}

export default Image;
