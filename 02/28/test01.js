var zz = document.querySelector('input');
var arr = [];
arr[0] = document.querySelector('#zero_btn');
arr[1] = document.querySelector('#one_btn');
arr[2] = document.querySelector('#two_btn');
arr[3] = document.querySelector('#three_btn');
arr[4] = document.querySelector('#four_btn');
arr[5] = document.querySelector('#five_btn');
arr[6] = document.querySelector('#six_btn');
arr[7] = document.querySelector('#seven_btn');
arr[8] = document.querySelector('#eight_btn');
arr[9] = document.querySelector('#nine_btn');
arr[10] = document.querySelector('#dot_btn');
arr[11] = document.querySelector('#equal_btn');
arr[12] = document.querySelector('#plus_btn');
arr[13] = document.querySelector('#minus_btn');
arr[14] = document.querySelector('#multiply_btn');
arr[15] = document.querySelector('#divide_btn');
arr[16] = document.querySelector('#AC_btn');

var op = ['+', '-', '÷', '×'];

arr[0].addEventListener('click', function () {  // 0
    zz.value += arr[0].innerText;
});

arr[1].addEventListener('click', function () {  // 1
    zz.value += arr[1].innerText;
});

arr[2].addEventListener('click', function () {  // 2
    zz.value += arr[2].innerText;
});

arr[3].addEventListener('click', function () {  // 3
    zz.value += arr[3].innerText;
});

arr[4].addEventListener('click', function () {  // 4
    zz.value += arr[4].innerText;
});

arr[5].addEventListener('click', function () {  // 5
    zz.value += arr[5].innerText;
});

arr[6].addEventListener('click', function () {  // 6
    zz.value += arr[6].innerText;
});

arr[7].addEventListener('click', function () {  // 7
    zz.value += arr[7].innerText;
});

arr[8].addEventListener('click', function () {  // 8
    zz.value += arr[8].innerText;
});

arr[9].addEventListener('click', function () {  // 9
    zz.value += arr[9].innerText;
});

// 숫자에 해당하는 문자열에서 . 를 찾는다. 있으면 .를 추가 시키지 않고 없으면 문자열에 . 추가를 허용한다.
arr[10].addEventListener('click', function () { // .
    if (zz.value.length == 0) {
        return;
    }
    var str = zz.value;

    var pos = [-1];
    var cnt = 0;
    // 연산자를 제외한 숫자만을 얻기 위해 연산자를 찾아준다.
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == '+') {
            pos[cnt++] = i;
        }
        else if (str.charAt(i) == '-') {
            pos[cnt++] = i;
        }
        else if (str.charAt(i) == '÷') {
            pos[cnt++] = i;
        }
        else if (str.charAt(i) == '×') {
            pos[cnt++] = i;
        }
    }

    // 숫자를 찾았으면 . 가 있는지 확인한다.
    var tmp;
    if(cnt == 0){
        tmp = str;
    }
    else{
        tmp = str.substr(pos[cnt-1]+1);
    }

    for(var i=0;i<tmp.length;i++){
        if(tmp.charAt(i) == '.')
            return;
    }

    zz.value += arr[10].innerText;
});

