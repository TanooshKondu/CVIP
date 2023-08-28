
let a = document.getElementById("htmlBtn");
let b = document.getElementById("cssBtn");
let c = document.getElementById("jsBtn");
let d = document.getElementById("btn1");
function htmlBtn(){
    a.style.left = "510px";
    b.style.left = "540px";
    c.style.left = "540px";
    d.style.left = "0";
}
function cssBtn(){
    a.style.left = "-30px";
    b.style.left = "0";
    c.style.left = "30px";
    d.style.left = "90px";
}
function jsBtn(){
    a.style.left = "-540px";
    b.style.left = "-540px";
    c.style.left = "-510px";
    d.style.left = "180px";
}

const htmlCodeInput = document.getElementById("htmlCode");
const cssCodeInput = document.getElementById("cssCode");
const jsCodeInput = document.getElementById("jsCode");
const outputFrame = document.getElementById("outputFrame").contentWindow.document;

function updateOutput() {
  const htmlCode = htmlCodeInput.value;
  const cssCode = `<style>${cssCodeInput.value}</style>`;
  const jsCode = `<script>${jsCodeInput.value}</script>`;

  outputFrame.open();
  outputFrame.writeln(htmlCode + cssCode + jsCode);
  outputFrame.close();
}

htmlCodeInput.addEventListener("input", updateOutput);
cssCodeInput.addEventListener("input", updateOutput);
jsCodeInput.addEventListener("input", updateOutput);

updateOutput();
