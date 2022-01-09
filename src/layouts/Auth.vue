<template>
  <div class="flex-container">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "LayoutsAuth",
};
</script>
<style lang="scss">
.flex-container {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
