<template>
  <div class="basket-page">
    <div class="header"></div>
    <div class="container">
      <Basket />
    </div>
  </div>
  <Modal v-model="showModal" hideClose size="lg">
    <div class="copmlete-modal">
      <div class="check-icon">
        <fa class="icon" icon="check"></fa>
      </div>
      <span>Purchase Success</span>
    </div>
    <template #footer>
      <div class="go-back">
        <button type="button">&lt;- GO BACK</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
import Basket from "@/components/Basket";
export default {
  name: "ViewsBasket",
  components: {
    Basket,
    Modal,
  },
  data() {
    return {
      showModal: true,
    };
  },
};
</script>

<style lang="scss">
.basket-page {
  .header {
    height: 61px;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(193, 193, 193);
  }
  .container {
    padding: 150px 0 0 150px;
  }
}
.copmlete-modal {
  text-align: center;
  padding-top: 80px;
  .check-icon {
    position: relative;
    display: inline-block;
    text-align: center;
    width: 150px;
    height: 150px;
    font-size: 120px;
    color: rgb(3, 3, 3);
    background-color: rgb(59, 137, 5);
    border-radius: 11px;
    border: 0px;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 40px;
  }
}
.go-back {
  margin-top: 20px;
  text-align: center;
  button {
    display: inline-block;
    outline: none;
    width: 120px;
    height: 33px;
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
</style>
