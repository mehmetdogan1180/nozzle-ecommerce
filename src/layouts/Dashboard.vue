<template>
  <TopNavigation :items="topNavigationItems" />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import TopNavigation from "@/components/TopNavigation";

export default {
  name: "LayoutsDashboard",
  components: {
    TopNavigation,
  },
  data() {
    return {
      topNavigationItems: [
        {
          label: "Add Category",
          action: () => {
            this.$router.push({
              name: "AddCategory",
            });
          },
        },
        {
          label: "Add Product",
          action: () => {
            this.$router.push({
              name: "AddProduct",
            });
          },
        },
        {
          icon: "arrow-left",
          action: () => {
            this.$store.dispatch("auth/logout");
            this.$router.push({ name: "AuthLogin" });
          },
        },
        {
          icon: "shopping-basket",
          action: () => {
            this.$router.push({
              name: "Basket",
            });
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.container {
  padding: 20px 140px 0 80px;
  display: flex;
}
</style>
