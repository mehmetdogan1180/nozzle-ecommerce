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
  }
}
</style>
