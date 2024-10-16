<template>
  <v-container class="d-flex align-center justify-center" fluid>
    <v-card
      class="elevation-12 pa-5"
      width="400"
      style="background-color: #2c3e50; border-radius: 15px;"
    >
      <v-card-title class="text-h5 white--text text-center pb-4">Welcome Back</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            prepend-icon="mdi-email"
            color="white"
            outlined
            dense
            class="white--text"
            hide-details
            style="color: white"
            :style="{ '--v-input-control-color': '#fff' }"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            prepend-icon="mdi-lock"
            color="white"
            outlined
            dense
            class="white--text"
            hide-details
            style="color: white"
            :style="{ '--v-input-control-color': '#fff' }"
          ></v-text-field>

          <v-btn
            class="mb-2 mt-4"
            color="primary"
            block
            height="50"
            style="border-radius: 25px; font-weight: bold;"
            @click="handleSignUp"
          >
            Sign Up
          </v-btn>
          <v-btn
            class="mb-2"
            color="secondary"
            block
            height="50"
            style="border-radius: 25px; font-weight: bold;"
            @click="handleLogin"
          >
            Log In
          </v-btn>
          <v-btn
            class="mt-4"
            color="error"
            block
            height="50"
            style="border-radius: 25px; font-weight: bold;"
            @click="handleLogout"
          >
            Log Out
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signUp, login, logout } from '../supabase';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleSignUp = async () => {
  const { data, error } = await signUp(email.value, password.value);
  if (error) {
    alert(`Sign Up Error: ${error.message}`);
  } else {
    alert('Sign Up Successful');
  }
};

const handleLogin = async () => {
  const { data, error } = await login(email.value, password.value);
  if (error) {
    alert(`Login Error: ${error.message}`);
  } else {
    alert('Login Successful');
    router.push('/welcome'); // Redirect to Welcome page
  }
};

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

.v-text-field input {
  color: white !important;
}

.v-text-field label {
  color: white !important;
}
</style>
