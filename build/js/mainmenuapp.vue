<template>
  <div>
    <div class="techinfo" v-show="switcher">menuwidth: {{menuwidth.value}}<br>av space: {{availableSpace.value}}<br>vlink: {{vlinks.value}}<br>menuitemsHide: {{numHide}}<br>menuitemsVis: {{numVis}}<br>compstylem: {{compstylem}}<br>switchhidestyle: {{switchhidestyle}} <br>toggle: {{toggle}}  <br>kostil: {{kostil}}
    </div>
    <nav  class='greedy-nav'  
      v-bind:style="styleObject"  
      ref="dropdown">
      <button 
        v-bind:class="{hoverhamburger: toggle}"  
        v-if="menuitemsHide.length > 0" 
        v-on:click="toggle = !toggle" 
        @mouseenter="toggle = true"
        >
        <div 
          v-bind:class="{hamshadow: toggle, hamshadow2: !toggle}"
          class="hamburger">
        </div>
      </button>
      <ul class='visible-links'>
        <li v-for="menuitem in menuitems">
          <a href=""><nobr>{{menuitem.title.toUpperCase()}}</nobr>
          </a>
        </li>
      </ul>
      <ul class='hidden-links' 
        v-bind:style="hiddenStyle"  
        @mouseleave="toggle = false" >
        <transition-group name="slide-in-top">
        <li v-for="(item, index) in kostil" 
          @mouseup="" 
          @click=""
          :key="index">
          <a href=""><nobr>{{item.title.toUpperCase()}}</nobr>
          </a>
        </li>
      </transition-group>
      </ul>
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
        hoverbutton: {},
        //выключатель показа индикации служебной информации
        toggle: false,
        switcher: true,
        menuwidth: menuwidth,
        availableSpace: availableSpace,
        vlinks: vlinks,
        menuitems: [
          { title: 'главная', url: ''},
          { title: 'о нас', url: ''},
          { title: 'противопожарные системы', url: ''},
          { title: 'видеонаблюдение', urs: ''},
          { title: 'контроль доступа', url: ''},
        ],
        menuitemsHide: [],
        styleObject: {},
        hiddenStyle: {},
        kostil: []
      }
    },
    created(){ 
      document.addEventListener('click', this.dropdown) 
    }, 
    destroyed () { 
      document.removeEventListener('click', this.dropdown) 
    },
    methods:{
      dropdown(e){ 
        let el = this.$refs.dropdown; 
        let target = e.target;
        if (el !== target && !el.contains(target)) 
        { 
          this.toggle = false;
        } 
      }
    },
    computed: {
      
      switchhidestyle: function(){
        if (this.toggle) {
          
          this.hiddenStyle = {
          visibility: 'visible'
          } 
          return this.hiddenStyle;
        }else{
          for (var i=0; i<this.kostil.length; i){
            this.kostil.pop(); 
          }
          this.hiddenStyle = {
          visibility: 'hidden'
          } 
          return this.hiddenStyle;
        }
      }, 
      //условия при видимости/невидимости гамбургер-кнопки
      compstylem: function () {
        if (this.menuitemsHide.length > 0) {
          this.styleObject = {
          backgroundColor: '#1d3557', 
          textAlign: 'right',
          paddingRight: '60px'
          } 
          return this.styleObject;
        }else{
          this.styleObject = {
          backgroundColor: '#1d3557',
          textAlign: 'center' 
          } 
          return this.styleObject;
        }
      },
      numHide: function () {
        // если длина меню с видимыми пунктами больше значения доступного пространства и количество имеющихся пунктов в массиве больше 1   
        if (this.vlinks.value > this.availableSpace.value && this.menuitems.length >1 && this.vlinks.value - this.availableSpace.value > 30) { 
          this.menuitemsHide.reverse();
          // пушим последний пункт из массива с видимыми пунктами меню в массив для скрытых пунктов
          this.menuitemsHide.push(this.menuitems[this.menuitems.length - 1]);
          this.menuitemsHide.reverse();
          // удаляем последний пункт из массива с отображаемыми пунктами меню
          this.menuitems.pop();
        }
        return this.menuitemsHide;
      },
      numVis: function () {
        if (this.vlinks.value < this.availableSpace.value && this.menuitemsHide.length >0 && this.availableSpace.value - this.vlinks.value > 300) {
          this.menuitemsHide.reverse();
          this.menuitems.push(this.menuitemsHide[this.menuitemsHide.length - 1]);
          this.menuitemsHide.pop(); 
          this.menuitemsHide.reverse();
        }
        return this.menuitems;
      }
    },
    // вотчер палит изменения происходящие в скрытых меню и обновляет ширингу видимых меню для дальнейшей работы условий в скрипте по переносу пунктов
    //устанавливает апфтер-аттрибут на кнопку с отображением количества позиций в массиве скрытых пунктов меню
    watch: {
      toggle: function(){
        var start = 0;
        var end = this.menuitemsHide.length;
        var self = this;
        myFunction ();
        function myFunction() {
          if (start == end) return;
          self.kostil.push(self.menuitemsHide[self.menuitemsHide.length - (start+1)]);
          start++;
          setTimeout (myFunction, 1000);
        }
        // var self = this;
        // if (this.toggle) {
          
        //   for (var i = 0; i < this.menuitemsHide.length; i++){
        //     (function(e) {
        //       setTimeout(function() {
        //         self.kostil.push(self.menuitemsHide[self.menuitemsHide.length - (e+1)]);
        //       }, 1000);
        //     })(i);      
        //   }
        // }
      },
      menuitemsHide: function () {
        let vlinks1 = document.querySelector(".greedy-nav .visible-links");
        vlinks.value = vlinks1.offsetWidth;
        if (this.menuitemsHide.length!=0) {
        let btn = document.querySelector(".greedy-nav button");
        btn.setAttribute("count", this.menuitemsHide.length);
        }
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
@import "../../app/assets/stylesheets/postcss/variables";

.slide-in-top-enter-active {
  animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}


.slide-enter-active {
  animation: slide-in-blurred-left 0.25s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  }
  @keyframes slide-in-blurred-left {
    0% {
      transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
      transform-origin: 100% 50%;
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      transform: translateX(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
  }

  .slide-leave-active {
    animation: slide-out-blurred-right 0.25s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
  }
  @keyframes slide-out-blurred-right {
    0% {
      transform: translateX(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
    100% {
      transform: translateX(1000px) scaleX(2) scaleY(0.2);
      transform-origin: 0% 50%;
      filter: blur(40px);
      opacity: 0;
    }
  }

.greedy-nav { 
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
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
  button {z-index: 2;
    position: absolute;
    height: 100%;
    right: 0;
    padding: 0 15px;
    border: 0;
    outline: none;
    background-color: $redorange;
    color: #fff;
    cursor: pointer;
    background: radial-gradient(circle farthest-corner at 50% 50%, $redorange 50%, color($redorange blackness(30%)) 100%);

      &::after {
        margin-top: -2.9em;
        padding-top: 0.1em;
        content: attr(count);
        position: absolute;
        width: 17px;
        height: 16px;
        left: -10px;
        text-align: center;
        background-color: color($redorange blackness(25%));
        color: #fff;
        font-size: 1em;
        border-radius: 50%;
        border: 2px solid #fff;
        font-weight: bold;
        transition: 1.2s cubic-bezier(0,.27,.07,1);
      }
      &:hover::after {
         
      }
    }
  .hoverhamburger {
    background: radial-gradient(circle farthest-corner at 50% 55%, $redorange 50%, color($redorange blackness(40%)) 100%);
    &:after { 
      transform:  scale(0.8) translateY(2.4em);
      transition: 1.2s cubic-bezier(0,.27,.07,1);
    }
  }
  .hamshadow {
    filter: drop-shadow(1px 1px 1px $onyx);
  }
    .hamshadow2 {
    filter: drop-shadow(1px 1px 1px grey);
  }
  .hamburger {z-index: 2;
    position: relative;
    width: 30px;
    height: 0.25em;
    background: #fff;
    margin: auto;
    border-radius: 0.1em;
    &:before, 
    &:after {
      border-radius: 0.1em;
      content: '';
      position: absolute;
      left: 0;
      width: 30px;
      height: 0.25em;
      background: #fff;
    }
    &:before {
      top: -0.6em;
    }
    &:after {
      bottom: -0.6em;
    }
  }
  .visible-links {
    z-index: 3;
    display: inline-table;
    :first-child {
      border-left: 0px;
    }
    li { vertical-align: middle;
      display: table-cell;
      border-left: 1px solid $color-1;
      line-height: 0.2em;
    }
  }
  .hidden-links {
    z-index: 1;
    position: absolute;
    right: 0px;
    top: 100%;
    margin-right: 0px;
    :last-child {
      border-bottom-left-radius: 1.3em; 
    }
    li {z-index: 1;
      display: block;
      background-color: $color-5;
      padding: 0px;
      margin: 2px;
      font-size: 0.9em;
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