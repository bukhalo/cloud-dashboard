import NProgress from "nprogress";

const progressBar = NProgress.configure({
  parent: ".app-content",
  showSpinner: true,
  easing: "ease",
  speed: 500
});

export default progressBar;
