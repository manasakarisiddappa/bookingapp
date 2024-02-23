export const getHotelsByRating = (hotels, rating) => {
  const filterByRating = hotels.filter((hotel) => hotel.rating >= rating);
  return filterByRating;
};
