import { create } from 'zustand';

// types
import type { PosterProps } from '@/typings/poster';

const usePosterStore = create((set) => ({
  poster: {
    title: '',
    font: '',
    subTitle: '',
  },
  setPoster: (poster: PosterProps) => set({ poster }),
}));

export { usePosterStore };
