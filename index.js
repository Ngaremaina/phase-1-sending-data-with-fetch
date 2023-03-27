document.addEventListener('DOMContentLoaded', submitData = (myname, myemail) =>{
 
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: myname,
            email: myemail
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
    })
    .catch(error => {
        let errorMessage = document.createElement('p')
        errorMessage.textContent = error.message
        document.body.append(errorMessage)
    })
})

