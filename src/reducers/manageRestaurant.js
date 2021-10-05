import cuid from 'cuid';

export default function manageRestaurants(
    state = { 
        restaurants: [],
        reviews: []
    }, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = Object.assign({}, action.restaurant, { id: cuid() });
            return {...state, restaurants: [...state.restaurants, restaurant]};
        case 'REMOVE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.restaurantId);
            return {...state, restaurants: restaurants};
        case 'ADD_REVIEW':
            const review = Object.assign({}, action.review, { id: cuid() });
            return {...state, reviews: [...state.reviews, review]};
        case 'REMOVE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.reviewId);
            return {...state, reviews: reviews};
        default:
            return state;
    }
}
