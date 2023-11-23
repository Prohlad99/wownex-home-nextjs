import { create } from "zustand";

export const usePaymentStore = create((set) => ({
  step: {
    one: false,
    two: false,
    three: false,
  },
  track: {
    one: false,
    two: false,
    three: false,
  },

  completeStep: (val) => {
    set((state) => {
      if (val === 1) {
        state.step.one = true;
      }
      if (val === 2) {
        state.step.two = true;
      }
      if (val === 3) {
        state.step.three = true;
      }
    });
  },

  goBack: (val) => {
    set((state) => {});
  },
}));
