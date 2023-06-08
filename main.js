/*form data*/
const firstName = document.querySelector('.firstname')
const lastName = document.querySelector('.lastname')
const email = document.querySelector('.email')
const street = document.querySelector('.street')
const state = document.querySelector('.state')
const zipCode = document.querySelector('.zipcode')



const formBtn = document.getElementById("form__button")


const entry = []

function displayUser(){

  const showUser = document.querySelector('.display__user')

  for(let i = 0; i < entry.length; i++){
    console.log(showUser)

    showUser.innerHTML += `<p>${entry[i].firstname}</p><p>${entry[i].lastname}</p>
    <p>${entry[i].email}</p>
    <p>${entry[i].street}</p>`

  }
}

formBtn.addEventListener('click', function(){

  entry.push({
    firstname: firstName.value,
    lastname: lastName.value,
    email: email.value,
    street: street.value,
    state: state.value,
    zipcode: zipCode.value,
  }
  )



console.log(entry)

displayUser()

})
