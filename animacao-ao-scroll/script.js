// Navegação por Tab
function initNavTab() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    function activeTab(index) {
      tabContent.forEach((tab) => {
        tab.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initNavTab();

//accordion
const accordionList = document.querySelectorAll("dt");
if(accordionList.length) {
  function handleList() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }
  accordionList.forEach((item) => {
    item.addEventListener("click", handleList)
  })
}
  
  // noscript
function initLink() {
  const linksInternos = document.querySelectorAll("a[href^='#']");
  function handleLink(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", handleLink);
  });
}
initLink();