arr[11].addEventListener('click', function () { // =
    var str = zz.value;

    var pos = [-1];
    var cnt = 0;

    // input요소에서 연산자를 찾아 인덱스를 pos에 저장한다.
    for (var i = 1; i < str.length; i++) {
        if (str.charAt(i) == '+') {
            pos[cnt++] = i;
        }
        else if (str.charAt(i) == '-') {
            pos[cnt++] = i;
        }
        else if (str.charAt(i) == '÷') {
            pos[cnt++] = i;
        }
        else if (str.charAt(i) == '×') {
            pos[cnt++] = i;
        }
    }

    // 연산자가 없으면 리턴한다.
    if (pos[0] == -1) {
        return;
    }

    // 숫자를 파싱한다.
    var num = [];
    var numCnt = 0;

    num[numCnt++] = parseFloat(str.substr(0, pos[i]));

    for (var i = 0; i < cnt; i++) {
        if(i == cnt - 1){
            num[numCnt++] = parseFloat(str.substr(pos[i] + 1));
        }
        else{
            num[numCnt++] = parseFloat(str.substr(pos[i] + 1, pos[i + 1] - pos[i] - 1));
        }
    }

    // 파싱한 숫자와 연산자들로 값을 계산한다.
    // 우선 곱하기, 나누기를 연산한다.
    for (var i = 0; i < pos.length; i++) {
        if(str.charAt(pos[i])=='×'){
            num[i] = num[i]*num[i+1];
            // 연산한 숫자를 없애준다.
            num.splice(i+1,1);
            // 연산에 쓰인 연산자를 없애준다.
            pos.splice(i,1);
            // 없어진 숫자만큼 i를 정체시켜준다.
            i--;
        }
        else if(str.charAt(pos[i]) == '÷'){
            num[i] = num[i]/num[i+1];
            // 연산한 숫자를 없애준다.
            num.splice(i+1,1);
            // 연산에 쓰인 연산자를 없애준다.
            pos.splice(i,1);
            // 없어진 숫자만큼 i를 정체시켜준다.
            i--;
        }
    }

    // 파싱한 숫자와 찾은 연산자들로 값을 계산한다.
    // 더하기, 마이너스를 연산한다.
    for (var i = 0; i < pos.length; i++) {
        if(str.charAt(pos[i])=='+'){
            num[i] = num[i]+num[i+1];
            // 연산한 숫자를 없애준다.
            num.splice(i+1,1);
            // 연산에 쓰인 연산자를 없애준다.
            pos.splice(i,1);
            // 없어진 숫자만큼 i를 정체시켜준다.
            i--;
        }
        else if(str.charAt(pos[i]) == '-'){
            num[i] = num[i]-num[i+1];
            // 연산한 숫자를 없애준다.
            num.splice(i+1,1);
            // 연산에 쓰인 연산자를 없애준다.
            pos.splice(i,1);
            // 없어진 숫자만큼 i를 정체시켜준다.
            i--;
        }
    }

    if(num[0] - parseInt(num[0]) >= -0.00000001 && num[0] - parseInt(num[0]) <= 0.00000001){
        num[0] = parseInt(num[0]);
    }
    zz.value = num[0];
});

arr[12].addEventListener('click', function () { // +
    // input 요소가 빈 값이라면 함수를 종료한다.
    if (zz.value.length == 0) {
        return;
    }

    // 직전에 연산자가 있으면 함수를 종료시킨다.
    for (var i = 0; i < 4; i++) {
        if (zz.value.charAt(zz.value.length - 1) == op[i]) {
            return;
        }
    }
    zz.value += arr[12].innerText;
});

arr[13].addEventListener('click', function () { // -
    // input 요소가 빈 값이라면 함수를 종료한다.
    if (zz.value.length == 0) {
        return;
    }

    // 직전에 연산자가 있으면 함수를 종료시킨다.
    for (var i = 0; i < 4; i++) {
        if (zz.value.charAt(zz.value.length - 1) == op[i]) {
            return;
        }
    }
    zz.value += arr[13].innerText;
});

arr[14].addEventListener('click', function () { // ×
    // input 요소가 빈 값이라면 함수를 종료한다.
    if (zz.value.length == 0) {
        return;
    }

    // 직전에 연산자가 있으면 함수를 종료시킨다.
    for (var i = 0; i < 4; i++) {
        if (zz.value.charAt(zz.value.length - 1) == op[i]) {
            return;
        }
    }

    zz.value += arr[14].innerText;
});

arr[15].addEventListener('click', function () { // ÷
    // input 요소가 빈 값이라면 함수를 종료한다.
    if (zz.value.length == 0) {
        return;
    }

    // 직전에 연산자가 있으면 함수를 종료시킨다.
    for (var i = 0; i < 4; i++) {
        if (zz.value.charAt(zz.value.length - 1) == op[i]) {
            return;
        }
    }

    zz.value += arr[15].innerText;
});

arr[16].addEventListener('click', function () { // AC
    zz.value = "";
});
