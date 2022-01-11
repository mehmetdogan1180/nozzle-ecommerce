<template>
  <div class="basket">
    <BasketItem
      class="item"
      v-for="(item, index) in items"
      :key="index"
      v-bind="item"
      @updateQty="updateQty(item.id, $event)"
      @remove="remove(item.id)"
    />
    <div class="actions">
      <div class="total">
        <label for=""> Total: </label>
        <span class="price"> $ {{ total }} </span>
      </div>
      <button type="button" @click="complete">Complete Purchase</button>
    </div>
  </div>
</template>

<script>
import BasketItem from "@/components/BasketItem";
import Products from "@/storage/Products.js";

export default {
  name: "ComponentsBasket",
  components: {
    BasketItem,
  },
  computed: {
    items() {
      return this.$store.state.basket.items.map((i) => {
        const product = Products.find((p) => i.id === p.id);
        return {
          id: i.id,
          title: product.title,
          image: product.image,
          description: product.description,
          quantity: i.quantity,
          price: product.price,
        };
      });
    },
    total() {
      return this.items.reduce((prev, curr) => {
        return prev + curr.price * curr.quantity;
      }, 0);
    },
  },
  data() {
    return {};
  },
  methods: {
    complete() {
      this.$store.dispatch("basket/clear");
      this.$emit("success");
    },
    updateQty(productId, qty) {
      this.$store.dispatch("basket/setItem", {
        id: productId,
        quantity: +qty,
      });
    },
    remove(productId) {
      this.$store.dispatch("basket/removeItem", {
        id: productId,
      });
    },
  },
};
</script>

<style lang="scss">
.basket {
  .item {
    margin-bottom: 30px;
  }
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
