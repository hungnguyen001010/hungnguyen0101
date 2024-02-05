function validateForm(){
    var ho = document.getElementById('ho').value;
    var sdt = document.getElementById('sdt').value;
    var email = document.getElementById('email').value;
    var tinnhan = document.getElementById('tinnhan').value
    if(ho === "" || sdt === "" || email === "" || tinnhan === ""){
        alert("Vui lòng điền đầy đủ thông tin");
        return false;
    }
    if(sdt.length !== 10 || isNaN(sdt)){
        alert("Số điện thoại không hợp lệ");
        return false;
    }
    return true;
}

var menuToggle = document.getElementById('menu-toggle');
var menuList = document.getElementById('menu-list');
menuToggle.addEventListener('click', function() {
    if (menuList.classList.contains('active')) {
        menuList.classList.remove('active');
    } else {
        menuList.classList.add('active');
    }
});
