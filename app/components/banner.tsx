import styles from "../styles/banner.sass";

interface BannerProps {
  backgroundImage: string;
  text?: string; // Le texte est facultatif
}

const Banner = ({ backgroundImage, text }: BannerProps) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {text && <h1 className="text">{text}</h1>}
    </div>
  );
};

export default Banner;
