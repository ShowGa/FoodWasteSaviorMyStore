import { create } from "zustand";

const useRegFormStore = create((set) => ({
  formData: {},
  setFormData: (newData) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ...newData,
      },
    })),
}));

export default useRegFormStore;
