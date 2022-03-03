const form = document.querySelector('#myform');
form.addEventListener
    ('submit', function (e) {
        const emailInput = document.querySelectorAll('input')[0];
        const passInput = document.querySelectorAll('input')[1];
        console.log(emailInput.value, passInput.value)
        e.preventDefault()
    })
