<template>
    <div>
      <h1>Testing Error Boundary</h1>
      <ErrorBoundary>
        <button @click="throwError">Throw Error</button>
      </ErrorBoundary>
    </div>
  </template>
  
  <script>
  import ErrorBoundary from '../components/ErrorBoundary.vue';
  
  export default {
    components: {
      ErrorBoundary
    },
    methods: {
      throwError() {
        throw new Error('Intentional error for testing');
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #2c3e50;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  
  button:focus {
    outline: none;
  }
  
  </style>
  