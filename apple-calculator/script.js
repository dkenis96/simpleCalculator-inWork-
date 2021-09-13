const input = document.form.input;

function insert(num) {
    input.value += '' + num;
}

function clearAll() {
    input.value = "";
}

function back() {
  input.value = input.value.substring(0, input.value.length-1) 
}

function equal() {
    if(input.value) {
    input.value = eval(input.value);
    }
}