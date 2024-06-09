<template>
  <div class="repo-details">
    <p><strong>Repository Name:</strong> {{ repoDetails.name }}</p>
    <p><strong>Description:</strong> {{ repoDetails.description }}</p>
    <p><strong>Language:</strong> {{ repoDetails.language }}</p>
    <p><strong>Owner:</strong> {{ repoDetails.owner }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repoDetails: {
        name: 'Repository Name',
        description: 'Description of the repository',
        language: 'Programming Language',
        owner: 'Owner of the repository',
      },
    };
  },
};
</script>

<style scoped>
.repo-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}
</style>
