<template>
  <div class="basket">
    <BasketItem v-for="(item, index) in items" :key="index" v-bind="item" />
    <div class="actions">
      <div class="total">
        <label for=""> Total: </label>
        <span class="price"> $ 70.0 </span>
      </div>
      <button type="button">Complete Purchase</button>
    </div>
  </div>
</template>

<script>
import BasketItem from "@/components/BasketItem";
export default {
  name: "ComponentsBasket",
  components: {
    BasketItem,
  },
  data() {
    return {
      items: [
        {
          title: "Product 1",
          image:
            "https://platform-api.api.uizard.io/api/assets/compilers/images/placeholder-01.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          quantity: 2,
          price: 70.01,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.basket {
  .actions {
    margin-top: 50px;
    text-align: center;
    .total {
      margin-bottom: 20px;
    }
    button {
      display: inline-block;
      outline: none;
      width: 214px;
      height: 33px;
      color: rgb(255, 255, 255);
      background-color: rgb(59, 137, 5);
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
