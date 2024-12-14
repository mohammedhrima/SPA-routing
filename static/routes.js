import About from "./about/about.js";
import Home from "./home/home.js";
import User from "./user/user.js";

const app = document.getElementById("app");

const Routes = {
  "/home": Home,
  "/about": About,
  "/user": User,
};

function navigateTo(url) {
  history.pushState(null, null, url);
  renderRoute();
}

function renderRoute() {
  const path = window.location.pathname;
  const route = Routes[path] || Routes["/home"];
  app.innerHTML = route();
}

document.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && e.target.classList.contains("nav-link")) {
    e.preventDefault();
    const url = e.target.getAttribute("href");
    navigateTo(url);
  }
});

window.addEventListener("popstate", renderRoute);
renderRoute();
