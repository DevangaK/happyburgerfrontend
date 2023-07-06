import React from 'react';

const BurgerItem = ({ burger }) => {
  const handleAddToCart = () => {
    // Handle adding the burger item to the cart
    console.log(`Added ${burger.pname} to cart`);
  };

  const handleReview = () => {
    // Handle navigating to the review page or displaying a modal for writing a review
    console.log(`Review ${burger.pname}`);
  };

  return (
    <div className="card mb-3">
      <img src={burger.image} className="card-img-top" alt={burger.pname} />
      <div className="card-body">
        <h5 className="card-title">{burger.pname}</h5>
        <p className="card-text">Price: ${burger.price}</p>
        <p className="card-text">{burger.description}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
          <div className="gap-2"></div>
          <button className="btn btn-secondary" onClick={handleReview}>Add Review</button>
        </div>
      </div>
    </div>
  );
};

export default BurgerItem;
