import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '../../utilities/types/types';

interface RestaurantState {
  restaurants: Restaurant[];
}

const initialState: RestaurantState = {
  restaurants: [
    { id: 1, name: 'Pizza Hut', rating: 4.5, location: 'New York', category: 'Fast Food' },
    { id: 2, name: 'Sushi Place', rating: 4.8, location: 'San Francisco', category: 'Japanese' },
    { id: 3, name: 'Burger King', rating: 4.0, location: 'Los Angeles', category: 'Fast Food' },
  ],
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    editRestaurant: (state, action: PayloadAction<Restaurant>) => {
      const index = state.restaurants.findIndex(r => r.id === action.payload.id);
      if (index !== -1) {
        state.restaurants[index] = action.payload;
      }
    },
    deleteRestaurant: (state, action: PayloadAction<number>) => {
      state.restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.payload);
    },
    addRestaurant: (state, action: PayloadAction<Restaurant>) => {
      state.restaurants.push(action.payload);  // Add the new restaurant to the list
    },
  },
});

export const { editRestaurant, deleteRestaurant, addRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
