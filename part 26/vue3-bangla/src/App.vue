<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
  <contact-details></contact-details>
  <contact-details></contact-details>
  <contact-details></contact-details>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome",
    };
  },
};
</script>
