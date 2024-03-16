<template>
  <v-app style="background-color: white; color: black;">
    <v-main>
      <Header />
      <h5 class="text-blue-700 mb-4 text-sm font-normal text-center mt-6" style="color: cadetblue;">
        Setup your company inventory management/ buying system 3 step
      </h5>
      <h3 class="text-center">Stepper Progress{{currentStep }}</h3>
      <v-container class="stepper">
        <v-col cols="8" class="text-center flex d-flex steps">
          <div v-bind:class = "(currentStep >= 1)?'circle active':'circle'">
            1
          </div>
          <hr v-bind:class = "(currentStep >= 1)?'progress active':'progress'">

          <div v-bind:class = "(currentStep >= 2)?'circle active':'circle'">
            2
          </div>
          <hr v-bind:class = "(currentStep >= 2)?'progress active':'progress'">
          <div v-bind:class = "(currentStep === 3)?'circle active':'circle'">
            3
          </div>
        </v-col>
      </v-container>
      <v-container>
        <v-card style="background-color: white; color: black;">
          <MultiStepForm />
        </v-card>
      </v-container>
      <Footer />
    </v-main>
  </v-app>

</template>
<script>
import { useFormStore } from './store';
import MultiStepForm from './components/MultiStepForm.vue';
import {ref} from 'vue';
const activeClass = ref('active')
export default {

}
</script>


<style>
.stepper{
  width: 100%;
  align-items:center;
}
.stepper .steps{
  position:relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-left: 20%;
}
.steps .circle{
  display:flex;
  align-items:center;
  justify-content: center;
  color: black;
  width: 5rem;
  height: 5rem;
  border-radius:50%;
  background-color: #e0e0e0;
}
hr.progress {
  border: 4px solid #e0e0e0;
  border-radius: 25px;
  width:30%;
}

.steps .circle.active{
  display:flex;
  align-items:center;
  justify-content: center;
  color: black;
  width: 5rem;
  height: 5rem;
  border-radius:50%;
  background-color: #4070f4;
}
hr.progress.active {
  border: 4px solid #4070f4;
  border-radius: 25px;
  width:30%;
}
  
</style>