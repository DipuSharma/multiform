<!-- MultiStepForm.vue -->
<template>
  <div>
    <!-- Add more steps as needed -->
    <!-- Step 0 Form Fields -->
    <v-container fluid v-if="currentStep === 0">
      <v-row>
        <v-col class="text-center">
          <v-text>Start Registration</v-text>
          <v-btn @click="nextStep" class="p-4 ml-5 next">Next</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <!-- Step 1 -->
    <v-container fluid v-if="currentStep === 1" class="p-4">
      <v-card-title mdi:home-assistant class="d-flex">
        <img width="50" height="50" src="https://img.icons8.com/ios/50/company--v1.png" alt="company--v1" />
        <div class="ml-5">
          <h3>Company Details</h3>
          <p class="" style="font-size: smaller;">Add your company details</p>
        </div>
      </v-card-title>
      <v-divider color="info" class="border-opacity-100 mt-5"></v-divider>
      <!-- Body Part -->
      <v-form ref="form1" @submit.prevent="nextStep">
        <v-row class="mt-5" cols="12">
          <v-col cols="2">
            <v-list-subheader class="required-field" style="color: black;">Company Registration Name</v-list-subheader>
          </v-col>

          <v-col cols="3">
            <v-text-field v-model="formData.compName" variant="outlined" placeholder="Enter Company Registration No"
              :rules="rules" hide-details="auto" required></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-list-subheader class="required-field" style="color: black;">Pan No</v-list-subheader>
          </v-col>

          <v-col cols="3">
            <v-text-field model-value="" v-model="formData.panNo" variant="outlined" placeholder="Enter Company Pan No"
              :rules="rules" hide-details="auto" required></v-text-field>
          </v-col>
          <v-col cols="2">
            <ImageButton />
          </v-col>
        </v-row>

        <v-row>
          <!-- First Input -->
          <v-col cols="2">
            <v-list-subheader style="color: black;">Website Url</v-list-subheader>
          </v-col>

          <v-col cols="3">
            <v-text-field model-value="" v-model="formData.websiteUrl" variant="outlined"
              placeholder="Enter Website url"></v-text-field>
          </v-col>
          <!-- Second Input -->
          <v-col cols="2">
            <v-list-subheader style="color: black;">Tan No</v-list-subheader>
          </v-col>

          <v-col cols="3">
            <v-text-field model-value="" v-model="formData.tanNo" variant="outlined" placeholder="Enter Tan No"
              hint="TAX: Tax Deduction acount no of company" persistent-hint></v-text-field>
          </v-col>
          <!-- File Input -->
          <v-col cols="2">
            <ImageButton />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="2">
            <v-list-subheader class="required-field" style="color: black;">Your Name</v-list-subheader>
          </v-col>

          <v-col cols="3">
            <v-text-field model-value="" v-model="formData.yourName" variant="outlined" placeholder="Enter Your Name"
              :rules="rules" hide-details="auto" required></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-list-subheader class="required-field" style="color: black;">CIN No</v-list-subheader>
          </v-col>

          <v-col cols="3">
            <v-text-field model-value="" v-model="formData.cinNo" variant="outlined" placeholder="Enter CIN No"
              :rules="rules" hide-details="auto" required></v-text-field>
          </v-col>
          <v-col cols="2">
            <ImageButton />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="2">
            <v-list-subheader class="required-field" style="color: black;">Your Email Id</v-list-subheader>
          </v-col>

          <v-col cols="3">
            <v-text-field model-value="" v-model="formData.compEmailId" variant="outlined"
              placeholder="Enter Your company email id"
              hint="The above Email ID will be treated as company’s admin ID and will be used for registration process"
              persistent-hint required></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-list-subheader style="color: black;">GST No</v-list-subheader>
          </v-col>

          <v-col cols="3">
            <v-text-field model-value="" v-model="formData.gstNo" variant="outlined"
              placeholder="Enter Company GST No"></v-text-field>
          </v-col>
          <v-col cols="2">
            <ImageButton />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-list-subheader class="required-field" style="color: black;">Your Mobile No</v-list-subheader>
          </v-col>

          <v-col cols="3">
            <v-text-field model-value="" v-model="formData.yourMobile" variant="outlined"
              placeholder="Enter Your Mobile No"
              hint="The above mobile no. will be treated as company’s admin no. and will be used for registration process"
              persistent-hint required></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-list-subheader style="color: black;">Cancel Cheque.</v-list-subheader>
            <p class="" style="font-size: xx-small; margin-top: -10px;">(Only Pdf file formate is allowed)</p>
          </v-col>

          <v-col cols="3">
            <ImageButton />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-list-subheader style="color: black;">Billing Address</v-list-subheader>
          </v-col>

          <v-col cols="3">
            <v-textarea variant="outlined" v-model="formData.billingAdress"
              hint="Will be used for all offline communications and billing purposes" persistent-hint></v-textarea>
          </v-col>
          <v-col cols="2">
            <v-list-subheader style="color: black;">Company Registration Certificate</v-list-subheader>
            <p class="" style="font-size: xx-small; margin-top: -10px;">(Only Pdf file formate is allowed)</p>
            <v-list-subheader style="color: black;" class="mt-6">Management Authorization</v-list-subheader>
            <p class="" style="font-size: xx-small; margin-top: -10px;">(Only Pdf file formate is allowed)</p>
          </v-col>

          <v-col cols="3">
            <ImageButton />
            <ImageButton class="mt-7" />
          </v-col>
        </v-row>
        <v-row cols="12">
          <v-col class="text-center">
            <v-btn @click="prevStep" class="prev">Prev</v-btn>
            <v-btn type="submit" class="p-4 ml-5 next">Next</v-btn>
          </v-col>
        </v-row>
      </v-form>

      <!-- Add other fields for step 1 -->
    </v-container>
    <!-- Step 2 Form Fields -->
    <v-container fluid v-if="currentStep === 2" class="p-4">
      <!-- User Header -->
      <v-card-title class="d-flex">
        <img width="50" height="50" src="https://img.icons8.com/ios/50/user--v1.png" alt="user--v1" />
        <div class="ml-5">
          <h3>User Details</h3>
          <p class="" style="font-size: smaller;">Add your details</p>
        </div>
      </v-card-title>
      <!-- Devider -->
      <v-divider color="info" class="border-opacity-100 mt-5"></v-divider>
      <!-- Body -->
      <v-row class="text-center pa-4" style="height: 20rem;">
        <v-col>
          <div class="text-center align-center mt-10">
            <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/groups.png" alt="groups" />
          </div>
          <v-btn style="margin-top: 2%;" @click="dialog = true">Add User</v-btn>


          <!-- Model Design -->
          <v-dialog v-model="dialog" width="auto" class="mt-15">
            <v-container>
              <v-card prepend-icon="mdi-home" title="Add User" class="mx-auto my-8"
                style="background-color: white; color: black; width: 800px;">
                <template v-slot:actions class="text-center justify-center">
                  <v-btn class="close-btn ms-auto" text="Close" @click="dialog = false"></v-btn>
                </template>
                <v-divider color="info" class="border-opacity-100 mt-5"></v-divider>
                <!-- Body -->
                <div class="">
                  <v-row cols="12" class="text-end mt-5 justify-end">
                    <v-col cols="2" class="mt-3" style="align-items: end; justify-content: end">
                      <h4 class="required-field" style="color: black;">Name </h4>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field model-value="" v-model="userFormData.userName" variant="outlined"
                        placeholder="Enter username"></v-text-field>
                    </v-col>

                    <v-col cols="2" class="mt-3" style="align-items: end; justify-content: end">
                      <h4 class="required-field" style="color: black;">Mobile No </h4>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field model-value="" v-model="userFormData.userMobile" variant="outlined"
                        placeholder="Enter Mobile No"></v-text-field>
                    </v-col>
                    <v-col cols="1">

                    </v-col>
                  </v-row>
                  <v-row cols="12" class="text-end justify-end">
                    <v-col class="mt-3" cols="2">
                      <h4 class="required-field" style="color: black;">Designation </h4>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field model-value="" v-model="userFormData.designation" variant="outlined"
                        placeholder="Enter Designation"></v-text-field>
                    </v-col>
                    <v-col cols="2" class="mt-3">
                      <h4 class="required-field model-field" style="color: black;">Email Id </h4>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field model-value="" v-model="userFormData.emailId" variant="outlined"
                        placeholder="Enter Email Id"></v-text-field>
                    </v-col>
                    <v-col cols="1">

                    </v-col>
                  </v-row>

                  <v-row cols="12" class="text-end justify-end">
                    <v-col class="mt-3" cols="2">
                      <h4 class="required-field" style="color: black;">Profile </h4>
                    </v-col>

                    <v-col cols="6" class="d-flex">
                      <v-checkbox v-model="userFormData.checkbox" value="Seller" label="Seller"></v-checkbox>
                      <v-checkbox label="Buyer" v-model="userFormData.checkbox" value="Buyer"></v-checkbox>
                      <v-checkbox label="Billing" v-model="userFormData.checkbox" value="Billing"></v-checkbox>
                      <v-checkbox label="Viewer" v-model="userFormData.checkbox" value="Viewer"></v-checkbox>
                    </v-col>

                    <v-col cols="4">

                    </v-col>
                  </v-row>
                </div>
              </v-card>

            </v-container>
          </v-dialog>
        </v-col>
      </v-row>
      <div class="text-center mt-5">
        <v-btn @click="prevStep" v-if="currentStep > 1" class="prev">Prev</v-btn>
        <v-btn @click="nextStep" type="submit" class="p-4 ml-5 next" v-if="currentStep < totalSteps">Next</v-btn>
      </div>
    </v-container>
    <!-- Step 3 Form Fields -->
    <v-container fluid v-if="currentStep === 3" class="p-4">
      <!-- Display all form field data here -->
      <v-row cols="12">
        <v-col cols="6">
          <h3>Form Data</h3>
          <p>Company Name: {{ formData?.compName }}</p>
          <p>Company Pan: {{ formData?.panNo }}</p>
          <p>Company Email: {{ formData?.compEmailId }}</p>
          <p>Company Website url: {{ formData?.websiteUrl }}</p>
          <p>Company Mobile: {{ formData?.yourMobile }}</p>
          <p>Your Name: {{ formData?.yourName }}</p>
          <p>Company GST No: {{ formData?.gstNo }}</p>
          <p>Company Tan: {{ formData?.tanNo }}</p>
          <p>Company Billing Address: {{ formData?.billingAdress }}</p>
          <!-- Add more fields as needed -->
        </v-col>
        <v-col cols="6">
          <h3>User Details</h3>
          <p>User Name: {{ userFormData?.userName }}</p>
          <p>User Email: {{ userFormData?.emailId }}</p>
          <p>User Mobile: {{ userFormData?.userMobile }}</p>
          <p>User Profile: {{ userFormData?.checkbox }}</p>
          <p>User Designation: {{ userFormData?.designation }}</p>
        </v-col>

      </v-row>
      <div class="text-center">
        <v-btn @click="prevStep" v-if="currentStep > 1" class="prev">Prev</v-btn>
        <v-btn @click="submitForm" v-if="currentStep === totalSteps" class="submit ml-5">Submit</v-btn>
      </div>
    </v-container>


  </div>
