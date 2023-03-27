const submitData = (myname, myemail) => {
    let obj = {
        name: myname,
        email:myemail
    
    }
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(obj)
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

}

document.addEventListener('DOMContentLoaded', submitData)

