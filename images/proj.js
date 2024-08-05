const mainForm= document.getElementById("myform")
const userName=document.getElementById("nameinput")
const inputName =document.getElementById("name")

mainForm.addEventListener('submit', function(event){
    event.preventDefault()

    const myusername=userName.value

    inputName.textContent = myusername

    mainForm.request()
})