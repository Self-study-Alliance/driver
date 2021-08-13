import Vue from "vue";
import Router from "vue-router";

const Home = () => import("../views/Home");
const Message = () => import("../views/Message");
const Work = () => import("../views/Work");
const Profile = () => import("../views/Profile");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/Message",
      component: Message,
    },
    {
      path: "/Work",
      component: Work,
    },
    {
      path: "/profile",
      component: Profile,
    },
  ],
  mode: "history",
});
