<template>
  <div class="basket-item">
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
    </div>
    <div class="quantity">
      <label for="" class="quantity-label"> Qty </label>
      <input
        type="text"
        @change="$emit('updateQty', $event.target.value)"
        :value="quantity"
      />
      <button type="button" @click="$emit('remove')">&times;</button>
      <label for="" class="quantity-price">
        Total: $ {{ quantity * price }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentsBasketItem",
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
    quantity: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.basket-item {
  display: flex;
  align-items: center;
  .image {
    margin-right: 20px;
    img {
      width: 137px;
      height: 102px;
      display: block;
    }
  }
  .details {
    width: 253px;
    margin-right: 100px;
    .title {
      color: rgb(3, 3, 3);
      font-size: 14px;
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      color: rgb(3, 3, 3);
      line-height: 1;
    }
  }
  .quantity {
    display: flex;
    align-items: flex-end;
    .quantity-label {
      color: rgb(3, 3, 3);
      margin-right: 20px;
    }
    input {
      display: block;
      outline: none;
      width: 80px;
      height: 41px;
      color: rgb(3, 3, 3);
      background-color: rgb(238, 238, 238);
      font-size: 14px;
      letter-spacing: 0px;
      line-height: 41px;
      padding: 10px;
      border-radius: 0px;
      border: 0px;
      margin-right: 10px;
    }
    button {
      display: block;
      text-align: center;
      width: 42px;
      height: 39px;
      font-size: 20px;
      color: rgb(3, 3, 3);
      background-color: rgb(163, 70, 70);
      border-radius: 5px;
      border: 0px;
      margin-right: 20px;
    }
    .quantity-price {
      color: rgb(3, 3, 3);
    }
  }
}
</style>
