const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
generateBtn = wrapper.querySelector(".form button");
qrImage = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return;
  generateBtn.innerText = "Generating QR code...";
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`; // link from https://goqr.me/api/
  qrImage.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR code";
  });
});

qrInput.addEventListener("keyup", ()=>{
  if(!qrInput.value){
    wrapper.classList.remove("active");
  }
})
