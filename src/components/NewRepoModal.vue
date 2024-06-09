<template>
    <div v-if="isOpen" class="modal-overlay">
      <div class="modal-content">
        <h2>Create New Repository</h2>
        <form @submit.prevent="handleSubmit">
          <div v-for="(value, key) in repoDetails" :key="key" class="form-group">
            <label :for="key">{{ key }}:</label>
            <input v-model="repoDetails[key]" :id="key" required />
          </div>
          <div class="form-actions">
            <button type="submit">Create</button>
            <button type="button" @click="onClose">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        required: true,
      },
      onClose: {
        type: Function,
        required: true,
      },
      onCreate: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {
        repoDetails: {
          name: '',
          description: '',
          language: '',
          owner: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        this.$emit('create', this.repoDetails);
        this.onClose();
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .modal-content {
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    max-width: 400px;
    width: 90%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
  .form-group {
    margin-bottom: 20px;
  }
  .form-actions {
    text-align: center;
  }
  </style>
  