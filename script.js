//Header
const textSignIn = document.querySelector('#h-signIn')
const textSignUp = document.querySelector('#h-signUp')

//Main

const blockSignIn = document.querySelector("#block-signIn")
const blockSignUp = document.querySelector("#block-signUp")

//Sign up info
const username = document.querySelector('#username')
const mail = document.querySelector("#mail")
const password = document.querySelector("#password")
const signUpBtn = document.querySelector("#btn")

//Sign in info
const email = document.querySelector("#email")
const checkPassword = document.querySelector("#check-password")
const signInBtn = document.querySelector("#signIn-btn")

//Sign up
const register = () => {
    if(username.value.length > 0 && mail.value.length > 0 && password.value.length > 8) {

        if(mail.value.endsWith("@gmail.com")) {
            localStorage.setItem("username", username.value)
            localStorage.setItem("mail", mail.value)
            localStorage.setItem("password", password.value)
    
            username.value = ""
            mail.value = ""
            password.value = ""

            alert("Реєстрація пройшла успішно")

        } else {
            alert("Будь ласка, введіть ваш поштовий адрес")
        }

    } else {
        alert("Будь ласка, заповніть поля")
    }
}

const signIn = () => {
    if(localStorage.getItem("username")) {

        const storedEmail = localStorage.getItem("mail")
        const storedPassword = localStorage.getItem("password")

        if(email.value === storedEmail && checkPassword.value === storedPassword) {

            email.value = ""
            checkPassword.value = ""

            alert("Вхід пройшов успішно")

        } else {
            alert("Будь ласка, введіть справжні дані від вашого аккаунту")
        }
    } else {
        alert("Перед тим як ввійти в свій аккаунт, зареєструйте його")
    }
}

signInBtn.addEventListener("click", signIn)
signUpBtn.addEventListener("click", register)

const changeToSignIn = () => {
    textSignUp.style.color = "gray"
    textSignIn.style.color = "aqua"

    blockSignIn.classList.remove("none")
    blockSignUp.classList.add("none")

}

const changeToSignUp = () => {
    textSignIn.style.color = "gray"
    textSignUp.style.color = "aqua"

    blockSignIn.classList.add("none")
    blockSignUp.classList.remove("none")

}

textSignIn.addEventListener("click", changeToSignIn)
textSignUp.addEventListener("click", changeToSignUp)