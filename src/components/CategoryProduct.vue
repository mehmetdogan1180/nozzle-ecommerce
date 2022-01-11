<template>
  <div class="category-product box">
    <div class="image">
      <img :src="image" alt="" />
    </div>
    <div class="details">
      <div class="title">
        {{ title }}
      </div>
      <p>
        {{ description }}
      </p>
      <span class="price"> {{ price }} $ </span>
      <button @click="addBasket" type="button">Add Basket</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentsCategoryProduct",
  props: {
    image: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
    id: {
      type: Number,
      default: null,
    },
  },
  methods: {
    addBasket() {
      this.$store.dispatch("basket/addItem", { id: this.id });
      this.$notify("Added Basket");
    },
  },
};
</script>

<style lang="scss">
.category-product {
  .image {
    margin-right: 20px;
    img {
      width: 150px;
      height: 159px;
      display: block;
    }
  }
  .details {
    width: 340px;
    .title {
      color: rgb(3, 3, 3);
      font-size: 20px;
      margin-bottom: 30px;
    }
    p {
      color: rgb(3, 3, 3);
      line-height: 2;
    }
    button {
      float: right;
      display: block;
      box-sizing: border-box;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      outline: none;
      width: 240px;
      height: 46px;
      min-height: 33px;
      min-width: 40px;
      color: rgb(255, 255, 255);
      background-color: rgb(3, 3, 3);
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 1px;
      text-align: center;
      text-transform: uppercase;
      line-height: 13px;
      padding: 0px;
      border-radius: 0px;
      border: 0px;
    }
  }
}
</style>
