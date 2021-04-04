<template>
  <div class="home">
    <div class="teimeline">
      <Post />
      <br>
      <br>
      <br>
      <br>
    </div>
    <div class="sidebar">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate culpa sit nam error, nostrum dignissimos quisquam voluptatem? Veritatis nihil molestiae in optio? Eveniet, laboriosam iste quaerat autem rerum modi?</p>
      
    </div>
    
  </div>
</template>

<script>
import Post from '@/components/Post';

export default {
  name: "Home",
  components: {
    Post,
  },
};
</script>
<style scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;
  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}
.sidebar{
  display: none;
  @media (--t) {
    display: block;
  }
}
</style>