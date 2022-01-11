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
import Categories from "@/storage/Category.js";
import Products from "@/storage/Products.js";

export default {
  name: "Home",
  components: {
    SideMenu,
    CategoryProduct,
  },
  created() {
    this.getCategories();
  },
  computed: {
    sideMenuItems() {
      return this.$store.getters["category/items"].map((i) => ({
        label: i.name,
        action: () => {
          this.selectedCategoryId = i.id;
        },
      }));
    },
    products() {
      if (!this.selectedCategoryId) return [];
      return this.$store.state.category.categories[this.selectedCategoryId]
        .products;
    },
  },
  watch: {
    selectedCategoryId: {
      immediate: true,
      handler(id) {
        if (id) this.getProducts(id);
      },
    },
  },
  data() {
    return {
      selectedCategoryId: null,
    };
  },
  methods: {
    getCategories() {
      if (!this.$store.state.category.isLoaded) {
        this.$store.dispatch("category/addCategories", Categories);
        if (Categories.length) {
          this.selectedCategoryId = Categories[0].id;
        }
      } else {
        this.selectedCategoryId = this.$store.getters["category/items"][0]?.id;
      }
    },
    getProducts(categoryId) {
      if (!this.$store.state.category.categories[categoryId].productsIsLoaded) {
        const products = Products.filter((i) => i.category_id === categoryId);
        this.$store.dispatch("category/setProducts", { categoryId, products });
      }
    },
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
