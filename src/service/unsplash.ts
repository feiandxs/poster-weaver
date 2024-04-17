import { unsplash } from '@/utils/unsplash';

// types
import { Basic } from 'unsplash-js/dist/methods/photos/types';

const getUnsplashImages = async (query: string): Promise<Basic[]> => {
  const response = await unsplash.search.getPhotos({
    query: query === '' ? 'poster' : query,
    page: 1,
    perPage: 30,
  });

  return response?.response?.results || [];
};

export { getUnsplashImages };
