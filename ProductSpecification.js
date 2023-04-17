<!-- Plantilla 64/100 ProductSpecification VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Specification</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="spec in specifications" :key="spec.id">
          <td>{{ spec.name }}</td>
          <td>{{ spec.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProductSpecificationsTable",
  props: {
    specifications: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.table-container {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #e8e8e8;
}

thead {
  background-color: #f8f8f8;
}

th,
td {
  padding: 10px;
  text-align: left;
  border: 1px solid #e8e8e8;
}
</style>
