import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://locker.tnl-dev-tuneiyjkkn.tnl.al8st.me/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
