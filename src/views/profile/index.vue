<template>
  <div class="home">
    <h1>Profile</h1>

    <div id="nav">
      <router-link to="/profile">Post</router-link> |
      <router-link to="/profile/save">Save</router-link> |
      <router-link to="/profile/igtv">IGTV</router-link> |
      <router-link to="/profile/tag">TAgs</router-link> 
    </div>
    <router-view />
  </div>
</template>

<script>
// import CustomText from '@/components/CustomText';
// import IconHome from '@/icons/home.svg';

export default {
  name: "ProfileTag",
  // components: {
  //   CustomText,
  //   IconHome,
  // },
};
</script>
<style scoped>
.a1{
  color: rgb(var(--a72));
}
.a2{
  color: rgb(var(--b3f));
}
.a3{
  color: rgb(var(--ba8));
}
</style>