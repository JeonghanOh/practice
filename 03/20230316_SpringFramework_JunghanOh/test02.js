// 가입 필수항목 여러개가 제대로 작성되어있다면 각각 1을 넣어주고 아니면 null 혹은 0을 넣어준다.
var chk = [];

// 포커스가 해제 되었을 때 실행하는 함수
function OnBlur(id, id2) {
    var doc = document.getElementById(id);
    var doc2 = document.getElementById(id2);


    //텍스트박스에 빈칸인 경우
    if (doc2.value == "" && id2 != 'textbox6' && id2 != 'textbox6_2' && id2 != 'selectBox') {
        doc.innerHTML = "필수 정보입니다.";
        doc.style = "color:red";
    }
    else { //텍스트박스에 값이 들어있는 경우
        if (id2 == 'textbox1') { // 아이디를 입력받는 텍스트박스인 경우
            input_id();
        }
        else if (id2 == 'sb1') { // 성별을 선택받는 셀렉트박스일 때
            input_gender();
        }
        else if (id2 == 'textbox10') { // 전화번호를 입력받는 텍스트박스인 경우
            input_phone();
        }
        else if (id2 == 'textbox11') { // 인증번호를 입력받는 텍스트박스인 경우
            input_certiNum();
        }
        else if (id2 == 'textbox5') {  // 이름을 입력받는 텍스트박스인 경우
            input_name();
        }
        else if (id2 == 'textbox6') { // 생년을 입력받는 텍스트박스인 경우
            input_birthday();
        }
        else if (id2 == 'textbox6_2') { // 일을 입력받는 텍스트박스인 경우
            input_birthday();
        }
        else if (id2 == 'selectBox') { // 월을 입력받는 텍스트박스인 경우
            input_birthday();
        }
        else if(id2 == 'textbox8'){ // 이메일을 입력받는 텍스트박스인 경우
            input_email();
        }
    }
}

// 생년월일 입력란+셀렉트박스
function input_birthday() {
    // 경고창을 띄우기 위한 doc
    var doc = document.getElementById('pilsu5');

    var reg = /^[0-9]+$/;
    // 텍스트박스 년도에 들어간 값
    var years = document.getElementById('textbox6').value;
    // 셀렉트박스 월에 들어간 값
    var months = document.getElementById('selectBox').value;
    // 텍스트박스 일에 들어간 값
    var date = document.getElementById('textbox6_2').value;
    // 년도,월,일이 제대로된 값이 아니면 -1 제대로된 값이면 다른 값이 된다.
    var x = -1, y = -1, z = -1;

    // 입력받은 일과 정규식이 매칭하는지 체크한다.
    if (date.match(reg)) {
        z = parseInt(date);
    }
    else {
        doc.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
        doc.style = "color:red";
    }

    // 입력받은 월과 정규식이 매칭하는지 체크한다.
    if (months.match(reg)) {
        y = parseInt(months) - 1;
    }
    else {
        doc.innerHTML = "태어난 월을 선택하세요.";
        doc.style = "color:red";
    }

    // 입력받은 년과 정규식이 매칭하는지 체크한다.
    if (years.match(reg)) {
        x = parseInt(years);
    }
    else {
        doc.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
        doc.style = "color:red";
    }

    // 생년월일 모든 칸에 제대로된 입력을 받은 경우
    if (x != -1 && y != -1 && z != -1) {
        doc.innerHTML = "";
        // true 라는 뜻으로 1을 셋팅한다.
        chk[4] = 1;
    }
}

// 이름 입력란
function input_name() {
    // 경고창을 띄우기 위한 doc
    var doc = document.getElementById('pilsu4');
    // 텍스트박스의 doc2
    var doc2 = document.getElementById('textbox5');

    var regExp = /^[가-힣a-zA-Z]+$/;

    // 이름이 올바르다면
    if (doc2.value.match(regExp)) {
        chk[3] = 1;
        doc.innerHTML = "";
    }
}

// 인증번호 입력란
function input_certiNum() {
    // 경고창을 띄우기 위한 doc
    var doc = document.getElementById('pilsu6');
    // 텍스트박스의 doc2
    var doc2 = document.getElementById('textbox11');

    // 인증번호를 제대로 입력받은 경우
    if (doc2.value == 123456) {
        doc.innerHTML = "";
        chk[7] = 1;
    }
}

// 휴대폰 입력란
function input_phone() {
    // 경고창을 띄우기 위한 doc
    var doc = document.getElementById('pilsu6');
    // 텍스트박스의 doc2
    var doc2 = document.getElementById('textbox10');

    var regExp = /^\d{3}-?\d{3,4}-?\d{4}$/;

    // 휴대폰 번호가 올바르다면
    if (doc2.value.match(regExp)) {
        doc.innerHTML = "";
        chk[6] = 1;
    }
}

