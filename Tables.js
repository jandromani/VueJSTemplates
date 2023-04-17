<!-- Plantilla 10/100: Tablas VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="table-wrapper">
    <table :class="tableClasses">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="(column, columnIndex) in columns" :key="columnIndex">
            {{ row[column.property] }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="!rows.length" class="empty-message">{{ emptyMessage }}</div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true,
      validator: (columns) =>
        columns.every((column) =>
          typeof column === 'object' &&
          column.hasOwnProperty('label') &&
          column.hasOwnProperty('property'),
        ),
    },
    rows: {
      type: Array,
      required: true,
      default: () => [],
    },
    striped: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    responsive: {
      type: Boolean,
      default: false,
    },
    emptyMessage: {
      type: String,
      default: 'No data available',
    },
  },
  computed: {
    tableClasses() {
      return [
        'table',
        this.striped ? 'table-striped' : '',
        this.hover ? 'table-hover' : '',
        this.bordered ? 'table-bordered' : '',
        this.responsive ? 'table-responsive' : '',
      ]
    },
  },
}
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
}

.table th,
.table td {
  padding: 8px;
  text-align: left;
  vertical-align: middle;
  border-top: 1px solid #ccc;
}

.table th {
  font-weight: bold;
}

.table-striped tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

.table-hover tbody tr:hover {
  background-color: #f5f5f5;
}

.table-bordered {
  border: 1px solid #ccc;
}

.table-responsive {
  overflow-x: auto;
}
</style>