</template>
<script>
import { useFormStore } from '../store';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import ImageButton from './ImageButton';

export default {
  data() {
    return {
      dialog: false
    }
  },

  setup() {
    const form1 = ref(null);
    const formStore = useFormStore();
    const { currentStep } = storeToRefs(formStore);
    const totalSteps = 3;
    const formData = ref({
      compName: '',
      panNo: '',
      websiteUrl: '',
      yourName: '',
      cinNo: '',
      tanNo: '',
      compEmailId: '',
      yourMobile: '',
      billingAdress: '',
      gstNo: '',
      // Add more form fields here
    });
    const userFormData = ref({
      userName: '',
      useMobile: '',
      designation: '',
      emailId: '',
      checkbox: [],
      // Add more form fields here
    });
    const rules = [
      value => !!value || 'Field Required'
    ];
    const data = [formData.value, userFormData.value]
    const nextStep = () => {
      formStore.nextStep();
      currentStep.value = formStore.currentStep;

    };

    const prevStep = () => {
      formStore.prevStep();
      currentStep.value = formStore.currentStep;
    };

    const submitForm = () => {
      console.log('Form submitted:', formData.value, userFormData.value)
      // formStore.submitForm(data)
      formStore.resetForm();
      currentStep.value = formStore.currentStep;
    };

    return {
      currentStep,
      totalSteps,
      formData,
      userFormData,
      rules,
      nextStep,
      prevStep,
      submitForm,
      
    };
  },

};
</script>



<style scoped>
.required-field::after {
  content: "*";
  color: red;
}

.v-btn {
  border-radius: 5px !important;
  background-color: white !important;
  color: #146CC9 !important;
  border-color: #146CC9 !important;
  border: 2px solid black;
}
</style>
