import { create } from 'zustand';
import axios from 'axios';

const useSearchStore = create((set, get) => ({
  categoryId: null,
  subCatId: null,
  location: null, // location = {latitude: number, longitude: number}
  radius: null,
  rating: 0,
  minPrice: 0,
  maxPrice: 0,
  orderBy: '',
  sort: '',
  results: null,
  resultsCount: 0,
  loading: false,
  error: null,
  searchProvidersHomepage: async (targetLocation, targetCategory) => {
    try {
      set({ location: targetLocation, categoryId: targetCategory });
      const { location, categoryId } = get();
      const categoryIdString = categoryId ? `&categoryId=${categoryId}` : '';
      const queryString = `orderBy=distance&sort=asc&latitude=${location.latitude}&longitude=${location.longitude}${categoryIdString}`;
      const response = await axios.get(`http://localhost:4289/provider/filter?${queryString}`);
      set({ results: response.data.results, resultsCount: response.data.count });
    } catch (error) {
      console.log(error);
    }
  },
  searchProvidersLanding: async () => {
    try {
      const response = await axios.get(`http://localhost:4289/provider/?orderBy=providerRating&sort=desc`);
      const results = response.data.providers;
      return results;
    } catch (error) {
      console.log(error);
    }
  },
  searchProvidersServicePage: async (searchParams) => {
    const locationString = searchParams.location
      ? `latitude=${searchParams.location.latitude}&longitude=${searchParams.location.longitude}`
      : '';
    const radiusString = searchParams.radius ? `radius=${searchParams.radius}` : 'radius=5';
    const optionalQuery = [];
    const subCatIdString = searchParams.subCatId
      ? `subCatId=${searchParams.subCatId}`
      : searchParams.categoryId
      ? `categoryId=${searchParams.categoryId}`
      : '';
    subCatIdString && optionalQuery.push(subCatIdString);
    const dateString = searchParams.date ? `date=${new Date(searchParams.date).toISOString().split('T')[0]}` : '';
    dateString && optionalQuery.push(dateString);
    const ratingString = searchParams.rating ? `rating=${searchParams.rating}` : '';
    ratingString && optionalQuery.push(ratingString);
    const priceString =
      searchParams.maxPrice && searchParams.minPrice
        ? `minPrice=${searchParams.minPrice}&maxPrice=${searchParams.maxPrice}`
        : '';
    priceString && optionalQuery.push(priceString);
    const sortString = searchParams.sort
      ? `sort=${searchParams.sort}`
      : searchParams.orderBy == 'rating'
      ? `sort=desc`
      : `sort=asc`;
    const orderByString = searchParams.orderBy
      ? `orderBy=${searchParams.orderBy}&${sortString}`
      : 'orderBy=DISTANCE&$sort=asc';
    orderByString && optionalQuery.push(orderByString);
    const optionalQueryString = optionalQuery.join('&');

    const queryString = `${locationString}&${radiusString}&${optionalQueryString}`;
    console.log(queryString);
    const response = await axios.get(`http://localhost:4289/provider/filter?${queryString}`);
    // console.log(response.data);
    set({ results: response.data.results, resultsCount: response.data.count });
    return response;
  },
}));

export default useSearchStore;
