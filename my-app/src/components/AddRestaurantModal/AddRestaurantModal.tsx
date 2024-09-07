import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AddRestaurantModal.scss';
import { Restaurant } from '../../utilities/types/types';
import { addRestaurant } from '../../redux/Slices/restaurantSlice';

interface AddRestaurantModalProps {
  onClose: () => void;
}

const AddRestaurantModal: React.FC<AddRestaurantModalProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState<number | ''>('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    if (!name || !rating || !location || !category) {
      alert("All fields are required.");
      return;
    }

    const newRestaurant: Restaurant = {
      id: Date.now(),  // Generate a temporary ID
      name,
      rating: Number(rating),
      location,
      category,
    };

    dispatch(addRestaurant(newRestaurant)); // Dispatch action to add restaurant
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <h3>Add New Restaurant</h3>
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            placeholder="Rating"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          />
        </form>
        <div className='button-group'>

        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurantModal;
