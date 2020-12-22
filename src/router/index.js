import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Read from "../views/crud/Read.vue"
import Create from "../views/crud/Create.vue"
import Update from "../views/crud/Update.vue"
import Delete from "../views/crud/Delete.vue"

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "",
          name: "read",
          component: Read
        },
        {
          path: "create",
          name: "create",
          component: Create
        },
        {
          path: "update",
          name: "update",
          component: Update
        },
        {
          path: "delete",
          name: "delete",
          component: Delete
        }
      ]
    }
  ]
});