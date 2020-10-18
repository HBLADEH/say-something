<template>
  <div id="app">
    <NavBar></NavBar>
    <Index></Index>
  </div>
</template>

<script>
import NavBar from './components/index/NavBar'
import Index from './pages/Index'
export default {
  name: 'App',
  components: {
    NavBar,
    Index
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  background-color: #f6f6f6;
}
</style>
