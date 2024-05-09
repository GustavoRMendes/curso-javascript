// eventos
function handleClick(event) {
  if (event.key === "f") {
    alert("Tela cheia");
  }
}

window.addEventListener("keydown", handleClick);