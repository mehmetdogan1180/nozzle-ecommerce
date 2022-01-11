<template>
  <notifications position="top center" />
  <router-view />
</template>

<style lang="scss">
body {
  background-color: #fff;
  margin: 0;
  padding: 0;
  color: rgb(3, 3, 3);
  font-family: Gelion, Helvetica, "Helvetica Neue", Arial;
  letter-spacing: 0px;
  text-transform: none;
  font-size: 14px;
  line-height: 16px;
}
body,
html,
#app {
  height: 100%;
}
* {
  box-sizing: border-box;
}
input {
  border: 0;
}
.box {
  padding: 20px;
  border-radius: 25px;
  display: flex;
  align-items: flex-start;
  background-color: #eceff0;
}
</style>
