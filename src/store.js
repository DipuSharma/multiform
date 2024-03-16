// store.js
import { defineStore } from 'pinia';
import {ref, computed} from 'vue';

export const useFormStore = defineStore('form', {
  state: () => ({
    formData: {
      firstName: '',
      lastName: '',
      email: '',
    },
    currentStep: 1,
  }),
  actions: {
    nextStep() {
      this.currentStep++;
    },
    prevStep() {
      this.currentStep--;
    },
    setFormData(data) {
      this.formData = { ...this.formData, ...data };
    },
    resetForm() {
      this.formData = {};
      this.currentStep = 1;
    },
  },
});
