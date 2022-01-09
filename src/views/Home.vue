<template>
  <TopNavigation :items="topNavigationItems" />
</template>

<script>
import TopNavigation from "@/components/TopNavigation";

export default {
  name: "Home",
  components: {
    TopNavigation,
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
    };
  },
};
</script>
