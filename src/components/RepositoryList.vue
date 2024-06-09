<template>
    <div class="repository-list">
      <div v-if="userData" class="user-info">
        <img :src="userData.avatar_url" alt="Profile" class="avatar" />
        <p class="name">{{ userData.name }}</p>
        <p class="bio">{{ userData.bio }}</p>
      </div>
      <div class="search-bar">
        <input v-model="searchQuery" placeholder="Search repositories..." />
      </div>
      <ul v-if="searchQuery">
        <li v-for="repo in filteredRepositories" :key="repo.id">
          <router-link :to="'/repo/' + repo.name">{{ repo.name }}</router-link>
        </li>
      </ul>
      <div v-else>
        <div v-if="repositories.length > 0">
          <div class="repo-item">
            <router-link :to="'/repo/' + repositories[currentIndex].name">
              {{ repositories[currentIndex].name }}
            </router-link>
          </div>
          <div class="pagination">
            <button @click="handlePrevious" :disabled="currentIndex === 0">Previous</button>
            <button @click="handleNext" :disabled="currentIndex === repositories.length - 1">Next</button>
          </div>
        </div>
        <div v-else>Loading...</div>
      </div>
      <div class="create-repo">
        <button @click="isNewRepoModalOpen = true">Create New Repository</button>
      </div>
      <NewRepoModal
        :isOpen="isNewRepoModalOpen"
        @close="isNewRepoModalOpen = false"
        @create="createNewRepo"
      />
    </div>
  </template>
  
  <script>
  import NewRepoModal from './NewRepoModal.vue';
  
  export default {
    components: {
      NewRepoModal,
    },
    data() {
      return {
        repositories: [],
        currentIndex: 0,
        isNewRepoModalOpen: false,
        searchQuery: '',
        userData: null,
      };
    },
    computed: {
      filteredRepositories() {
        return this.repositories.filter((repo) =>
          repo.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    created() {
      this.fetchRepositories();
      this.fetchUserData();
    },
    methods: {
      fetchRepositories() {
        fetch('https://api.github.com/users/oyegaddiel/repos')
          .then((response) => response.json())
          .then((data) => (this.repositories = data))
          .catch((error) => console.error('Error fetching repositories:', error));
      },
      fetchUserData() {
        fetch('https://api.github.com/users/oyegaddiel')
          .then((response) => response.json())
          .then((data) => (this.userData = data))
          .catch((error) => console.error('Error fetching user data:', error));
      },
      handlePrevious() {
        if (this.currentIndex > 0) {
          this.currentIndex -= 1;
        }
      },
      handleNext() {
        if (this.currentIndex < this.repositories.length - 1) {
          this.currentIndex += 1;
        }
      },
      createNewRepo(repoDetails) {
        console.log('New repository created:', repoDetails);
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .repository-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    background-color: #f9f9f9;
  }
  .user-info {
    text-align: center;
    margin-bottom: 20px;
  }
  .avatar {
    width: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  .name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .bio {
    font-size: 16px;
    color: #777;
  }
  .search-bar {
    display: flex;
    margin-bottom: 20px;
    text-align: center;
  }
  .search-bar input {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  .repo-item {
    margin: 10px 0;
    font-size: 18px;
    text-decoration: none;
  }
  .pagination {
    text-align: center;
    margin-top: 20px;
  }
  .pagination button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    background-color: #2198c3;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
  .pagination button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  .create-repo {
    text-align: center;
    margin-top: 20px;
  }
  .create-repo button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color:#2198c3;
    color: white;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  .create-repo button:hover {
    background-color: #2198c3;
  }
  </style>
  