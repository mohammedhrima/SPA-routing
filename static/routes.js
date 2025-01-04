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

function normalizePath(path) {
  let res = path.replace(/\/+/g, "/");
  if (!res.startsWith("/")) res = "/" + res;
  if (res.length > 1 && res.endsWith("/")) res = res.slice(0, -1);
  return res;
}


function renderRoute() {
  const path = normalizePath(window.location.pathname);
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
