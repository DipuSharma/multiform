import { defineStore } from 'pinia';
export const useFormStore = defineStore('record', {
  state: () => ({
    formData: {},
    userFormData: {},
    currentStep: 1,
  }),
  getters: {
    totalCount(){
      return this.currentStep
    }
  },
  actions: {
    nextStep() {
      this.currentStep++;
      console.log('currentStep', this.currentStep);
    },
    prevStep() {
      this.currentStep--;
    },
    setFormData(data) {
      this.formData = { ...this.formData, ...data };
      this.userFormData = { ...this.userFormData, ...data };
    },
    resetForm() {
      this.formData = {};
      this.currentStep = 1;
    },
  },
});
