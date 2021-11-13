const login = document.querySelector('#login');
const RegistrForm = document.querySelector('#reg');
const Registr = document.querySelector('#Registr')
const loginForm = document.querySelector('#log')
let batRegistr = document.querySelector('.registr')
const Main = document.querySelector('#main')
const mainRegistr = document.querySelector('#mainRegistr')
const message = document.querySelector('.message')


const at = document.querySelector('#at')
const key = document.querySelector('#key')
const user = document.querySelector('#user')

const Exit = document.querySelector(".Exit")

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

console.log(batRegistr.classList.contains('registr'));

submitReg.addEventListener('click', () => {
    console.log(UserReg.match(regUser));
    console.log(UserPas.match(regPassword));
    console.log(UserMail.match(regMail))

    let userProver = JSON.parse(localStorage.getItem(UserReg))

    console.log(userProver);
    
    if(userProver !== null ){
       console.log(userProver)
       message.innerHTML =' User with this username already exists'
    }else if (  UserReg && UserReg.match(regUser) !== null && UserPas.match(regPassword) !== null && UserMail.match(regMail) !== null) {

        carentUser.Login = UserReg;
        carentUser.UserPassword = UserPas;
        carentUser.UserEmail = UserMail

        let objUser = JSON.stringify(carentUser)

        localStorage.setItem(`${UserReg}`, `${objUser}`);

        

        console.log(carentUser);

        Main.style.display = ''
        mainRegistr.style.display = 'none'
        mainPersonal.style.display = 'none'


        batRegistr.innerHTML = '<i class="far fa-user fa-lg  icon-user"></i>'

        message.innerHTML = ''

        batRegistr.classList.remove('registr');
        batRegistr.classList.add('userBox');
        batRegistr = document.querySelector('.userBox')


        user.innerHTML = ` ${UserReg}`

        key.innerHTML = ` ${UserPas}`

        at.innerHTML = ` ${UserMail}`

    } else if (UserReg.match(regUser) == null) {
        message.innerHTML = 'You entered an invalid username'
    } else if (UserPas.match(regPassword) == null) {
        message.innerHTML = 'You entered an incorrect password'
    } else if (UserMail.match(regMail) == null) {
        message.innerHTML = 'You entered an invalid E-mail'
    } 

})


const logo = document.querySelector('.logo')

batRegistr.addEventListener('click', () => {
    if (batRegistr.classList.contains('userBox') !== false) {

        mainPersonal.style.display = ''
        Main.style.display = 'none'
        mainRegistr.style.display = 'none'

    }
})

logo.addEventListener('click', () => {
    mainPersonal.style.display = 'none'
    Main.style.display = ''
    mainRegistr.style.display = 'none'
})

Exit.addEventListener('click', () =>{
    window.location.href = '../index.html';
})

let nameLog = ''
let pasLog =' '

const submitSign = document.querySelector('.submitSign')

document.querySelector('.Us_Log').addEventListener('input', () => {
    nameLog = document.querySelector('.Us_Log').value;
})

document.querySelector('.Pas_Log ').addEventListener('input', () => {
    pasLog = document.querySelector(' .Pas_Log ').value;
})

submitSign.addEventListener('click', () =>{
    console.log(nameLog);
    console.log(pasLog);
    let UserStopeg = JSON.parse(localStorage.getItem(nameLog))
    
    if(nameLog === UserStopeg.Login && pasLog === UserStopeg.UserPassword){

        carentUser.Login = UserStopeg.Login;
        carentUser.UserPassword = UserStopeg.UserPassword;
        carentUser.UserEmail = UserStopeg.UserEmail

        Main.style.display = ''
        mainRegistr.style.display = 'none'
        mainPersonal.style.display = 'none'


        batRegistr.innerHTML = '<i class="far fa-user fa-lg  icon-user"></i>'

        batRegistr.classList.remove('registr');
        batRegistr.classList.add('userBox');

        console.log(carentUser)
        user.innerHTML = ` ${UserStopeg.Login}`

        key.innerHTML = ` ${UserStopeg.UserPassword}`

        at.innerHTML = ` ${UserStopeg.UserEmail}`
    }
})

