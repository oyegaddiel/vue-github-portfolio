<template>
    <div class="repo-details">
      <h2>{{ repoDetails.name }}</h2>
      <p>Description: {{ repoDetails.description || 'No description' }}</p>
      <div>
        <p>Owner: {{ repoDetails.owner.login }}</p>
        <p>Language: {{ repoDetails.language || 'Unknown' }}</p>
      </div>
      <div>
        <p>Last Updated: {{ new Date(repoDetails.updated_at).toLocaleString() }}</p>
        <p>Stars: {{ repoDetails.stargazers_count }}</p>
      </div>
      <div>
        <p>Forks: {{ repoDetails.forks }}</p>
        <p>Open Issues: {{ repoDetails.open_issues_count }}</p>
      </div>
      <div v-if="repoDetails.license">
        <p>License: {{ repoDetails.license.name }}</p>
      </div>
      <button @click="goBack">Home</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        repoDetails: null
      };
    },
    methods: {
      fetchRepoDetails() {
        const repoName = this.$route.params.repoName;
        fetch(`https://api.github.com/repos/oyegaddiel/${repoName}`)
          .then(response => response.json())
          .then(data => (this.repoDetails = data))
          .catch(error => console.error('Error fetching repository details:', error));
      },
      goBack() {
        this.$router.go(-1); // Go back to previous page
      }
    },
    mounted() {
      this.fetchRepoDetails();
    }
  };
  </script>
  
  <style scoped>
  .repo-details {
    text-align: center;
    max-width: 450px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    background-color: #f9f9f9;
  }
  
  .repo-details h2 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #2c3e50;
  }
  
  .repo-details p {
    font-size: 16px;
    margin-bottom: 10px;
    color: #2c3e50;
  }
  
  .repo-details div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .repo-details button {
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
    margin-top: 20px;
  }
  </style>
  