document.getElementById('emailCollector').addEventListener('submit', event=>{
    event.preventDefault()
    let formData = new FormData(event.target)
    let userName = formData.get('fname')
    let email = formData.get('email')
    let updatedHtml = `
    <h2>Congratulations, ${userName}!</h2>

    <p>You're on your way to becoming a BBQ Master!</p>
   
    <p class="fine-print">You will get weekly BBQ tips sent to: ${email}</p>
    `
    let mainContent = document.getElementById('Main-Content')
    mainContent.innerHTML = updatedHtml
})