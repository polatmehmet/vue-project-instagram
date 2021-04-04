<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="logo">
        InsTagRam
      </router-link>
      <form class="search">
        <input type="text" placeholder="Ara.." />
      </form>
      <nav class="navigation">
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'Home'" />
          <IconHome v-else/>
        </router-link>
        <router-link to="/direct">
          <IconDirectFill v-if="$route.name === 'Direct'"/>
          <IconDirect v-else/>
        </router-link>
        <router-link to="/explore">
          <IconExploreFill v-if="$route.name === 'Explore'"/>
          <IconExplore v-else/>
        </router-link>
        <router-link to="/profile">Profile</router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
  import IconHome from '@/icons/home.svg';
  import IconHomeFill from '@/icons/home-fill.svg';
  import IconDirect from '@/icons/direct.svg';
  import IconDirectFill from '@/icons/direct-fill.svg';
  import IconExplore from '@/icons/explore.svg';
  import IconExploreFill from '@/icons/explore-fill.svg';
  import Container from '@/components/Container';

  export default {
    name: 'MasterHeader',
    components: {
      IconHome,
      IconHomeFill,
      IconExplore,
      IconExploreFill,
      IconDirect,
      IconDirectFill,
      Container,
    }
  }
</script>

<style lang="scss" scoped>
.header{
  z-index: 90;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid rgb(var(--b6a));

}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  @media (--t) {
    height: var(--header-height);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
}
.logo{
  font-size: 1.6rem;
  font-weight: bold;
}
.search{
  display: none;
  @media (--t) {
    text-align: center;
    display: block;
    input{
      border: 1px solid rgb(var(--b6a));
      background-color: rgb(var(--b3f));
      border-radius: 4px;
      width: 225px;
      height: 28px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
.navigation{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid rgb(var(--b6a));
  background-color: white;

  @media(--t){
    position: static;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: none;
     a{
       margin-left: 20px;
     }
  }
}
</style>