"use strict";
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeImg = document.querySelector("#qr-code img");
const qrCodeInput = document.querySelector("#qr-form input");
const generateQRCode = (value) => {
    if (!value)
        return;
    qrCodeBtn.innerText = "Gerando código...";
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    container.classList.add("active");
};
qrCodeImg.addEventListener("load", () => qrCodeBtn.innerText = "Código criado!");
qrCodeBtn.addEventListener("click", () => generateQRCode(qrCodeInput.value));
qrCodeInput.addEventListener("keydown", e => (e.code === "Enter") && generateQRCode(qrCodeInput.value));
qrCodeInput.addEventListener("keyup", () => {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR code";
});
