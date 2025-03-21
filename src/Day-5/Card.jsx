import React from "react";
import PropTypes from "prop-types";

const Card = ({ id, title, price, description, category, image, rating }) => {
  const styles = {
    img: {
      width: "300px",
      height: "300px",
      objectFit: "cover",
      borderRadius: "10px",
    },
    card: {
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "16px",
      maxWidth: "350px",
      margin: "16px auto",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      margin: "10px 0",
    },
    price: {
      color: "green",
      fontSize: "16px",
      fontWeight: "bold",
      margin: "10px 0",
    },
    description: {
      color: "#555",
      fontSize: "14px",
    },
    category: {
      fontSize: "12px",
      color: "#888",
      marginBottom: "8px",
    },
    rating: {
      fontSize: "14px",
      color: "#f39c12",
      marginTop: "8px",
    },
  };

  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.img} />
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.category}>Category: {category}</p>
      <p style={styles.price}>Price: ${price}</p>
      <h5 style={styles.description}>{description}</h5>
      <p style={styles.rating}>Rating: {rating.rate} ({rating.count} reviews)</p>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.shape({
    rate: PropTypes.number,
    count: PropTypes.number,
  }),
};

export default Card;
