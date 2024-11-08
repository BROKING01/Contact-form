const submit = document.querySelector(".submit")
const form = document.querySelector("form")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const general = document.getElementById("general")
const support = document.getElementById("support")
const checkbox = document.getElementById("checkbox")
const message = document.getElementById("message")
const error1 = document.querySelector(".error1")
const error2 = document.querySelector(".error2")
const error3 = document.querySelector(".error3")
const error4 = document.querySelector(".error4")
const error5 = document.querySelector(".error5")
const error6 = document.querySelector(".error6")
const succes = document.querySelector(".succes")
let a
let b
let c
let d
let e
let f 
form.addEventListener("submit", function mypre(e) {
    e.preventDefault()
    if (fname.value === "") {
        error1.classList.remove("hidden")
    } else {
        error1.classList.add("hidden")
        a = 1
    }

    if (lname.value === "") {
        error2.classList.remove("hidden")
    } else {
        error2.classList.add("hidden")
        b = 1
    }

    if ( !isEmail(email.value.trim())) {
        error3.classList.remove("hidden")
    } else {
        error3.classList.add("hidden")
        c = 1
    }

    if (message.value === "") {
        error5.classList.remove("hidden")
    } else {
        error5.classList.add("hidden")
        d = 1
    }

    if ( !checkbox.checked) {
        error6.classList.remove("hidden")
    } else {
        error6.classList.add("hidden")
        e = 1
    }

    if ( general.checked || support.checked) {
        error4.classList.add("hidden")
        f = 1
    } else {
        error4.classList.remove("hidden")
    }

    if (a === 1 & b === 1 & c === 1 & d === 1 & e === 1 & f === 1) {
        succes.classList.remove("hidden")
        console.log(a,b,c,d,e,f)
    }
})
function isEmail(email){
    return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)
}