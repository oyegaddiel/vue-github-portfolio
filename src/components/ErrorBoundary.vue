<template>
    <div>
      <slot v-if="!hasError"></slot>
      <div v-else style="text-align: center; color: red;">
        <h2>Something went wrong.</h2>
        <p>Please try again later.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hasError: false,
      };
    },
    errorCaptured(err, vm, info) {
      console.error('Error caught by ErrorBoundary:', err);
      console.error('Error Info:', info);
      this.hasError = true;
      return false;
    },
  };
  </script>
  