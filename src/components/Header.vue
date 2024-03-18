<!-- Header.vue -->
<template>
    <v-app-bar app style="background-color: white;">
        <v-toolbar-title style="color: black;">My App</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- Add any additional header content here -->
        <v-btn style="color: black;" class="ml-auto mr-10">Login</v-btn>

        
    </v-app-bar>
</template>

<script>
export default {
    name: 'Header'
};
</script>

<style scoped>
/* Add any custom styles for the header */
.v-btn {
    border-radius: 20px !important;
    background-color: white !important;
    color: #146CC9 !important;
    border-color: #146CC9 !important;
    border: 2px solid black;
}
</style>