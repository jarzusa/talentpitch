<template>
  <div class="parallax-container">
    <el-image
      class="parallax-image"
      src="../../portada.png"
      fit="fill"
    />
  </div>
</template>
<style scoped>
.parallax-container {
  position: relative;
  overflow: hidden;
  height: 200px; /* Ajusta la altura según sea necesario */
}
.parallax-image {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-out;
}
</style>
