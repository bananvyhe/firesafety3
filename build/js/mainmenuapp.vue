<template>
  <div class="mainmenu"><div>menuwidth: {{nav.value}}<br>av space: {{availableSpace.value}}<br>vlink: {{vlinks.value}}<br>breaks: {{num}}</div>
    <nav class='greedy-nav font3'>
      <button><div class="hamburger"></div></button>
      <ul class='visible-links'>
        <li v-for="menuitem in menuitems" ><a href="">{{menuitem.title.toUpperCase()}}</a></li>
        </li>
      </ul>
      <ul class='hidden-links hidden'></ul>
    </nav> 
  </div>
</template>

<script>

let hlinks = document.querySelector(".greedy-nav .hidden-links");

// передаваемое значение во вью в виде обьекта для поддержания реактивной связи
let menuwidth = {value:  ''};
let availableSpace = {value:  ''};
let vlinks = {value:  ''};
 
function resize () {
  let nav = document.querySelector(".greedy-nav");
  let btn = document.querySelector(".greedy-nav button");
  vlinks = document.querySelector(".greedy-nav .visible-links");

  window.onresize = function(event) {
    
    // вычисляет ширину главного меню от краев браузера в пикселах
    menuwidth.value = nav.offsetWidth;
    // вычисляет ширину списка видимых пунктов
    vlinks.value = vlinks.offsetWidth;

    // вычисляет свободное место для пунктов без учета кнопки в пикселях
    availableSpace.value = btn.classList.contains('hidden') ? nav.offsetWidth : nav.offsetWidth - btn.offsetWidth - 30;

     
     
    console.log(menuwidth.value);
    console.log(availableSpace.value);
    console.log(vlinks.value);
  };
} 
resize();

export default {
  data: function () {
    return {
      nav: menuwidth,
      availableSpace: availableSpace,
      vlinks: vlinks,
       
      //массив для хранения длины "вырезанных" пунктов меню, находящимихя первыми в списке массива и для получения из индекса кол-во видимых пунктов
      
      menuitems: [
        { title: 'главная', url: ''},
        { title: 'о нас', url: ''},
        { title: 'противопожарные системы', url: ''},
        { title: 'видеонаблюдение', url: ''},
        { title: 'контроль доступа', url: ''},
      ]
    }
  },
  computed: {
    num: {
      get: function () {
        if(this.vlinks.value > this.availableSpace.value) { 
        return this.nav
        };
        console.log('breaks');
      }
    }
  }
}

// setTimeout(function(){
//       $('.tel').css('visibility', 'visible').addClass('slideUpReturn');
// }, 1300);

//console.log(btn);
// function updateNav() {
//   let availableSpace = btn.classList.contains('hidden') ? nav.offsetWidth : nav.offsetWidth - btn.offsetWidth - 30;
// console.log(availableSpace);

// // The visible list is overflowing the nav
// if(vlinks.offsetWidth > availableSpace) {

//   // Record the width of the list
//   breaks.push(vlinks.offsetWidth);

//   // Move item to the hidden list
//   vlinks.insertBefore(hlinks, parent.firstChild);

//   // Show the dropdown btn
//   if(btn.classList.contains('hidden')) {
//     btn.remove('hidden');
//   }

// // The visible list is not overflowing
// } else {

//   // There is space for another item in the nav
//   if(availableSpace > breaks[breaks.length-1]) {

//     // Move the item to the visible list
//     hlinks.children().first().appendTo(vlinks);
//     breaks.pop();
//   }

//   // Hide the dropdown btn if hidden list is empty
//   if(breaks.length < 1) {
//     btn.classList.add('hidden');
//     hlinks.classList.add('hidden');
//   }
// } 

//   // Keep counter updated
//   btn.setAttribute("count", breaks.length);

//   // Recur if the visible list is still overflowing the nav
//   if(vlinks.width > availableSpace) {
//     updateNav();
//   }

// }
// updateNav(); 


</script>

<style scoped>
.mainmenu {
  background-color: $color-5;
  padding: 6px;
  border-bottom: 5px solid $color-6;
}
.greedy-nav {
  text-align: center;
  position: relative;
  font-family: "UbuntuR"; 
  font-style: normal;
  font-weight: 400;
  font-style: bold;
  background-color: $color-5;   
  
  a {
    display: block;
    padding: 10px 30px;
    color: $color-1;
    text-decoration: none;
    &:hover {
      color: $color-3;
    }
  }
  
  button {
    position: absolute;
    height: 100%;
    right: 0;
    padding: 0 15px;
    border: 0;
    outline: none;
    background-color: $color-2;
    color: #fff;
    cursor: pointer;
      &:hover {
      background-color: $color-3;
    }
    
    &::after {
      content: attr(count);
      position: absolute;
      width: 22px;
      height: 22px;
      left: -16px;
      top: 5px;
      text-align: center;
      background-color: $color-3;
      color: #fff;
      font-size: 13px;
      line-height: 22px;
      border-radius: 50%;
      border: 2px solid #fff;
      font-weight: bold;
    }
  
    &:hover::after {
      transform: scale(1.075);
    }
  }
  
  .hamburger {
    position: relative;
    width: 32px;
    height: 4px;
    background: #fff;
    margin: auto;
    
    &:before, 
    &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 32px;
      height: 4px;
      background: #fff;
    }
    
    &:before {
      top: -8px;
    }
    
    &:after {
      bottom: -8px;
    }
  }
  
  .visible-links {
    height: 3em;
    display: inline-table;
    :first-child {
      border-left: 0px;
    }
    li { vertical-align: middle;
      line-height: 1.2em;
      display: table-cell;
      border-left: 1px solid $color-1; 
    }
  }
  
  .hidden-links {
    position: absolute;
    right: 0px;
    top: 100%;
    padding-top: 12px;
        margin-right: -6px;
    li {
      display: block;
      border-top: 1px solid $color-1;
      background-color: $color-5;
      padding: 6px;
    }
  }
  
  .visible-links li:first-child {
    font-weight: bold;
    a { color: $color-1 !important; }
  }
  
  .hidden {
    visibility: hidden;
  }
}
</style>