
let circle = document.getElementById('circle');
let body = document.getElementById('bdy');

circle.addEventListener('click',function(){
    body.classList.toggle("active");
    this.classList.toggle("rotate");
    if(this.classList.contains('rotate')){
        this.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }else{
        this.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
})