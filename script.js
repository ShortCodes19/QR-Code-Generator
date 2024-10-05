const btn = document.querySelector(".container button");
const input = document.getElementById("input");
const qrBox = document.querySelector(".qr-box");
const qrImage = document.getElementById("qr-img");

function generateCode() {
  if (input.value.length > 0) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${input.value}`;

    qrBox.classList.add("show-image");
  } else {
    alert("Please enter a text or URL");
  }
}

btn.addEventListener("click", generateCode);
