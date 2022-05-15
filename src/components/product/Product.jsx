import "./product.css";

const Product = ({img,link}) => {
  return (
      <a href={link} className="p" target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
  );
};

export default Product;
