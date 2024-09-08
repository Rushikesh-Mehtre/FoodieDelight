import React from 'react';
import './RestaurantDetailsModal.scss';
import { Restaurant } from '../../utilities/types/types';
import { AiFillCloseSquare } from "react-icons/ai";

interface RestaurantDetailsModalProps {
  restaurant: Restaurant;
  onClose: () => void;
}

const RestaurantDetailsModal: React.FC<RestaurantDetailsModalProps> = ({ restaurant, onClose }) => {
  return (
    <div className="details-modal">
      <div className="details-modal__content">
        <div className='details-modal-header'>
      <p className='heading'>Restaurant details</p>
      <AiFillCloseSquare className='close-button' onClick={onClose} />
        </div>
        <h3>{restaurant.name}</h3>
        <p><strong>Rating:</strong> {restaurant.rating}</p>
        <p><strong>Location:</strong> {restaurant.location}</p>
        <p><strong>Category:</strong> {restaurant.category}</p>
        <p><strong>Description:</strong> {restaurant.description}</p>
        <p><strong>Contact Number:</strong> {restaurant.contactNumber}</p>
        <p><strong>Delivery Area:</strong> {restaurant.deliveryArea}</p>
        <p><strong>Email:</strong> {restaurant.emailId}</p>
      </div>
    </div>
  );
};

export default RestaurantDetailsModal;
