<template>
  <div class="mainmenu"><div>menuwidth: {{menuwidth.value}}<br>av space: {{availableSpace.value}}<br>vlink: {{vlinks.value}}<br>breaks: {{num}}</div>
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


// передаваемое значение во вью в виде обьекта для поддержания реактивной связи
let menuwidth = {value:  ''};
let availableSpace = {value:  ''};
let vlinks = {value:  ''};
 
 

export default {
  data: function () {
    return {
      menuwidth: menuwidth,
      availableSpace: availableSpace,
      vlinks: vlinks,
      menuitems: [
        { title: 'главная', url: ''},
        { title: 'о нас', url: ''},
        { title: 'противопожарные системы', url: ''},
        { title: 'видеонаблюдение', url: ''},
        { title: 'контроль доступа', url: ''},
      ],
      menuitemsHide: []
    }
  },

  computed: {
    num:  function () {
      window.onresize = function(event) {
        let hlinks = document.querySelector(".greedy-nav .hidden-links");
        let btn = document.querySelector(".greedy-nav button");
        let vlinks1 = document.querySelector(".greedy-nav .visible-links");
        let menuwidth1 = document.querySelector(".greedy-nav");
        vlinks.value = vlinks1.offsetWidth;
        menuwidth.value = menuwidth1.offsetWidth;
        availableSpace.value = btn.classList.contains('hidden') ? menuwidth1.offsetWidth : menuwidth1.offsetWidth - btn.offsetWidth - 90;
      }
      // если длина меню с видимыми пунктами больше значения доступного пространства   
      if (this.vlinks.value > this.availableSpace.value && this.menuitems.length >1) { 
        // пушим последний пункт из массива с видимыми пунктами меню в массив для скрытых пунктов
        this.menuitemsHide.push(this.menuitems[this.menuitems.length - 1]);
        // удаляем последний пункт из массива с отображаемыми пунктами меню
        this.menuitems.pop(); 
      } else if (this.vlinks.value < this.availableSpace.value && this.menuitemsHide.length >0) { 
        // аналогично трансфер значений из массива в массив обратно 
        this.menuitems.push(this.menuitemsHide[this.menuitemsHide.length - 1]);
        this.menuitemsHide.pop(); 
      } else {
        console.log('wide');
      };
      return this.menuitemsHide
      console.log('breaks');
      
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