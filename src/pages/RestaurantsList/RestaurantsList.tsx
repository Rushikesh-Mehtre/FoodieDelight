// src/components/RestaurantList.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './RestaurantsList.scss';
import { Restaurant } from '../../utilities/types/types';
import { RootState } from '../../redux/store';
import { deleteRestaurant } from '../../redux/Slices/restaurantSlice';
import EditRestaurantModal from '../../components/EditRestaurantModal/EditRestaurantModal';
import AddRestaurantModal from '../../components/AddRestaurantModal/AddRestaurantModal';
import RestaurantDetailsModal from '../../components/RestaurantDetailsModal/RestaurantDetailsModal';
import { BiSolidError } from "react-icons/bi";
import { showAlert } from '../../redux/Slices/alertSlice';

const RestaurantsList: React.FC = () => {
  const restaurants = useSelector((state: RootState) => state.restaurant.restaurants);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State for add modal
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false); // State for details modal
  const [searchTerm, setSearchTerm] = useState(''); // State for search bar
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const recordsPerPage = 10; // Show 10 records per page
  const dispatch = useDispatch();

    // Filter restaurants based on search term
    const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const totalPages = Math.ceil(filteredRestaurants.length / recordsPerPage);
    const currentRestaurants = filteredRestaurants.slice(
      (currentPage - 1) * recordsPerPage,
      currentPage * recordsPerPage
    );

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
      dispatch(showAlert({ message: 'Restaurant deleted successfully!', type: 'success' })); // Trigger alert

    }
  };
  const handleViewDetails = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsDetailsModalOpen(true);
  };
    // Handle pagination
    const handleNextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  

  return (
    <div className="restaurant-list">

      <div className='header'>

      <h2>Restaurants</h2>
      <div className='right'>
   {/* Search Bar */}
   <input
        type="text"
        placeholder="Search by name, category or location"
        className="search-bar"
        value={searchTerm}
        onChange={(e) => {setCurrentPage(1);setSearchTerm(e.target.value)}}
      />
      <button onClick={() => setIsAddModalOpen(true)} className="button-add">Add Restaurant</button> {/* Add Button */}
      </div>
      </div>
{currentRestaurants && currentRestaurants.length > 0   ?
       <>
        <table className="restaurant-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Location</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRestaurants.map((restaurant:Restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.rating}</td>
              <td>{restaurant.location}</td>
              <td>{restaurant.category}</td>
              <td>{restaurant.description}</td>
              <td>
                <button onClick={() => handleViewDetails(restaurant)} className='button-details'>View Details</button>
                <button onClick={() => handleEdit(restaurant)} className='button-edit'>Edit</button>
                <button onClick={() => handleDelete(restaurant)} className='button-delete'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> 
          {/* Pagination Controls */}
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
       </>
     : restaurants.length>0 && filteredRestaurants.length===0 ?<p className='add-new-restaurant-label'> <BiSolidError className='error-icon' />
      No records found</p>  : <p className='add-new-restaurant-label'> <BiSolidError className='error-icon' />
      Please add new restaurant</p>}

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
            {/* Restaurant Details Modal */}
            {isDetailsModalOpen && selectedRestaurant && (
        <RestaurantDetailsModal
          restaurant={selectedRestaurant}
          onClose={() => setIsDetailsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default RestaurantsList;
