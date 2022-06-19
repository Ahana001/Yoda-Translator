var url = 'https://api.funtranslations.com/translate/yoda.json';
var button = document.querySelector("#btn");

function generateURL(text) {
    return url + "?text=" + text;
}

function getTranlatedText(text, outputBox) {
    fetch(generateURL(text))
        .then((res) => res.json())
        .then((text) => {
            var outputText = text.contents.translated;
            var newTextNode = document.createTextNode(outputText);
            outputBox.appendChild(newTextNode);
        })
        .catch((err) => {
            alert("somyhing went wrong!! try after some time")
            console.log(err);
        })
}
button.addEventListener('click', () => {
    console.log("clicked")
    var inputBox = document.querySelector('#input');
    var outputBox = document.querySelector('#output');
    var inputText = inputBox.value;
    getTranlatedText(inputText, outputBox);
});