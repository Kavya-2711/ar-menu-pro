const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

document.getElementById("previewBtn").onclick = () => {
  const file = upload.files[0];
  if (!file) return alert("Upload image");

  const url = URL.createObjectURL(file);
  preview.innerHTML = `<img src="${url}" style="width:100%;border-radius:10px;">`;
};