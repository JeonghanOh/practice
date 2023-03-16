// 1번째 체크박스에 동의를 해주면 밑에 4개의 체크박스도 동의를 활성화 시켜준다.
// 1번째 체크박스에 체크를 풀어주면 밑에 4개의 체크박스도 동의를 비활성화 시킨다.
// 1번째 체크박스를 눌렀을 경우
function selectAll() {
    // 1번째 체크박스 아이디 chk1의 document이다. 
    var chk1 = document.getElementById('chk1');

    const checkboxes = document.getElementsByName('clause');

    // str에 1번째 체크박스 이미지의 경로를 저장한다.
    var str = chk1.src;

    // 2번째~5번째까지의 체크박스를 순회한다.
    checkboxes.forEach((checkbox) => {
        // 1번째 체크박스가 체크되어 있다면 전체 체크박스를 활성화 시킨다.
        if (str != "http://127.0.0.1:5500/03/20230316_SpringFramework_JunghanOh/checkOn.png") {
            chk1.src = "checkOn.png";
            checkbox.src = "checkOn.png";
        }
        // 1번째 체크박스가 체크되지 않았다면 전체 체크박스를 비활성화 시킨다.
        else {
            chk1.src = "checkOff.png";
            checkbox.src = "checkOff.png";
        }
    })
}

// 2번째 체크박스~5번째 체크박스까지 모두 체크 되어 있을 경우 1번째 체크박스를 체크해준다.
// 2번째 체크박스~5번째 체크박스까지 중 동의 되어 있지 않는 것이 있다면 1번째 체크박스를 비활성화 시켜준다.
// select 는 2번째 체크박스~5번째 체크박스 중 하나이다.
// 2~5체크박스 중 하나를 클릭 했을 경우
function fnForChk1(select) {
    // 1번째 체크박스의 document
    var chk1 = document.getElementById('chk1');

    // 클릭을 했기 때문에 해당 체크박스의 이미지 경로가 체크 비활성화 인 경우에는 체크처리 해준다.
    if (select.src == "http://127.0.0.1:5500/03/20230316_SpringFramework_JunghanOh/checkOff.png") {
        select.src = "checkOn.png";
    }
    // 클릭을 했기 때문에 해당 체크박스의 이미지 경로가 체크인 경우 비활성화 해준다.
    else{
        select.src = "checkOff.png";
        chk1.src = "checkOff.png";
    }

    // 2~5번째 체크박스이다.
    const checkboxes = document.getElementsByName('clause');

    // 2~5 체크박스 중 비활성화 된게 있다면 cnt를 증가시켜준다.
    var cnt = 0;
    checkboxes.forEach((checkbox) => {
        if (checkbox.src == "http://127.0.0.1:5500/03/20230316_SpringFramework_JunghanOh/checkOff.png")
            cnt++;
    })

    // 2~5 모두 체크되어 있다면
    if (cnt == 0)
        // 1번째 체크박스를 활성화 시켜준다.
        chk1.src = "checkOn.png";
}

// 필수 약관에 동의가 되어 있다면 다음 가입페이지로 넘어가는 함수
function next(){
    // 2~5번째 체크박스이다.
    const checkboxes = document.getElementsByName('clause');

    var indx=0;
    var cnt=0;
    checkboxes.forEach((checkbox)=>{
        // 2~3번째 체크박스는 필수이기 때문에 두개가 체크되어 있는지 확인한다. 되어있으면 cnt를 증가시켜준다.
        if(indx==0 || indx==1){ 
            if (checkbox.src == "http://127.0.0.1:5500/03/20230316_SpringFramework_JunghanOh/checkOn.png"){
                cnt++;
            }
        }

        indx++;
    })

    // 필수가 모두 체크되어있다면
    if(cnt == 2){
        // 다음페이지로 넘어간다.
        location.href='test02.html';
    }

}