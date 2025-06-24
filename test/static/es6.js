export { hello };

function hello(div, color) {
  div.innerHTML = `<svg viewBox="0 0 200 100" style="background-color:${color};width:90%;height:70%;"></svg>`;
}
