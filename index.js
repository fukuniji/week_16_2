const form = document.querySelector(".form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const genderInputs = document.querySelectorAll('input[name="gender"]');
const professionInput = document.getElementById("profession");
const passwordInput = document.getElementById("password");
const passwordRepeatInput = document.getElementById("passwordRepeat");
const consentInput = document.getElementById("consent");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const genderError = document.getElementById("genderError");
const professionError = document.getElementById("professionError");
const passwordError = document.getElementById("passwordError");
const passwordRepeatError = document.getElementById("passwordRepeatError");
const consentError = document.getElementById("consentError");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Функции проверки валидности полей

function validateName() {
    // Метод trim() возвращает строку без пробелов в начале и конце строки
    const nameValue = nameInput.value.trim();

    if (nameValue === "") {
        // Отображаем сообщение об ошибке
        nameError.textContent = "Поле обязательно для заполнения";
        // Добавляем класс ошибки
        nameInput.classList.add("error");
        return false;
    } else if (nameValue.length < 2 || nameValue.length > 20) {
        nameError.textContent = "Имя должно содержать от 2 до 20 символов";
        nameInput.classList.add("error");
        return false;
    } else {
        nameError.textContent = "";
        nameInput.classList.remove("error");
        return true;
    }
}

function validateEmail() {
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        emailError.textContent = "Поле обязательно для заполнения";
        emailInput.classList.add("error");
        return false;
    } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = "Некорректный email";
        emailInput.classList.add("error");
        return false;
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("error");
        return true;
    }

    // // TODO
    // // Доделать вариант со свойствами `validity` и `validationMessage`
    // if (emailInput.validity.valueMissing) {
    //     emailError.textContent = emailInput.validationMessage;
    //     // emailInput.setCustomValidity('Пожалуйста, заполните поле "email"');
    //     emailInput.classList.add("error");
    //     return false;
    // } else if (emailInput.validity.patternMismatch) {
    //     // emailError.textContent = emailInput.validationMessage;
    //     emailInput.setCustomValidity("Пожалуйста, введите корректный email");
    //     emailInput.classList.add("error");
    //     return false;
    // } else {
    //     emailError.textContent = "";
    //     emailInput.classList.remove("error");
    //     return true;
    // }
}

function validateAge() {
    const ageValue = ageInput.value.trim();

    if (ageValue === "") {
        ageError.textContent = "Поле обязательно для заполнения";
        ageInput.classList.add("error");
        return false;
    } else if (isNaN(ageValue) || ageValue < 14 || ageValue > 120) {
        ageError.textContent = "Некорректный возраст";
        ageInput.classList.add("error");
        return false;
    } else {
        ageError.textContent = "";
        ageInput.classList.remove("error");
        return true;
    }
}

function validateGender() {
    let checked = false;

    genderInputs.forEach((input) => {
        if (input.checked) {
            checked = true;
        }
    });

    if (!checked) {
        genderError.textContent = "Выберите пол";
        return false;
    } else {
        genderError.textContent = "";
        return true;
    }
}

function validateProfession() {
    const professionValue = professionInput.value;

    if (professionValue === "") {
        professionError.textContent = "Поле обязательно для заполнения";
        professionInput.classList.add("error");
        return false;
    } else {
        professionError.textContent = "";
        professionInput.classList.remove("error");
        return true;
    }
}

function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;

    if (passwordValue === "") {
        passwordError.textContent = "Поле обязательно для заполнения";
        passwordInput.classList.add("error");
        return false;
    } else if (!passwordPattern.test(passwordValue)) {
        passwordError.textContent =
            "Пароль должен содержать от 8 до 20 символов, включая заглавные и строчные буквы, цифры и специальные символы";
        passwordInput.classList.add("error");
        return false;
    } else {
        passwordError.textContent = "";
        passwordInput.classList.remove("error");
        return true;
    }
}

function validatePasswordRepeat() {
    const passwordRepeatValue = passwordRepeatInput.value.trim();
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;

    if (passwordRepeatValue === "") {
        passwordRepeatError.textContent = "Поле обязательно для заполнения";
        passwordRepeatInput.classList.add("error");
        return false;
    } else if (!passwordPattern.test(passwordRepeatValue)) {
        passwordRepeatError.textContent =
            "Пароль должен содержать от 8 до 20 символов, включая заглавные и строчные буквы, цифры и специальные символы";
        passwordRepeatInput.classList.add("error");
        return false;
    } else {
        passwordRepeatError.textContent = "";
        passwordRepeatInput.classList.remove("error");
        return true;
    }
}

function validateConsent() {
    if (!consentInput.checked) {
        consentError.textContent =
            "Необходимо дать согласие на обработку персональных данных";
        return false;
    } else {
        consentError.textContent = "";
        return true;
    }
}

function matchPasswords() {
    if (passwordInput.value != passwordRepeatInput.value) {
        passwordRepeatError.textContent = "Пароли не совпадают";
        passwordRepeatInput.classList.add("error");
        return false;
    } else {
        passwordRepeatError.textContent = "";
        passwordRepeatInput.classList.remove("error");
        return true;
    }
}

// Функция проверки валидности формы
function validateForm(event) {
    event.preventDefault(); //Отмена действия по умолчанию

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isAgeValid = validateAge();
    const isGenderValid = validateGender();
    const isProfessionValid = validateProfession();
    const isPasswordValid = validatePassword();
    const isPasswordRepeatValid = validatePasswordRepeat();
    const isConsentValid = validateConsent();
    const isPasswordRepeated = matchPasswords();

    // Если форма проходит проверку валидности,
    if (
        isNameValid &&
        isEmailValid &&
        isAgeValid &&
        isGenderValid &&
        isProfessionValid &&
        isPasswordValid &&
        isPasswordRepeatValid &&
        isConsentValid &&
        isPasswordRepeated
    ) {
        // выводим значения полей формы в консоль и
        console.log(`Имя: ${nameInput.value}`);
        console.log(`Email: ${emailInput.value}`);
        console.log(`Возраст: ${ageInput.value}`);
        console.log(
            `Пол: ${
                document.querySelector('input[name="gender"]:checked').value
            }`
        );
        console.log(`Профессия: ${professionInput.value}`);
        console.log(`Пароль: ${passwordInput.value}`);
        console.log(`Пароль повторно: ${passwordRepeatInput.value}`);
        // очищаем форму
        form.reset();
    }
}

// Функция очистки сообщений об ошибках и классов ошибок
function clearErrors() {
    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";
    genderError.textContent = "";
    professionError.textContent = "";
    passwordError.textContent = "";
    passwordRepeatError.textContent = "";
    consentError.textContent = "";

    nameInput.classList.remove("error");
    emailInput.classList.remove("error");
    ageInput.classList.remove("error");
    professionInput.classList.remove("error");
    passwordInput.classList.remove("error");
    passwordRepeatInput.classList.remove("error");
}

// Обработчики событий

// Обработчик события на отправку формы
form.addEventListener("submit", validateForm);

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
ageInput.addEventListener("input", validateAge);
genderInputs.forEach((input) => {
    input.addEventListener("input", validateGender);
});
professionInput.addEventListener("input", validateProfession);
passwordInput.addEventListener("input", validatePassword);
passwordRepeatInput.addEventListener("input", validatePasswordRepeat);
consentInput.addEventListener("input", validateConsent);

// по событию reset происходит очистка сообщений об ошибках и классов ошибок
form.addEventListener("reset", clearErrors);
