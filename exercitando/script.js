// eventos
function handleClick(event) {
  if (event.key === "f") {
    alert("Tela cheia");
  }
}

window.addEventListener("keydown", handleClick);

function darkTheme(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("dark")
  }
}

window.addEventListener("keydown", darkTheme);