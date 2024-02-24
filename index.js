document.addEventListener("DOMContentLoaded", function() {
    // Assuming cities.json is in the same directory as your HTML and JS files
    fetch('cities.json')
        .then(response => response.json()) // Parse the JSON file content
        .then(cities => {
            // Now you have your cities array, you can do something with it
            console.log(cities); // Logs the array of cities to the console

            // Example: Populate a dropdown (select element) with the cities
            const selectElement = document.getElementById('cityDropdown');
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                selectElement.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading cities:', error));
});


document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let tg = window.Telegram.WebApp;
    const url = '';
    tg.expand();
    document.getElementById("error").innerText = '';
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("cityDropdown").value;
    let description = document.getElementById("description").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let dateOfBirth = document.getElementById("dob").value;
    let helpNeeded = document.getElementById("helpNeeded").value;
    let helpOthers = document.getElementById("helpOthers").value;
    let userId = tg.initData.user.ID;
    let userName = tg.initData.user.username;
    let queryId = tg.initData.query_id;
    
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
        Id: userId,
        UserTelName: userName,
        QueryId:queryId,
        Name: name,
        Email: email,
        DateOfBirth: dateOfBirth,
        CityId: city,
        Description: description,
        GenderId: gender,
        HelpNeeded: helpNeeded,
        HelpOthers: helpOthers
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json()) 
    .then(data => {
        console.log('Success:', data);
        document.getElementById('response').textContent = 'Submission successful!';
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('response').textContent = 'An error occurred.';
    });

    tg.sendData(JSON.stringify("data"));
    tg.close();
});


 