// 성별 셀렉트박스
function input_gender() {
    // 경고창을 띄우기 위한 doc
    var doc = document.getElementById('pilsu7');
    // 셀렉트박스의 doc2
    var doc2 = document.getElementById('sb1');

    // 셀렉트박스에서 현재 선택된 부분인 '성별'이라면
    if (doc2.value == '성별') {
        doc.innerHTML = "필수 정보입니다.";
        doc.style = "color:red";
    }
    // 성별 이외의 선택지를 선택했다면
    else {
        doc.innerHTML = "";
        chk[5] = 1;
    }
}

// 아이디 입력란
function input_id() {
    // 경고창을 띄우기 위한 doc
    var doc = document.getElementById('pilsu');
    // 텍스트박스의 doc2
    var doc2 = document.getElementById('textbox1');

    var regExp = /^[a-z0-9_-]{5,20}$/;

    // 아이디가 올바르다면
    if (doc2.value.match(regExp)) {
        chk[0] = 1;
        doc.innerHTML = "멋진 아이디네요!";
        doc.style = "color:green";
    }
    // 아이디가 올바르지 않다면
    else {
        doc.innerHTML = "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
        doc.style = "color:red";
    }
}

// 올바른 패스워드인지 확인한다.
function chkPassword() {
    // 텍스트박스의 doc
    var doc = document.getElementById('textbox3');
    var reg = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    // 비밀번호가 올바르지 않다면
    if (doc.value.match(reg) == null) {
        // 경고창을 띄우기 위한 doc2
        var doc2 = document.getElementById('pilsu2');
        doc2.innerHTML = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
        doc2.style = "color:red";

        // 자물쇠 표시를 바꿔준다.
        var doc3 = document.getElementById('lock1Img');
        doc3.src = "lock3_1.png"
    }
    // 비밀번호가 올바르다면
    else {
        // 자물쇠 표시를 바꿔준다.
        var doc3 = document.getElementById('lock1Img');
        doc3.src = "lock2_1.png"

        // 경고창에 공란
        var doc2 = document.getElementById('pilsu2');
        doc2.innerHTML = "";

        chk[1] = 1;
    }
}

// 비밀번호 확인을 수행한다.
function equalsPassword() {
    // 텍스트박스의 doc
    var doc = document.getElementById('textbox3');
    // 텍스트박스의 doc2
    var doc2 = document.getElementById('textbox4');

    //비밀번호가 일치한다면
    if (doc.value == doc2.value) {
        // 경고창이 공란
        var doc3 = document.getElementById('pilsu3');
        doc3.innerHTML = ""
        // 자물쇠 표시를 바꿔준다.
        var doc4 = document.getElementById('lock2Img');
        doc4.src = "lock2_2.png"

        chk[2] = 1;
    }
    // 비밀번호가 일치하지 않는다면
    else {
        // 경고창을 띄우기 위한 doc
        var doc3 = document.getElementById('pilsu3');
        doc3.innerHTML = "비밀번호가 일치하지 않습니다."
        doc3.style = "color:red";
    }
}

// 인증번호 받기 버튼을 눌렀을 때
function certiNumber() {
    input_phone();
    // 전화번호 입력이 비정상적이라면
    if(chk[6] != 1){
        alert("전화번호를 입력해주세요.");
        return;
    }

    // 인증번호를 알려준다.
    alert("123456");

    var doc = document.getElementById('textbox11');

    // 인증번호를 알게된 경우 텍스트박스를 활성화 시켜준다.
    doc.disabled = false;
}

// 이메일 입력란
function input_email(){
    // 경고창을 띄우기 위한 doc
    var doc = document.getElementById('pilsu8');
    // 텍스트박스의 doc2
    var doc2 = document.getElementById('textbox8');

    var regExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;

    // 이메일이 올바르다면
    if(doc2.value.match(regExp)){
        // 경고창을 비워준다.
        doc.innerHTML="";
    }
    else{
        // 경고창
        doc.innerHTML="이메일 주소를 다시 확인해주세요.";
        doc.style="color:red";
    }
}

// 가입하기 버튼을 눌렀을 때
function gaibhagi() {
    // 다음 함수들은 chk배열을 업데이트 하기 위해 실행한다
    equalsPassword();
    chkPassword();
    input_birthday();
    input_name();
    input_certiNum();
    input_phone();
    input_id();
    input_gender();

    // chk[i] != 1인 경우 입력이 비정상인 경우다.
    for (var i = 0; i < 8; i++) {
        if (chk[i] != 1) {
            alert("입력을 하지 않은 항목이 있습니다.");
            return;
        }
    }
    // 모든 입력이 정상적으로 완료되었다면 test03로 넘어간다.
    location.href = 'test03.html';

    // chk를 초기화 해준다.
    for (var i = 0; i < 8; i++) {
        chk[i] = 0;
    }
}