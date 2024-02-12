<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questionnaire Form</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background: #e9ebee; /* Background color similar to the one in the image */
        }
        .container {
            background: white;
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            color: #333;
        }
        input[type=text],
        input[type=date],
        input[type=email],
        textarea,
        select {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border-radius: 4px;
            border: 1px solid #ccc;
        }
        textarea {
            resize: vertical;
        }
        button {
            background-color: #4267b2; /* Facebook blue for the button */
            color: white;
            border: none;
            padding: 10px 20px;
            text-transform: uppercase;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
        }
        button:hover {
            background-color: #365899; /* Darker blue on hover */
        }
    </style>
</head>
<body>
    <div class="container">
        <form id="questionnaireForm">
            <!-- Full Name -->
            <div class="form-group">
                <label for="fullName">Имя Фамилия</label>
                <input type="text" id="fullName" name="fullName" maxlength="100" required>
            </div>
            <!-- Date of Birth -->
            <div class="form-group">
                <label for="dob">Дата рождения</label>
                <input type="date" id="dob" name="dob" required>
            </div>
            <!-- City -->
            <div class="form-group">
                <label for="city">Город</label>
                <input type="text" id="city" name="city" required>
            </div>
            <!-- Email -->
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <!-- Description -->
            <div class="form-group">
                <label for="description">Описание</label>
                <textarea id="description" name="description" rows="3" maxlength="1000" required></textarea>
            </div>
            <!-- Sex -->
            <div class="form-group">
                <label for="sex">Пол</label>
                <select id="sex" name="sex" required>
                    <option value="">Выберите...</option>
                    <option value="female">Женский</option>
                    <option value="male">Мужской</option>
                    <option value="other">Другое</option>
                </select>
            </div>
            <!-- Help Needed -->
            <div class="form-group">
                <label for="helpNeeded">В чем вам нужна помощь?</label>
                <input type="text" id="helpNeeded" name="helpNeeded" maxlength="250" required>
            </div>
            <!-- Help to Others -->
            <div class="form-group">
                <label for="helpOthers">Чем вы можете помочь?</label>
                <input type="text" id="helpOthers" name="helpOthers" maxlength="250" required>
            </div>
            <!-- Save Button -->
            <button type="submit">Сохранить</button>
        </form>
    </div>
    <script>
        document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
            event.preventDefault();
            // Add your form submission logic here
            alert('Form submitted!');
        });
    </script>
</body>
</html>
