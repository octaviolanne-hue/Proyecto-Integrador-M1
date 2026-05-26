const container = document.querySelector(".container");

const btnCambiar = document.getElementById("btnColor");

const mensajeCopiado =
  document.getElementById("copiado");

const botonesCantidad =
  document.querySelectorAll("[data-cantidad]");

let cantidadActual = 6;

let modoActual = "hsl";

const botonesModo =
  document.querySelectorAll("[data-modo]");



crearBoxes(cantidadActual);

botonesModo.forEach(boton => {

  boton.addEventListener("click", () => {

    modoActual =
      boton.dataset.modo;

    cambiarColores();

  });

});



botonesCantidad.forEach(boton => {

  boton.addEventListener("click", () => {

    cantidadActual =
      Number(boton.dataset.cantidad);

    crearBoxes(cantidadActual);

  });

});



btnCambiar.addEventListener("click", cambiarColores);



function crearBoxes(cantidad) {

  container.innerHTML = "";

  for (let i = 0; i < cantidad; i++) {

    const item = document.createElement("div");

    item.classList.add("color-item");

    const box = document.createElement("div");

    box.classList.add("box");

    const code = document.createElement("p");

    code.classList.add("color-code");

    code.addEventListener("click", copiarCodigo);

    const lock = document.createElement("button");

    lock.classList.add("lock-btn");

    lock.textContent = "🔓";

    lock.addEventListener("click", () => {

      item.classList.toggle("locked");

      if (item.classList.contains("locked")) {

        lock.textContent = "🔒";

      }

      else {

        lock.textContent = "🔓";

      }

});

box.appendChild(lock);

item.appendChild(box);

item.appendChild(code);

container.appendChild(item);
  }

  cambiarColores();

}

function copiarCodigo(event) {

  const texto =
  event.currentTarget.innerText;

  navigator.clipboard.writeText(texto);

  mensajeCopiado.classList.add("mostrar");

  setTimeout(() => {

    mensajeCopiado.classList.remove("mostrar");

  }, 1500);

}

function cambiarColores() {

  const items =
    document.querySelectorAll(".color-item");

  const inicio =
    Math.floor(Math.random() * 360);

  const separacion =
    360 / items.length;

  items.forEach((item, index) => {

    if (item.classList.contains("locked")) {
    return;
    }

    const box =
      item.querySelector(".box");

    const code =
      item.querySelector(".color-code");


    const hue =
      (inicio + separacion * index) % 360;

let color = "";



if (modoActual === "hsl") {

  color =
    `hsl(${hue}, 80%, 50%)`;


  code.innerHTML = `
  
    <span class="code-type">
      HSL
    </span>

    <span class="code-value">
      ${hue}, 80%, 50%
    </span>

  `;

}

else {

  const r =
    Math.floor(Math.random() * 256);

  const g =
    Math.floor(Math.random() * 256);

  const b =
    Math.floor(Math.random() * 256);

  const a =
    Math.random().toFixed(2);


  color =
    `rgba(${r}, ${g}, ${b}, ${a})`;


  code.innerHTML = `

    <span class="code-type">
      RGBA
    </span>

    <span class="code-value">
      ${r}, ${g}, ${b}, ${a}
    </span>

  `;

}

box.style.backgroundColor = color;

  });

}
