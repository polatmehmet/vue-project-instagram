<template>
  <div class="home">
    <div class="teimeline">
      <CustomText class="a1" tag="p" size="normal">Merhaba Dünya</CustomText>
      <CustomText class="a2" tag="p" size="small">Merhaba Dünya</CustomText>
      <CustomText class="a3" tag="p" size="xsmall">Merhaba Dünya</CustomText>
      <CustomText class="a4" tag="h1" size="xxsmall">Merhaba Dünya</CustomText>
      <IconHome />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate culpa sit nam error, nostrum dignissimos quisquam voluptatem? Veritatis nihil molestiae in optio? Eveniet, laboriosam iste quaerat autem rerum modi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate culpa sit nam error, nostrum dignissimos quisquam voluptatem? Veritatis nihil molestiae in optio? Eveniet, laboriosam iste quaerat autem rerum modi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate culpa sit nam error, nostrum dignissimos quisquam voluptatem? Veritatis nihil molestiae in optio? Eveniet, laboriosam iste quaerat autem rerum modi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate culpa sit nam error, nostrum dignissimos quisquam voluptatem? Veritatis nihil molestiae in optio? Eveniet, laboriosam iste quaerat autem rerum modi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate culpa sit nam error, nostrum dignissimos quisquam voluptatem? Veritatis nihil molestiae in optio? Eveniet, laboriosam iste quaerat autem rerum modi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate culpa sit nam error, nostrum dignissimos quisquam voluptatem? Veritatis nihil molestiae in optio? Eveniet, laboriosam iste quaerat autem rerum modi????</p>
    </div>
    <div class="sidebar">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate culpa sit nam error, nostrum dignissimos quisquam voluptatem? Veritatis nihil molestiae in optio? Eveniet, laboriosam iste quaerat autem rerum modi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate culpa sit nam error, nostrum dignissimos quisquam voluptatem? Veritatis nihil molestiae in optio? Eveniet, laboriosam iste quaerat autem rerum modi????</p>
    </div>
    
  </div>
</template>

<script>
import CustomText from '@/components/CustomText';
import IconHome from '@/icons/home.svg';

export default {
  name: "Home",
  components: {
    CustomText,
    IconHome,
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