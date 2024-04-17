import { unsplash } from '@/utils/unsplash';

const getUnsplashImages = async (query: string) => {
  'use server';

  const response = await unsplash.search.getPhotos({
    query: query === '' ? 'poster' : query,
    page: 1,
    perPage: 30,
  });

  return response?.response?.results || [];
};

export { getUnsplashImages };
