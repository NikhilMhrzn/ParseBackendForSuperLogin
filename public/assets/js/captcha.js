document
    .getElementById('loginForm')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        console.log(password)
            // const captcha = document.querySelector('#g-recaptcha-response').value;​
        return fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    // captcha,
                }),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert(data.msg);
                if (data.success) return location.reload();
            });
    });