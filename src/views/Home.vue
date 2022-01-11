<template>
  <SideMenu :items="sideMenuItems" />
  <div class="content">
    <div class="products">
      <CategoryProduct
        v-for="(product, index) in products"
        :key="index"
        v-bind="product"
      />
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import CategoryProduct from "@/components/CategoryProduct";

export default {
  name: "Home",
  components: {
    SideMenu,
    CategoryProduct,
  },
  data() {
    return {
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
      products: [
        {
          image:
            "https://platform-api.api.uizard.io/api/assets/compilers/images/placeholder-01.jpg",
          title: "Product 1",
          description:
            "Lorem ipsum dolor sit amet , consectetur adipisicing Elit , sed do eiusmod tempor incididunt ut labore et",
          price: 40,
        },
        {
          image:
            "https://platform-api.api.uizard.io/api/assets/compilers/images/placeholder-01.jpg",
          title: "Product 2",
          description:
            "Lorem ipsum dolor sit amet , consectetur adipisicing Elit , sed do eiusmod tempor incididunt ut labore et",
          price: 35,
        },
        {
          image:
            "https://platform-api.api.uizard.io/api/assets/compilers/images/placeholder-01.jpg",
          title: "Product 3",
          description:
            "Lorem ipsum dolor sit amet , consectetur adipisicing Elit , sed do eiusmod tempor incididunt ut labore et",
          price: 27.45,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
.content {
  width: 100%;
  .products > div {
    margin-bottom: 30px;
  }
}
</style>
