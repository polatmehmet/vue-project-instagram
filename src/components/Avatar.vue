<template>
  <div class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size">
  </div>
</template>

<script>
  export default {
    name: "Avatar",
    props: {
      src: {
        type: String,
        default: 'https://www.fillmurray.com/150/150',
      },
      alt: {
        type: String,
      },
      size: {
        type: Number,
        default: 150,
      }
    }
  }
</script>

<style lang="scss" scoped>
 .avatar {
    padding: 2px;
    border-radius: 999px;
    display: inline-flex;
    background: rgb(184,63,140);
    background: linear-gradient(219deg, rgba(184,63,140,1) 0%, rgba(237,158,90,1) 100%);
   img {
     border: 3px solid white;
     border-radius: inherit;
   }
 }
</style>