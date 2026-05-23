const container = document.querySelector(".container");

const btnCambiar = document.getElementById("btnColor");

const botonesCantidad =
  document.querySelectorAll("[data-cantidad]");

let cantidadActual = 6;



crearBoxes(cantidadActual);



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

    const box = document.createElement("div");

    box.classList.add("box");

    container.appendChild(box);

  }

  cambiarColores();

}



function cambiarColores() {

  const boxes =
    document.querySelectorAll(".box");

  const inicio =
    Math.floor(Math.random() * 360);

  const separacion =
    360 / boxes.length;

  boxes.forEach((box, index) => {

    const hue =
      (inicio + separacion * index) % 360;

    box.style.backgroundColor =
      `hsl(${hue}, 80%, 50%)`;

  });

}