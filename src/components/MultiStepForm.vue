<!-- MultiStepForm.vue -->
<template>
  <div>
    <!-- Add more steps as needed -->
    <!-- Step 1 Form Fields -->
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
      <v-row class="mt-5">
        <v-col cols="2">
          <v-list-subheader class="required-field" style="color: black;">Company Registration Name</v-list-subheader>
        </v-col>

        <v-col cols="3">
          <v-text-field model-value="" variant="outlined" placeholder="Enter Company Registration No" :rules="rules"
            hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-list-subheader class="required-field" style="color: black;">Pan No</v-list-subheader>
        </v-col>

        <v-col cols="3">
          <v-text-field model-value="" variant="outlined" placeholder="Enter Company Pan No"></v-text-field>
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
          <v-text-field model-value="" variant="outlined" placeholder="Enter Website url"></v-text-field>
        </v-col>
        <!-- Second Input -->
        <v-col cols="2">
          <v-list-subheader style="color: black;">Tan No</v-list-subheader>
        </v-col>

        <v-col cols="3">
          <v-text-field model-value="" variant="outlined" placeholder="Enter Tan No"
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
          <v-text-field model-value="" variant="outlined" placeholder="Enter Your Name"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-list-subheader class="required-field" style="color: black;">CIN No</v-list-subheader>
        </v-col>

        <v-col cols="3">
          <v-text-field model-value="" variant="outlined" placeholder="Enter CIN No"></v-text-field>
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
          <v-text-field model-value="" variant="outlined" placeholder="Enter Your company email id"
            hint="The above Email ID will be treated as company’s admin ID and will be used for registration process"
            persistent-hint></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-list-subheader style="color: black;">GST No</v-list-subheader>
        </v-col>

        <v-col cols="3">
          <v-text-field model-value="" variant="outlined" placeholder="Enter Company GST No"></v-text-field>
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
          <v-text-field model-value="" variant="outlined" placeholder="Enter Your Mobile No"
            hint="The above mobile no. will be treated as company’s admin no. and will be used for registration process"
            persistent-hint></v-text-field>
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
          <v-textarea variant="outlined" hint="Will be used for all offline communications and billing purposes"
            persistent-hint></v-textarea>
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
            <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/groups.png" alt="groups"/>
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
                      <v-text class="required-field" style="color: black;">Name </v-text>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field model-value="" variant="outlined" placeholder="Enter name"></v-text-field>
                    </v-col>

                    <v-col cols="2" class="mt-3" style="align-items: end; justify-content: end">
                      <v-text class="required-field" style="color: black;">Mobile No </v-text>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field model-value="" variant="outlined" placeholder="Mobile No"></v-text-field>
                    </v-col>
                    <v-col cols="1">

                    </v-col>
                  </v-row>
                  <v-row cols="12" class="text-end justify-end">
                    <v-col class="mt-3" cols="2">
                      <v-text class="required-field" style="color: black;">Designation </v-text>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field model-value="" variant="outlined" placeholder="Enter name"></v-text-field>
                    </v-col>
                    <v-col cols="2" class="mt-3">
                      <v-text class="required-field model-field" style="color: black;">Email Id </v-text>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field model-value="" variant="outlined" placeholder="Mobile No"></v-text-field>
                    </v-col>
                    <v-col cols="1">

                    </v-col>
                  </v-row>

                  <v-row cols="12" class="text-end justify-end">
                    <v-col class="mt-3" cols="2">
                      <v-text class="required-field" style="color: black;">Profile </v-text>
                    </v-col>

                    <v-col cols="6" class="d-flex">
                      <v-checkbox label="Seller"></v-checkbox>
                      <v-checkbox label="Buyer"></v-checkbox>
                      <v-checkbox label="Billing"></v-checkbox>
                      <v-checkbox label="Viewer"></v-checkbox>
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
    </v-container>
    <!-- Step 3 Form Fields -->
    <v-container fluid v-if="currentStep === 3" class="p-4">
    </v-container>
    <!-- Button Container -->
    <v-container scope cols="12" class="text-center">
      <!-- Prev Button -->
      <v-btn  @click="prevStep" v-if="currentStep > 1" class="prev">Prev</v-btn>
      <!-- Next Button -->
      <v-btn @click="nextStep" class="p-4 ml-5 next" v-if="currentStep < totalSteps">Next</v-btn>
      <!-- Submit Button -->
      <v-btn @click="submitForm" v-if="currentStep === totalSteps" class="submit">Submit</v-btn>
    </v-container>

  </div>
</template>

<script>
import { useFormStore } from '../store';
import ImageButton from './ImageButton';
export default {
  data() {
    return {
      dialog: false
    }
  },
  data: () => ({
    rules: [
      value => !!value || 'Required.'
    ],
  }),
  setup() {
    const formStore = useFormStore();

    return {
      formData: formStore.formData,
      // currentStep: formStore.currentStep,
      currentStep: 1,
      totalSteps: 3,
      nextStep: formStore.nextStep,
      prevStep: formStore.prevStep,
      submitForm() {
        // Handle form submission here
        console.log('Form submitted:', this.formData);
        // Reset form after submission
        formStore.resetForm();
      },
    };
  },
};
</script>

<style>
.required-field::after {
  content: "*";
  color: red;
}
</style>
