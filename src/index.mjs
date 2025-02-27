import "./styles.css";

const map = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"];

document.getElementById("start").addEventListener("click", function () {
  map.forEach((m) => (document.getElementsByClassName(m)[0].style = ""));

  const idx = Math.floor(Math.random() * (map.length / 2));
  const idx2 = (idx + 4) % map.length;
  const circle1 = map[idx];
  const circle2 = map[idx2];

  document.getElementsByClassName(circle1)[0].style = "display: block;";
  document.getElementsByClassName(circle2)[0].style = "display: block;";

  document.getElementById("text").innerHTML =
    Math.floor(Math.random() * 2) % 2 === 0 ? "Axe" : "Scythe";

  const drop = Math.floor(Math.random() * 2) % 2 === 0;
  document.getElementsByClassName("mech")[0].style = drop
    ? "display: block;"
    : "display: none;";
});
