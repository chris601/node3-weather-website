const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const mOne = document.querySelector('#m1')
const mTwo = document.querySelector('#m2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    mOne.textContent = "Loading..."
    mTwo.textContent = ""
    
    fetch('http://localhost:3000/weather?address=' + search.value).then((response)=>{
    
    response.json().then((data)=>{
        if (data.error){
            mOne.textContent = data.error
        }
        else {
            mOne.textContent = data.location
            mTwo.textContent = data.forcast
        }
    })
})
    

})