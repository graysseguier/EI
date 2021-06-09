<template>
  <table>
    <thead>
      <th>Email</th>
      <th>First name</th>
      <th>Lirst name</th>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.email">
        <td>{{ user.email }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "UsersTable",
  props: {
    users: Array,
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #000000;
  padding: 10px;
}
</style>
