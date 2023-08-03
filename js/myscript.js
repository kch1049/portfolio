window.addEventListener('load',()=>{
    const prevBtn = document.querySelector(".prev-next");
    const nextBtn = document.querySelector(".prev-next2");
    const slider = document.getElementsByClassName('project-li');
    let result = 0;

    prevBtn.addEventListener('click',function(){
        if(result<=0){
            result = 0;
        }
        else{
            result--;
        }
        for(let idx=0;idx<=slider.length-1;idx++){
            slider[idx].style.opacity='0'
            slider[idx].style.zIndex='0'
        }
        slider[result].style.opacity='1'
        slider[result].style.zIndex='1'
    })
    nextBtn.addEventListener('click',function(){
        if(result>= slider.length-1){
            result = slider.length-1;
        }else{
            result++;
        }
        for(let idx=0;idx<=slider.length-1;idx++){
            slider[idx].style.opacity='0'
            slider[idx].style.zIndex='0'
        }
        slider[result].style.opacity='1'
        slider[result].style.zIndex='1'
    })
    const _btnNav = document.querySelector(".btn-nav")
    const _header = document.querySelector(".header")

    // flat는 -1:안보이는것 1:보이는것
    let flag=-1;
    _btnNav.addEventListener('click',function(){
        // _header.classList.toggle('active')
        
        if(flag==-1){
            // 보이는것으로 변경
            _header.style.transform='translate(0, -50%)';
            flag=1;

        }else{
            // 보이지않는것
            _header.style.transform='translate(calc(-100% + 35px), -50%)';
            flag=-1;
        }
    })
    setTimeout(function(){
    document.querySelector('.kch').classList.add('active');
     },1300)
    
});
  
$(function(){
    $(window).scrollTop(0);

    $('.btn-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    }); 

    $(document).scroll(function(){
        let sec04Ost = $('.sec04').offset().top+200
        let docScrTop = $(document).scrollTop();
        if(docScrTop >= sec04Ost-$(window).height()){
            $('.sec04-list span').addClass('active');
        }else{
            $('.sec04-list span').removeClass('active');
        }
    })

    $('.popup-a').click(function(){
        $('.popup').addClass('active');
        return false;
    })
    $('.pop-btn').click(function(){
        $('.popup').removeClass('active');
        return false;
    })
 
})