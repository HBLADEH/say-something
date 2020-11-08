<template>
  <div id="app">
    <NavBar></NavBar>
    <Index></Index>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
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
  height: auto;
  width: 100%;
  background-color: #f6f6f6;
}
</style>
