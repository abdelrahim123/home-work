$(function(){
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
});
var navBar=document.getElementById('navBar'),
    Eshraqa=document.getElementById('Eshraqa');
window.onscroll=function(){
    if(window.pageYOffset>=300){
        Eshraqa.style.color="#E41B17";
        navBar.style.position='fixed' ;
        navBar.style.top='0';
        navBar.style.backgroundColor='#000';
        navBar.style.opacity=".8";
        
    }else{
        Eshraqa.style.color="#FFF";
        navBar.style.backgroundColor='transparent';
        navBar.style.position='fixed' ;
        navBar.style.top='30px';
        navBar.style.transition=".5s"
    }
};

