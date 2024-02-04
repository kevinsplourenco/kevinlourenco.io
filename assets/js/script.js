const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");
  
    if (currentTheme === "dark") {
      rootHtml.setAttribute("data-theme", "light");
      toggleTheme.classList.remove("bi-moon-stars");
      toggleTheme.classList.add("bi-sun");
    } else {
      rootHtml.setAttribute("data-theme", "dark");
      toggleTheme.classList.remove("bi-sun");
      toggleTheme.classList.add("bi-moon-stars");
    }
  }
  

toggleTheme.addEventListener("click", changeTheme);
