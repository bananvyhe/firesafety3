<template>
  <div  class="mainmenu">
    <div v-if="switcher">menuwidth: {{menuwidth.value}}<br>av space: {{availableSpace.value}}<br>vlink: {{vlinks.value}}<br>menuitemsHide: {{numHide}}<br>menuitemsVis: {{numVis}}
    </div>
    <nav  class='greedy-nav font3' >
      <button v-if="menuitemsHide.length > 0"  v-bind:style="styleObject"><div class="hamburger" ></div>
      </button>
      <ul class='visible-links'>
        <li v-for="menuitem in menuitems" ><a href=""><nobr>{{menuitem.title.toUpperCase()}}</nobr></a></li>
        </li>
      </ul>
      <ul class='hidden-links hidden'></ul>
    </nav> 
  </div>
</template>

<script>
  let menuwidth = {value:  ''};
  let availableSpace = {value:  ''};
  let vlinks = {value:  ''};
  export default {
    data: function () {
      return {
        //выключатель показа индикации служебной информации
        switcher: false,
        //
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
        menuitemsHide: [],
        styleObject: {
          backgroundColor: 'red',
          fontSize: '13px' 
        }
      }
    },

    computed: {
      numHide:  function () {
        // если длина меню с видимыми пунктами больше значения доступного пространства и количество имеющихся пунктов в массиве больше 1   
        if (this.vlinks.value > this.availableSpace.value && this.menuitems.length >1 && this.vlinks.value - this.availableSpace.value > 30) { 
          // пушим последний пункт из массива с видимыми пунктами меню в массив для скрытых пунктов
          this.menuitemsHide.push(this.menuitems[this.menuitems.length - 1]);
          // удаляем последний пункт из массива с отображаемыми пунктами меню
          this.menuitems.pop();
        }
        return this.menuitemsHide
        
      },
      numVis: function () {
        if (this.vlinks.value < this.availableSpace.value && this.menuitemsHide.length >0 && this.availableSpace.value - this.vlinks.value > 350) {
          this.menuitems.push(this.menuitemsHide[this.menuitemsHide.length - 1]);
          this.menuitemsHide.pop(); 
        }
        return this.menuitems
      }
    },
    // вотчер палит изменения происходящие в скрытых меню и обновляет ширингу видимых меню для дальнейшей работы условий в скрипте по переносу пунктов
    //устанавливает апфтер-аттрибут на кнопку с отображением количества позиций в массиве скрытых пунктов меню
    watch: {
      menuitemsHide: function () {
        let vlinks1 = document.querySelector(".greedy-nav .visible-links");
        vlinks.value = vlinks1.offsetWidth;
        let btn = document.querySelector(".greedy-nav button");
        btn.setAttribute("count", this.menuitemsHide.length);
      }
    }
  }

  function parseCalc () {
    let hlinks = document.querySelector(".greedy-nav .hidden-links");
    let btn = document.querySelector(".greedy-nav button");
    let vlinks1 = document.querySelector(".greedy-nav .visible-links");
    let menuwidth1 = document.querySelector(".greedy-nav");
    vlinks.value = vlinks1.offsetWidth;
    menuwidth.value = menuwidth1.offsetWidth;
    availableSpace.value = menuwidth1.offsetWidth   - 90;

  }
  // передаваемое значение во вью в виде обьекта для поддержания реактивной связи
  window.onload = function () {
    parseCalc();
  }

  window.onresize = function(event) {
    parseCalc();
  }

// setTimeout(function(){
//       $('.tel').css('visibility', 'visible').addClass('slideUpReturn');
// }, 1300);
 
</script>

<style scoped>
.mainmenu {
  background-color: $color-5;
  padding: 6px;
  border-bottom: 5px solid $color-6;
}
.greedy-nav { 
  background-color: #ada;
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
    background-color: #dad;
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