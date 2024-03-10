const inputText = document.getElementById("input-text");
const outputText = document.querySelector(".output-text");
const keysList = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"]
];

function btnEncrypt() {
    if (inputText.value) {
        const encryptedText = encrypt(inputText.value, keysList);
        outputText.innerHTML = encryptedText;
        inputText.value = "";
        document.querySelector(".output img").style.display = "none";
        document.querySelector(".output p:nth-child(2)").style.marginTop = "auto";
        document.querySelector(".output p:nth-child(3)").style.display = "none";
        document.querySelector(".copybtn").style.display = "block";
    } else {
        location.reload();
    };
    
};

function encrypt(textToEncrypt, keys) {

  textToEncrypt = textToEncrypt.toLowerCase();

  for (let i = 0; i < keys.length; i++) {
    if (textToEncrypt.includes(keys[i][0])) {
      textToEncrypt = textToEncrypt.replaceAll(
        keys[i][0],
        keys[i][1]
      );
    }
    console.log(keys[i][0],keys[i][1])
  }
  return textToEncrypt;
}

function btnDecrypt() {
    if (inputText.value) {
        const textDecrypted = decrypt(inputText.value, keysList);
        outputText.innerHTML = textDecrypted;
        inputText.value = "";
        document.querySelector(".output img").style.display = "none";
        document.querySelector(".output p:nth-child(2)").style.marginTop = "auto";
        document.querySelector(".output p:nth-child(3)").style.display = "none";
        document.querySelector(".copybtn").style.display = "block";
    } else {
        location.reload();
    };
};

function decrypt(textToDecrypt, keys) {
    
    textToDecrypt = textToDecrypt.toLowerCase();
  
    for (let i = keys.length- 1; i >= 0; i--) {
      if (textToDecrypt.includes(keys[i][1])) {
        textToDecrypt = textToDecrypt.replaceAll(
          keys[i][1],
          keys[i][0]
        );
      }
      console.log(keys[i][1],keys[i][0])
    }
    return textToDecrypt;
  }


function copyText() {
    var textElement = outputText;
    var range = document.createRange();
    range.selectNode(textElement);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand("copy");
        outputText.innerHTML = "Has copiado el texto anterior";
        document.querySelector(".copybtn").style.display = "none";
        document.querySelector(".output p:nth-child(2)").style.margin = "auto 15px";
        document.querySelector(".output img").style.display = "block";
        document.querySelector(".output img").src = "./img/comprobar.png"
    } catch (error) {
        alert("Ocurrió un error al copiar el texto");
    }
    selection.removeAllRanges();
};
