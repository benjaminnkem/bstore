import { create } from "zustand";

interface User {
  name: string;
  email: string;
}

interface UserStore {
  user: User | null;
  updateUserData: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  updateUserData: (user: User) => set((state) => ({ ...state, user })),
}));
