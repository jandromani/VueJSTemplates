<!-- Plantilla 70/100 AnimatedCounter VueJS -->
<!-- Created by Alejandro Baratas, April 23 '-->

<template>
  <div class="counter">
    <h3>{{ counterValue }}</h3>
    <button @click="startCounter">Start</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counterValue: 0,
      counterInterval: null
    }
  },
  methods: {
    startCounter() {
      this.counterInterval = setInterval(() => {
        this.counterValue++
      }, 1000)
    }
  },
  destroyed() {
    clearInterval(this.counterInterval)
  }
}
</script>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  width: 200px;
  height: 200px;
}

h3 {
  font-size: 4rem;
  margin-bottom: 20px;
}
</style>
