function validateForm(){
    const form = document.querySelector('.card');
    const firstNameInput = document.querySelector('#firstname');
    const surnameInput = document.querySelector('#surname');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#sdt');
    const messageInput = document.querySelector('#message');
    const submitButton = document.querySelector('#btndangnhap');

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  if (firstNameInput.value.trim() === '') {
    alert('Please enter your first name');
    return;
  }
  
  if (surnameInput.value.trim() === '') {
    alert('Please enter your surname');
    return;
  }
  
  if (emailInput.value.trim() === '') {
    alert('Please enter your email');
    return;
  }
  
  if (phoneInput.value.trim() === '') {
    alert('Please enter your phone number');
    return;
  }
  
  if (messageInput.value.trim() === '') {
    alert('Please enter your message');
    return;
  }
  
});

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

const image1 = document.querySelector('img[src="anh1.jpg"]');
const image2 = document.querySelector('img[src="anh4.jpg"]');

// Xử lý sự kiện khi người dùng nhấp chuột vào ảnh
image1.addEventListener('click', function() {
  image1.src = 'anh4.jpg';
});

image2.addEventListener('click', function() {
  image2.src = 'anh1.jpg';
});
