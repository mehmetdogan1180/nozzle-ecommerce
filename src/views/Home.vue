<template>
  <TopNavigation :items="topNavigationItems" />
  <div class="container">
    <SideMenu :items="sideMenuItems" />
  </div>
</template>

<script>
import TopNavigation from "@/components/TopNavigation";
import SideMenu from "@/components/SideMenu";

export default {
  name: "Home",
  components: {
    TopNavigation,
    SideMenu,
  },
  data() {
    return {
      topNavigationItems: [
        {
          label: "Add Category",
          action: () => {},
        },
        {
          label: "Add Product",
          action: () => {},
        },
        {
          icon: "arrow-left",
          action: () => {},
        },
        {
          icon: "shopping-basket",
          action: () => {},
        },
      ],
      sideMenuItems: [
        {
          label: "Category 1",
          action: () => {},
        },
        {
          label: "Category 2",
          action: () => {},
        },
        {
          label: "Category 3",
          action: () => {},
        },
        {
          label: "Category 4",
          action: () => {},
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.container {
  padding: 10px 60px;
}
</style>
