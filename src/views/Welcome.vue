<template>
    <v-container class="d-flex align-center justify-center" fluid>
      <v-card class="elevation-12 pa-5" width="400" style="background-color: #2c3e50; border-radius: 15px;">
        <v-card-title class="text-h5 white--text text-center pb-4">Welcome to My Life</v-card-title>
        <v-card-text class="text-center">
          <v-btn color="error" @click="handleLogout" class="mt-4" style="border-radius: 25px; font-weight: bold;">
            Log Out
          </v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { logout } from '../supabase';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const handleLogout = async () => {
    const { error } = await logout();
    if (error) {
      alert(`Logout Error: ${error.message}`);
    } else {
      alert('Logged Out Successfully');
      router.push('/'); // Redirect back to the login page
    }
  };
  </script>
  
  <style scoped>
  .v-card {
    max-width: 400px;
    background-color: #2c3e50 !important;
  }
  
  .v-card-title {
    color: white !important;
  }
  
  .v-btn {
    text-transform: none;
    font-size: 16px;
  }
  </style>
  