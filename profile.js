if(localStorage.getItem("isAuth")!=="true"){
    location.href="login.html"
}

const burger=document.getElementById("burger")
const menu=document.getElementById("menu")
const settings=document.getElementById("settings")

burger.onclick=()=>menu.classList.toggle("active")

document.getElementById("openSettings").onclick=e=>{
    e.preventDefault()
    settings.classList.add("active")
    menu.classList.remove("active")
}

document.getElementById("closeSettings").onclick=()=>{
    settings.classList.remove("active")
}

document.getElementById("logoutBtn").onclick=()=>{
    localStorage.clear()
    location.href="../index.html"
}

/* пользователь */
document.getElementById("userName").textContent=
    localStorage.getItem("userName")||"Пользователь"

document.getElementById("userEmail").textContent=
    localStorage.getItem("userEmail")||""

/* аватар */
const avatarImg=document.getElementById("avatarImg")
const setAvatar=document.getElementById("setAvatar")

const savedAvatar=localStorage.getItem("avatar")
if(savedAvatar) avatarImg.src=savedAvatar

setAvatar.onchange=()=>{
    const file=setAvatar.files[0]
    if(!file) return

    const r=new FileReader()
    r.onload=()=>{
        avatarImg.src=r.result
        localStorage.setItem("avatar",r.result)
    }
    r.readAsDataURL(file)
}


/* сохранить настройки */
document.getElementById("saveSettings").onclick=()=>{
    const name=setName.value
    const email=setEmail.value

    if(name){
        localStorage.setItem("userName",name)
        userName.textContent=name
    }
    if(email){
        localStorage.setItem("userEmail",email)
        userEmail.textContent=email
    }
    settings.classList.remove("active")
}
const cityList=document.getElementById("cityList")
const cities=JSON.parse(localStorage.getItem("visitedCities")||"[]")

cityList.innerHTML=""

cities.forEach(city=>{
    const li=document.createElement("li")
    li.textContent=city
    cityList.appendChild(li)
})
