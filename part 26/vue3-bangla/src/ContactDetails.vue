<template>
  <div class="contact-details">
    <h1 class="contact-heading">Contact Details</h1>
    <p><strong>Name: </strong>{{ name }}</p>
    <p><strong>Website: </strong>https://google.com</p>
    <p><strong>Address: </strong>Khulna Bangladesh</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Motiur",
    };
  },
};
</script>

<style>
.contact-details {
  border: 1px solid gray;
  margin: 10px;
  padding: 10px;
}
.contact-heading {
  color: blue;
}
</style>
