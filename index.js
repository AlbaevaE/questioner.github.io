document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let tg = window.Telegram.WebApp;
    tg.expand();
    document.getElementById("error").innerText = '';
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let description = document.getElementById("description").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let dateOfBirth = document.getElementById("dob").value;
    let helpNeeded = document.getElementById("helpNeeded").value;
    let helpOthers = document.getElementById("helpOthers").value;
    
    if(name.length < 20){
        document.getElementById("error").innerText = 'Ошибка в имени';
        return;
    }
    if(!email.includes('@') || email.length > 100){
        document.getElementById("error").innerText = 'Please enter a valid email';
        return;
    }
    if(description.length < 10){
        document.getElementById("error").innerText = 'Ошибка в описании';
        return;
    }
    if(!gender){
        document.getElementById("error").innerText = 'Please select a gender';
        return;
    }

    let data = {
        name: name,
        email: email,
        dateOfBirth: dateOfBirth,
        city: city,
        description: description,
        gender: gender,
        helpNeeded: helpNeeded,
        helpOthers: helpOthers
    }

    tg.sendData(JSON.stringify(data));

    tg.close();
});
