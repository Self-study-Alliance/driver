import Vue from "vue";
import Router from "vue-router";

const Home = () => import("../views/Home");
const Message = () => import("../views/Message");
const Work = () => import("../views/Work");
const Profile = () => import("../views/Profile");
const WorkQuery = () => import("../views/workviews/WorkQuery.vue");
const WorkReceipt = () => import("../views/workviews/WorkReceipt.vue");
const WorkTodo = () => import("../views/workviews/WorkTodo.vue");

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
      path: "/work",
      component: Work,
      children: [
        {
          path: "/workquery",
          component: WorkQuery,
        },
        {
          path: "/workreceipt",
          component: WorkReceipt,
        },
        {
          path: "/worktodo",
          component: WorkTodo,
        },
      ],
    },
    {
      path: "/profile",
      component: Profile,
    },
  ],
  mode: "history",
});
