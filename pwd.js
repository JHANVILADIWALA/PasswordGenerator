
const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const symbolset = "~!@#$%^&()_+?/";
const numberset = "0123456789";

//selectors
const passbox = document.getElementById("pass-box");
const totalinput = document.getElementById("total-char")
const upperinput = document.getElementById("upper-case")
const lowerinput = document.getElementById("lower-case")
const numberinput = document.getElementById("numbers")
const symbolinput = document.getElementById("symbols")

const getrandom = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatepwd = (pwd = "") => {
    if (upperinput.checked) {
        pwd += getrandom(upperset);
    }
    if (lowerinput.checked) {
        pwd += getrandom(lowerset);
    }
    if (numberinput.checked) {
        pwd += getrandom(numberset);
    }
    if (symbolinput.checked) {
        pwd += getrandom(symbolset);
    }
    if (pwd.length < totalinput.value) {
        return generatepwd(pwd)
    }
    passbox.innerText = truncatestring(pwd, totalinput.value);
}
generatepwd();
document.getElementById("btn").addEventListener(
    "click",
    function () {
        generatepwd();
    }
)
function truncatestring(str, num) {
    if (str.length > num) {
        let substr = str.substr(0, num);
        return substr;
    }
    else {
        return str;
    }
}