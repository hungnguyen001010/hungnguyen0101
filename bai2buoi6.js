function validateForm(){
    var ho = document.getElementById('ho').value;
    var ten = document.getElementById('ten').value;
    var sodienthoai = document.getElementById('sodienthoai').value;
    if (ho === '' || ten === '' || soDienThoai === '' || ngay === '' || thang === '' || nam === '') {
        alert('Vui lòng điền đầy đủ thông tin.');
        return false;
    }
    
    if (soDienThoai.length !== 10 || isNaN(soDienThoai)) {
        alert('Số điện thoại không hợp lệ.');
        return false;
    }

    return true; 
}