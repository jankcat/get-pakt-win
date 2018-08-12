<template>
  <div class="scroller">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'Scroller',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.scroller {
  height: 50px;	
  width: 40%;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url("../assets/greenbg.png");
}
.scroller span {
  display: inline-block;
  padding-left: 100%;  /* show the scroller just outside the paragraph */
  animation: scroller 5s linear infinite;
  font-size: 3em;
  color: red;
}
@keyframes scroller {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}
</style>
