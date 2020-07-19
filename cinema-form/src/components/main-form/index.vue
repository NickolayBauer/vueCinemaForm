<template>
  <div class="main-form">
    {{ formData }}
  </div>
</template>
<script>
export default {
  props: ["formData"],
};
</script>
<style lang="scss">
.main-form {
  background: #ffffff;
  border-radius: 8px;
  height: 400px;
  width: 1020px;
  margin: auto;
  margin-top: 100px;
}
</style>
