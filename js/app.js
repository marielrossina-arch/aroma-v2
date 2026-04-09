function mostrarVista(vista) {
  document.getElementById("view-home").classList.remove("active");
  document.getElementById("view-menu").classList.remove("active");
  document.getElementById("view-contacto").classList.remove("active");

  document.getElementById("view-" + vista).classList.add("active");
}
