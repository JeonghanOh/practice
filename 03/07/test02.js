// 첫번째 체크박스에 동의를 해주면 밑에 4개의 체크박스도 동의를 활성화 시켜준다.
// 첫번째 체크박스에 체크를 풀어주면 밑에 4개의 체크박스도 동의를 비활성화 시킨다.
function selectAll() {
    var chk1 = document.getElementById('chk1');

    const checkboxes = document.getElementsByName('clause');

    var str = chk1.src;

    checkboxes.forEach((checkbox) => {
        if (str != "http://127.0.0.1:5500/03/07/checkOn.png") {
            chk1.src = "checkOn.png";
            checkbox.src = "checkOn.png";
        }
        else {
            chk1.src = "checkOff.png";
            checkbox.src = "checkOff.png";
        }
    })
}

// 두번째 체크박스부터 모두 동의 되어 있을 경우 가장 위 체크박스에 동의를 활성화 시켜준다.
// 두번째 체크박스부터 동의 되어 있지 않는 것이 있다면 가장 위 체크박스의 동의를 비활성화 시켜준다.
function fnForChk1(select) {
    var chk1 = document.getElementById('chk1');
    if (select.src == "http://127.0.0.1:5500/03/07/checkOff.png") {
        select.src = "checkOn.png";
    }
    else{
        select.src = "checkOff.png";
        chk1.src = "checkOff.png";
    }

    const checkboxes = document.getElementsByName('clause');

    var cnt = 0;
    checkboxes.forEach((checkbox) => {
        if (checkbox.src == "http://127.0.0.1:5500/03/07/checkOff.png")
            cnt++;
    })

    if (cnt == 0)
        chk1.src = "checkOn.png";
}

// 필수 약관에 동의가 되어 있다면 다음 가입페이지로 넘어가는 함수
function next(){
    const checkboxes = document.getElementsByName('clause');

    var indx=0;
    var cnt=0;
    checkboxes.forEach((checkbox)=>{
        if(indx==0 || indx==1){ 
            if (checkbox.src == "http://127.0.0.1:5500/03/07/checkOn.png"){
                cnt++;
            }
        }

        indx++;
    })

    if(cnt == 2){
        location.href='test03.html';
    }

}