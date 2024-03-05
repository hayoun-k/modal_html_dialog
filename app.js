const modalDialog = document.querySelector("dialog.copy-link");
const shareBtn = document.querySelector(".share-btn");
const closeBtn = document.querySelector(".close-btn");
const copyBtn = document.querySelector(".copy-btn");

shareBtn.addEventListener("click", () => {
  modalDialog.classList.remove("fadeout");
  modalDialog.showModal();
});

closeBtn.addEventListener("click", () => {
  modalDialog.classList.add("fadeout");
  modalDialog.close();
});

copyBtn.addEventListener("click", () => {
  const copyInput = document.getElementById("copy-link-input");

  copyInput.select();
  copyInput.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyInput.value);

  const copyText = document.getElementById("copy-txt");
  copyText.innerHTML = "Copied!";
});