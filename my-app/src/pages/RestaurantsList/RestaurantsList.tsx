// src/components/RestaurantList.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './RestaurantsList.scss';
import { Restaurant } from '../../utilities/types/types';
import { RootState } from '../../redux/store';
import { deleteRestaurant } from '../../redux/Slices/restaurantSlice';
import EditRestaurantModal from '../../components/EditRestaurantModal/EditRestaurantModal';
import AddRestaurantModal from '../../components/AddRestaurantModal/AddRestaurantModal';

const RestaurantsList: React.FC = () => {
  const restaurants = useSelector((state: RootState) => state.restaurant.restaurants);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State for add modal

  const dispatch = useDispatch();

  const handleEdit = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsEditModalOpen(true);
  };

  const handleDelete = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedRestaurant) {
      dispatch(deleteRestaurant(selectedRestaurant.id));
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <div className="restaurant-list">
      <div className='header'>

      <h2>Restaurants</h2>
      <button onClick={() => setIsAddModalOpen(true)} className="add-restaurant-button">Add Restaurant</button> {/* Add Button */}
      </div>
{restaurants && restaurants.length>0  ?
      <table className="restaurant-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Location</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant:Restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.rating}</td>
              <td>{restaurant.location}</td>
              <td>{restaurant.category}</td>
              <td>
                <button onClick={() => handleEdit(restaurant)}>Edit</button>
                <button onClick={() => handleDelete(restaurant)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> : <p className='add-new-restaurant-label'>Please add new restaurant</p>}

      {/* Edit Modal */}
      {isEditModalOpen && selectedRestaurant && (
        <EditRestaurantModal
          restaurant={selectedRestaurant}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <p>Are you sure you want to delete {selectedRestaurant?.name}?</p>
            <div className='button-group'>
            <button onClick={confirmDelete}>Confirm</button>
            <button onClick={() => setIsDeleteModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

       {/* Add Modal */}
       {isAddModalOpen && (
        <AddRestaurantModal onClose={() => setIsAddModalOpen(false)} />
      )}
    </div>
  );
};

export default RestaurantsList;
