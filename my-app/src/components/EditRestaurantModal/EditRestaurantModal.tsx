// src/components/EditRestaurantModal.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './EditRestaurantModal.scss';
import { Restaurant } from '../../utilities/types/types';
import { editRestaurant } from '../../redux/Slices/restaurantSlice';

interface EditRestaurantModalProps {
  restaurant: Restaurant;
  onClose: () => void;
}

const EditRestaurantModal: React.FC<EditRestaurantModalProps> = ({ restaurant, onClose }) => {
  const [name, setName] = useState(restaurant.name);
  const [rating, setRating] = useState(restaurant.rating);
  const [location, setLocation] = useState(restaurant.location);
  const [category, setCategory] = useState(restaurant.category);

  const dispatch = useDispatch();

  const handleSave = () => {
    const updatedRestaurant: Restaurant = {
      ...restaurant,
      name,
      rating,
      location,
      category,
    };
    dispatch(editRestaurant(updatedRestaurant));
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <h3>Edit Restaurant</h3>
        <form>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input type="number" value={rating} onChange={(e) => setRating(parseFloat(e.target.value))} placeholder="Rating" />
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
        </form>
        <div className='button-group'>

        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EditRestaurantModal;
