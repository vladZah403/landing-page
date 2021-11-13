const login = document.querySelector('#login');
const RegistrForm = document.querySelector('#reg');
const Registr = document.querySelector('#Registr')
const loginForm = document.querySelector('#log')
const batRegistr = document.querySelector('.registr')
const Main = document.querySelector('#main')
const mainRegistr = document.querySelector('#mainRegistr')
const message = document.querySelector('.message')



batRegistr.addEventListener('click', () => {
    Main.style.display = 'none'
    mainRegistr.style.display = ''
})

const carentUser = {
    Login: '',
    UserPassword: '',
    UserEmail: ''
}

login.addEventListener('click', () => {
    RegistrForm.style.display = 'none'
    loginForm.style.display = ''
})
Registr.addEventListener('click', () => {
    loginForm.style.display = 'none'
    RegistrForm.style.display = ""
})

const regUser = /^[a-zA-Z]/g
const regPassword = /^[0-9][a-zA-Z0-9_-]{7,19}/g
const regMail = /^[a-zA-Z][0-9a-zA-Z_]{5,20}@[a-z]{2,12}\.[a-z]{2,12}/g;

let UserReg = ''
let UserPas = ''
let UserMail = ''
document.querySelector('.Us_Reg').addEventListener('input', () => {
    UserReg = document.querySelector('.Us_Reg').value;
})

document.querySelector('.Pas ').addEventListener('input', () => {
    UserPas = document.querySelector(' .Pas ').value;
})

document.querySelector(' .UserMail ').addEventListener('input', () => {
    UserMail = document.querySelector(' .UserMail ').value;
})

const submitReg = document.querySelector('.submitReg')


const mainPersonal = document.querySelector('#mainPersonal')

submitReg.addEventListener('click', () => {
    console.log(UserReg.match(regUser));
    console.log(UserPas.match(regPassword));
    console.log(UserMail.match(regMail))
    if (UserReg.match(regUser) !== null && UserPas.match(regPassword) !== null && UserMail.match(regMail) !== null) {
        localStorage.setItem(`${UserReg}`, `${UserPas} / ${UserMail}`);

        carentUser.Login = UserReg;
        carentUser.UserPassword = UserPas;
        carentUser.UserEmail = UserMail

        console.log(carentUser);

        Main.style.display = ''
        mainRegistr.style.display = 'none'


        batRegistr.innerHTML = '<i class="far fa-user fa-lg  icon-user"></i>'
        batRegistr.classList.add('userBox');
        batRegistr.classList.remove('registr');
        message.innerHTML = ''


    } else if (UserReg.match(regUser) == null) {
        message.innerHTML = 'You entered an invalid username'
    } else if (UserPas.match(regPassword) == null) {
        message.innerHTML = 'You entered an incorrect password'
    } else if (UserMail.match(regMail) == null) {
        message.innerHTML = 'You entered an invalid E-mail'
    }
})



// const userBox = document.querySelector('.userBox')
// if (userBox.classList.contains('userBox')) {
//     userBox.addEventListener('click', () => {
//         mainPersonal.style.display = ''
//         Main.style.display = 'none'
//         mainRegistr.style.display = 'none'
//     })
// }




const user = document.querySelector('#user')
const key = document.querySelector('#key')
const at = document.querySelector('#at')




