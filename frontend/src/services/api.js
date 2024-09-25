import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export default {
    async getAllRestaurants() {
        try {
            const response = await axios.get(`${API_URL}/restaurants`);
            return response.data;
        } catch (error) {
            console.error('Error fetching restaurants:', error);
            throw error;
        }
    },

    async getRestaurantById(id) {
        try {
            const response = await axios.get(`${API_URL}/restaurants/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching restaurant with id ${id}:`, error);
            throw error;
        }
    },

    async createRestaurant(restaurantData) {
        try {
            const response = await axios.post(`${API_URL}/restaurants`, restaurantData);
            return response.data;
        } catch (error) {
            console.error('Error creating restaurant:', error);
            throw error;
        }
    },

    async updateRestaurant(id, restaurantData) {
        try {
            const response = await axios.put(`${API_URL}/restaurants/${id}`, restaurantData);
            return response.data;
        } catch (error) {
            console.error(`Error updating restaurant with id ${id}:`, error);
            throw error;
        }
    },

    async deleteRestaurant(id) {
        try {
            await axios.delete(`${API_URL}/restaurants/${id}`);
        } catch (error) {
            console.error(`Error deleting restaurant with id ${id}:`, error);
            throw error;
        }
    }
};