<template>
  <div class="home">
    <div class="teimeline">
      <Avatar :size="120" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate culpa sit nam error, nostrum dignissimos quisquam voluptatem? Veritatis nihil molestiae in optio? Eveniet, laboriosam iste quaerat autem rerum modi?</p>
    </div>
    <div class="sidebar">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate culpa sit nam error, nostrum dignissimos quisquam voluptatem? Veritatis nihil molestiae in optio? Eveniet, laboriosam iste quaerat autem rerum modi?</p>
      
    </div>
    
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';

export default {
  name: "Home",
  components: {
    Avatar
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