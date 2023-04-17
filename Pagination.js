<!-- Plantilla 17/100: Paginación VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="pagination">
    <button class="pagination-button" :disabled="currentPage <= 1" @click="currentPage--">
      <i class="fa fa-angle-left"></i>
    </button>
    <button class="pagination-button" v-for="page in pages" :key="page"
      :class="{ active: page === currentPage }" @click="currentPage = page">
      {{ page }}
    </button>
    <button class="pagination-button" :disabled="currentPage >= pageCount" @click="currentPage++">
      <i class="fa fa-angle-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    initialPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentPage: this.initialPage,
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalItems / this.pageSize)
    },
    pages() {
      const pages = []
      for (let i = 1; i <= this.pageCount; i++) {
        pages.push(i)
      }
      return pages
    },
  },
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination-button {
  margin: 0 4px;
  border: none;
  background-color: #fff;
  color: #2196f3;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-button.active {
  background-color: #2196f3;
  color: #fff;
}

.pagination-button:disabled {
  cursor: default;
  opacity: 0.5;
}

.fa-angle-left,
.fa-angle-right {
  font-size: 20px;
}
</style>
