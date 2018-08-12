<template>
  <span class="jpgImg">
    <a :href="require(`../assets/${image}.png`)" target="_blank">
      <img :src="require(`../assets/${image}-256.jpg`)" :alt="image"/>
    </a>
  </span>
</template>

<script>
export default {
  name: 'JpgImg',
  props: {
    image: String,
  },
};
</script>
<style scoped>
img {
  border-width: 8px;
  border-style: outset;
  border-color: hotpink;
}
</style>
