import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '../../utilities/types/types';
import restaurants from '../../utilities/constants/restaurants';

interface RestaurantState {
  restaurants: Restaurant[];
}
const initialRestaurants = restaurants;

const initialState: RestaurantState = {
  restaurants: initialRestaurants,
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
      state.restaurants.unshift(action.payload);  // Add the new restaurant to the list
    },
  },
});

export const { editRestaurant, deleteRestaurant, addRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
