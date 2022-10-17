import { createApp } from "vue";

import App from "./App.vue";
import ContactDetails from "./ContactDetails.vue";

var app = createApp(App);

app.component("contact-details", ContactDetails);
app.mount("#app");
