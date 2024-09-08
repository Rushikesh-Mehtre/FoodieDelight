import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './EditRestaurantModal.scss';
import { Restaurant } from '../../utilities/types/types';
import { editRestaurant } from '../../redux/Slices/restaurantSlice';
import { showAlert } from '../../redux/Slices/alertSlice';

interface EditRestaurantModalProps {
  restaurant: Restaurant;
  onClose: () => void;
}

const EditRestaurantModal: React.FC<EditRestaurantModalProps> = ({ restaurant, onClose }) => {
  const [formData, setFormData] = useState({
    name: restaurant.name,
    rating: restaurant.rating.toString(),
    location: restaurant.location,
    category: restaurant.category,
    description: restaurant.description,
    contactNumber: restaurant.contactNumber.toString(),
    emailId: restaurant.emailId,
    deliveryArea: restaurant.deliveryArea,
  });

  const [errors, setErrors] = useState({
    name: '',
    rating: '',
    location: '',
    category: '',
    description: '',
    contactNumber: '',
    emailId: '',
    deliveryArea: '',
  });

  const dispatch = useDispatch();

  // Validation logic
  const validateForm = () => {
    const newErrors = {
      name: '',
      rating: '',
      location: '',
      category: '',
      description: '',
      contactNumber: '',
      emailId: '',
      deliveryArea: ''
    };

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    // Rating validation (out of 5)
    const ratingValue = Number(formData.rating);
    if (!formData.rating || isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
      newErrors.rating = 'Rating must be between 1 and 5';
    }

    // Location validation
    if (!formData.location) {
      newErrors.location = 'Location is required';
    }

    // Category validation
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    // Description validation
    if (!formData.description) {
      newErrors.description = 'Description is required';
    }

    // Contact number validation (Indian format)
    const contactPattern = /^[6-9]\d{9}$/;
    if (!contactPattern.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Enter a valid 10-digit Indian phone number';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.emailId)) {
      newErrors.emailId = 'Enter a valid email ID';
    }

    // Delivery Area validation
    if (!formData.deliveryArea) {
      newErrors.deliveryArea = 'Delivery Area is required';
    }

    setErrors(newErrors);

    // Return true if there are no validation errors
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (!validateForm()) {
      return; // Stop the function if validation fails
    }

    const updatedRestaurant: Restaurant = {
      ...restaurant,
      name: formData.name,
      rating: Number(formData.rating),
      location: formData.location,
      category: formData.category,
      description: formData.description,
      contactNumber: Number(formData.contactNumber),
      emailId: formData.emailId,
      deliveryArea: formData.deliveryArea,
    };

    dispatch(editRestaurant(updatedRestaurant));
    dispatch(showAlert({ message: 'Restaurant edited successfully!', type: 'success' }));
    onClose();
  };

  // Configuration for input fields
  const inputFields = [
    { name: 'name', type: 'text', placeholder: 'Name', error: errors.name },
    { name: 'rating', type: 'number', placeholder: 'Rating (1-5)', error: errors.rating },
    { name: 'location', type: 'text', placeholder: 'Location', error: errors.location },
    { name: 'category', type: 'text', placeholder: 'Category', error: errors.category },
    { name: 'contactNumber', type: 'number', placeholder: 'Contact Number', error: errors.contactNumber },
    { name: 'emailId', type: 'email', placeholder: 'Email ID', error: errors.emailId },
    { name: 'deliveryArea', type: 'text', placeholder: 'Delivery Area', error: errors.deliveryArea },
    { name: 'description', type: 'textarea', placeholder: 'Description', error: errors.description }
  ];

  return (
    <div className="modal">
      <div className="modal__content">
        <h3>Edit Restaurant</h3>
        <form>
          {inputFields.map((field) => (
            <div key={field.name} className="input-group">
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                />
              )}
              {field.error && <span className="error">{field.error}</span>}
            </div>
          ))}
        </form>
        <div className="button-group">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EditRestaurantModal;
