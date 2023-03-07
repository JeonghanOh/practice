function selectAll(){
    var chk1 = document.getElementById('chk1');

    const checkboxes = document.getElementsByName('clause');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = chk1.checked;
    })
}

function fnForChk1(select){
    var chk1 = document.getElementById('chk1');
    if(select.checked==false){
        chk1.checked=false;
    }

    const checkboxes = document.getElementsByName('clause');

    var cnt=0;
    checkboxes.forEach((checkbox) =>{
        if(checkbox.checked == false)
            cnt++;
    })

    if(cnt == 0)
        chk1.checked=true;
}