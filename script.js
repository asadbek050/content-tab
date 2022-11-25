"use strict";

 // user blog
 const userMenuToggle = document.getElementById('menu-shadow'),
 userContainerToggle = document.querySelector('.user-container');
 
 userMenuToggle.addEventListener('click', function(){
      userMenuToggle.classList.toggle('user-menu-toggle');
      userContainerToggle.classList.toggle('user-container-toggle');
 });



 // loaded
 // const loadedSection = document.querySelector('.loaded-section');
 // setTimeout(function(){
 //      loadedSection.style.opacity = '0';
 //      setTimeout(function(){
 //           loadedSection.style.display = 'none'
 //      },500)
 // },2000);

 //tab project

 const tabMenu = document.querySelector('.tab-menu');
 const tabLink = document.querySelectorAll('.tab-link');
 const tabComment = document.querySelectorAll('.tab-comment');
 const textActive = document.querySelectorAll('#text-active');


 function hiddinComment(){
      tabComment.forEach(function(item){
           item.style.display = 'none';
      });

      tabLink.forEach(function(item){
           item.classList.remove('tab-active');
      });
 }


 function showComment(index = 0){
      tabComment[index].style.display = 'block';
      tabLink[index].classList.add('tab-active');
 };

 hiddinComment();
 showComment();


 tabMenu.addEventListener('click' , function(event){
      const target = event.target;
      if(target && target.classList.contains('tab-link')){
           tabLink.forEach(function(item , index){
                if(target == item){
                     hiddinComment();
                     showComment(index);
                     textActive[index].classList.add('text-active');
                };
           });
      };
 });                                                                             


 // tab navbar
 const navbartabContent = document.querySelector('.navbartab-content');
 const linkToggle = document.querySelectorAll('.link-toggle');

 function removeTabNavbar(){
      linkToggle.forEach(function(item){
           item.classList.remove('navbartab-links-toggle')
      })
 }

 function addTabNavbar(index = 0){
      linkToggle[index].classList.add('navbartab-links-toggle')
 }

 addTabNavbar()

 navbartabContent.addEventListener('click' , function(e){
      const target = e.target
      if(target && target.classList.contains('link-toggle')){
           linkToggle.forEach(function(item , index){
                if(target == item){
                     removeTabNavbar()
                     addTabNavbar(index)
                }
           })
      }

 })

