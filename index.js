document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById("error").innerText = '';
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let description = document.getElementById("description").value;
    let gender = document.getElementById("gender").value;
    let dateOfBirth = document.getElementById("dob").value;
    let helpNeeded = document.getElementById("helpNeeded").value;
    let helpOthers = document.getElementById("helpOthers").value;
    
    if(name.length < 20){
        document.getElementById("error").innerText = 'Ошибка в имени';
        return;
    }
    if(email.length < 5){
        document.getElementById("error").innerText = 'Ошибка в email';
        return;
    }
    if(description.length < 50){
        document.getElementById("error").innerText = 'Ошибка в описании';
        return;
    }
    if(gender == undefined){
        document.getElementById("error").innerText = 'Выберите пол';
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


let tg = window.Telegram.WebApp;
let save = document.getElementById("");
tg.expand();
 
