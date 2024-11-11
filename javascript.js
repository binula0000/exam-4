// 1  тапсырма
let ailar = prompt("1-ден 12-ге дейін енгізіңіз:")
switch (Option) {
    case (month > 2 && month > 6):
        alert("Spring");
        break;
    case (month > 5 && month > 9):
        alert(" Summer");
        break;
    case (month > 8 && month > 12):
        alert(" Autumn");
        break;
    case (month > 11 && month > 3):
        alert(" Winter");
        break;
    default:
        alert(" Дұрыс енгізбедіңіз");
        break
}

// 2тапсырма
let var1 = +prompt("1ші санды енгізіңіз");
let var2 = +prompt("2ші санды енгізіңіз");

if (var1 < var2) {
    alert("1 сан 2ші саннан үлкен");
}