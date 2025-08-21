
import { create } from 'zustand';

interface RadioState {
  isPlaying: boolean;
  togglePlay: () => void;
  setPlaying: (playing: boolean) => void;
}

export const useRadioStore = create<RadioState>((set) => ({
  isPlaying: false,
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setPlaying: (playing: boolean) => set({ isPlaying: playing }),
}));
