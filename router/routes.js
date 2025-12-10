import Home from "../src/components/pages/Home.vue";
import Contact from "../src/components/pages/Contact.vue";
import Tours from "../src/components/pages/Tours.vue";
import About from "../src/components/pages/About.vue";
import Package from "../src/components/pages/Package.vue";
const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Contact",
    path: "/contact",
    component: Contact,
  },
  {
    name: "Tours",
    path: "/tours",
    component: Tours,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "Package",
    path: "/package/:title",
    component: Package,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    redirect: {
      name: "Home",
    },
  },
];

export default routes;
