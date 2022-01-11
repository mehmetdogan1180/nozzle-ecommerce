<template>
  <transition name="modal" v-if="showModal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" :class="size">
          <div class="modal-header">
            <span v-if="!hideClose" class="close" @click="showModal = false">
              &times;
            </span>
            <slot name="header"></slot>
          </div>

          <div class="modal-body">
            <slot />
          </div>
        </div>
        <div class="model-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ComponentsModal",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    hideClose: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      defalut: null,
    },
  },
  computed: {
    showModal: {
      get() {
        return this.modelValue;
      },
      set(v) {
        this.$emit("update:modelValue", v);
      },
    },
  },
};
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.3s ease;
  background-color: #fff;
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    background-color: rgb(207 207 207);
    padding: 0px;
    border-radius: 25px;
    border: 0px;

    width: 541px;
    height: 280px;
    margin: 0px auto;
    padding: 20px 30px;
    transition: all 0.3s ease;
    position: relative;
    &.lg {
      width: 1071px;
      height: 482px;
    }
    .modal-header {
      text-align: center;
      margin: 30px 0;
      .close {
        padding: 5px;
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 20px;
        font-weight: bold;
        font-size: 30px;
      }
    }
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
