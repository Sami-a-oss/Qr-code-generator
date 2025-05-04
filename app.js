const input = document.querySelector("input");
const button = document.querySelector("button");
const img = document.querySelector('#img');


button.addEventListener("click", () => {
  qr();
});
const qr = () => {
  img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value;
}
