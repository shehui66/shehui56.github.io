//Initialize Swiper

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next'
    },
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
});



//音乐部分开始
var music=document.getElementById("music");
var musicBg=document.querySelector(".musicBg");
var musicImg=document.querySelectorAll(".musicImg")[0];
var audio=document.querySelector("audio");

var flag=1;
music.onclick=function(){
    if (flag==1){
        musicBg.style.display="none";
        musicImg.style.animation="none";
        audio.pause();//停止播放
        flag=0;
    }else {
        musicBg.style.display="block";
        musicImg.style.animation="music 1.5s linear infinite";
        audio.play();//开始播放
        flag=1;
    }
};
//音乐部分结束


