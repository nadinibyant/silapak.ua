let btnBuy = document.querySelector('.btnBuy');

btnBuy.addEventListener('click', function(){
    window.open("https://wa.me/message/V4CQNQ7WBRO6B1");
});

let btnMulai = document.querySelector('.btnMulai');

btnMulai.addEventListener('click', function(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Go To Product Menu',
        showConfirmButton: true,
        timer: 1500
    })
})