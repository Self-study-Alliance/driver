import Vue from "vue";
import Router from "vue-router";

const Home = () => import("../views/Home");
const Message = () => import("../views/Message");
const Work = () => import("../views/Work");
const Profile = () => import("../views/Profile");
const WorkQuery = () => import("../views/workviews/WorkQuery.vue");
const WorkReceipt = () => import("../views/workviews/WorkReceipt");
const WorkTodo = () => import("../views/workviews/WorkTodo");

Vue.use(Router);

let routes = [
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
        path: "WorkQuery",
        component: WorkQuery,
      },
      {
        path: "workreceipt",
        component: WorkReceipt,
      },
      {
        path: "worktodo",
        component: WorkTodo,
      },
    ],
  },
  {
    path: "/profile",
    component: Profile,
  },
];

function handleRoutes(routes) {
  routes.forEach(item => {
    if (item.children) {
      let f = item.path;
      item.children.forEach(c => {
        c.path = `${f}/${c.path}`;
        routes[routes.length] = c;
      });
      delete item.children;
    }
  });
  return routes;
}

const finalRoutes = handleRoutes(routes);
console.log("finalRoutes", finalRoutes);

export default new Router({
  routes: finalRoutes,
  mode: "history",
});
