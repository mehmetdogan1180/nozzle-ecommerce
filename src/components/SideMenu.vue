<template>
  <div class="side-menu">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <a href="#" @click.prevent="item.action">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CompnonentsSideMenu",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.side-menu {
  width: 161px;
  ul {
    list-style: none;
    li {
      margin-top: 20px;
      a {
        text-decoration: none;
        color: rgb(3, 3, 3);
        font-size: 14px;
        display: block;
      }
    }
  }
}
</style>
