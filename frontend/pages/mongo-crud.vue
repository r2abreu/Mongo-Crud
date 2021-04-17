<template>
  <div>
    <h1>MongoCrud</h1>
  </div>
</template>

<script>
export default {
  async fetch() {
    const response = await this.$axios.get(
      "http://localhost:3001/api/v1/customers"
    );
    console.log(response);
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #f00;
}
</style>
