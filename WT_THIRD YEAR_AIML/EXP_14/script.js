// DOM Elements
const container = document.getElementById("container");
const text = document.getElementById("text");

// Buttons
document.getElementById("changeTextBtn").addEventListener("click", () => {
  text.textContent = "🔄 Text has been changed!";
});

document.getElementById("changeStyleBtn").addEventListener("click", () => { 
  text.style.color = "white";
  text.style.backgroundColor = "black";
  text.style.padding = "10px";
  text.style.borderRadius = "5px";
});

document.getElementById("addElementBtn").addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = "➕ New paragraph added!";
  newPara.classList.add("box");
  container.appendChild(newPara);
});

document.getElementById("removeElementBtn").addEventListener("click", () => {
  const paras = container.getElementsByTagName("p");
  if (paras.length > 1) {
    container.removeChild(paras[paras.length - 1]);
  } else {
    alert("Nothing left to remove!");
  }
});

document.getElementById("replaceElementBtn").addEventListener("click", () => {
  const newEl = document.createElement("h3");
  newEl.textContent = "🆕 This replaced the original paragraph!";
  container.replaceChild(newEl, text);
});
