document.addEventListener("mousemove", function (e) {
  const text = document.querySelector(".text");
  const astronaut = document.querySelector("#astronaut-container");

  text.style.width = 100 + e.pageX / 100 + "%";
  text.style.height = 100 + e.pageX / 100 + "%";
  text.style.top = 25 + e.pageX / 2 + "%";

  astronaut.style.top = 100 + e.pageX / 2 + "%";
  astronaut.style.width = 100 + e.pageX / 100 + "%";
  astronaut.style.height = 150 + e.pageX / 120 + "%";
});
