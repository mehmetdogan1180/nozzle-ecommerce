<template>
  <div class="top-navigation">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <a href="#" @click.prevent="item.action">
          <fa v-if="item.icon" :icon="item.icon" />
          <template v-else>
            {{ item.label }}
          </template>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ComponentsTopNavigation",
  data() {
    return {};
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.top-navigation {
  height: 91px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px;
  background-color: rgb(222 222 222);
  ul {
    list-style: none;
    li {
      float: left;
      margin-left: 20px;
      a {
        text-decoration: none;
        color: rgb(3, 3, 3);
        font-size: 20px;
        display: block;
      }
    }
  }
}
</style>
