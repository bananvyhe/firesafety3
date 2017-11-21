<template>
  <div>
    <techinfo v-show="switcher" 
    :menuwidth="menuwidth.value"
    :availableSpace="availableSpace.value"
    :vlinks="vlinks.value"
    :numHide='numHide'
    :numVis='numVis'
    :compstylem='compstylem'
    :toggle='toggle'
    :toggle2='toggle2'
    :kostil='kostil'
    :stick='stick'
    :fixedClass='fixedClass'
    :telpanelSliderHeight='telpanelSliderHeight'></techinfo>
    <nav class='greedy-nav' 
      v-scroll="handleScroll" 
      v-bind:style="{styleObject, width: menuwidth.value + 'px'}"  
      v-bind:class="fixedClass" 
      ref="dropdown">
      <button 
        v-bind:class="{hoverhamburger: toggle2}"  
        v-if="menuitemsHide.length > 0" 
        v-on:click="toggle2 = !toggle2, toggle = !toggle" 
        @mouseenter="toggle = true, toggle2 = true"
        >
        <div 
          v-bind:class="{hamshadow: toggle, hamshadow2: !toggle}"
          class="hamburger">
        </div>
      </button>
      <div class="blankdiv">
      </div>
      <ul class='visible-links'>
        <li v-for="menuitem in menuitems">
          <a href=""><nobr>{{menuitem.title.toUpperCase()}}</nobr>
          </a>
        </li>
      </ul>
       <div v-if="menuitemsHide.length > 0" class="blankdiv1">
      </div>
      <ul class='hidden-links' 
        v-bind:style="hiddenStyle"  
        @mouseleave="leavemenu, toggle2 = false "
        @mouseenter="toggle2 = true">
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
  var lastScrollTop = 0;
  var stick = {value:  ''};
  window.onscroll = onScroll;
  function onScroll (e) {
    var top = window.pageYOffset;
    if (lastScrollTop > top) {
      console.log('top');
      stick.value = 'up';
    } else if (lastScrollTop < top) {
      console.log('down');
      stick.value = 'down';
    }
    lastScrollTop = top;
  }

  let menuwidth = {value:  ''};
  let availableSpace = {value:  ''};
  let vlinks = {value:  ''};
  let telpanelSliderHeight = {value: ''};
  export default {
    data: function () {
      return {
        fixedwidth: '',
        hoverbutton: {},
        //выключатель показа индикации служебной информации
        toggle2: false,
        toggle: false,
        switcher: true,
        menuwidth: menuwidth,
        availableSpace: availableSpace,
        vlinks: vlinks,
        telpanelSliderHeight: telpanelSliderHeight,
        stick: stick,
        fixedClass: 'unfixed',
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
        if (el !== target && !el.contains(target)) { 
          this.toggle = false;
        } 
      },
      leavemenu: function() {
        var self = this;
        myFunction ();
        function myFunction() {
          var timer;
          function togfal() {
            self.toggle = false;
          }
          timer = setTimeout (togfal, 3000);
        } 
      },
      handleScroll: function(evt, el) {
        if (this.stick.value == 'down' && window.scrollY > this.telpanelSliderHeight.value && window.scrollY < this.telpanelSliderHeight.value+1200)
        {
          this.fixedClass = 'fixed';
          // var self = this;
          // setTimeout(function(){
          //   self.fixedClass = 'unfixed';
          // },2000);
        }else if(this.stick.value == 'down' && window.scrollY > this.telpanelSliderHeight.value+900){
          TweenLite.to(el, .1, {
            top: '-60px',
            ease: Linear.easeInOut
          });
          this.fixedClass = 'fixed';
        }else if(this.stick.value == 'up' && window.scrollY > this.telpanelSliderHeight.value){
          TweenLite.to(el, .2, {
            top: '0px',
            ease: Linear.easeInOut
          });
          this.fixedClass = 'fixed';
        }else{
          this.fixedClass = 'unfixed';
        }
      }
    },
    computed: {
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
        // if (this.stick.value == 'up') {
        //   this.fixedclass = 'unfixed';
        // }
        // if (this.stick.value == 'down') {
        //   this.fixedclass = 'fixed';
        // }
        // если длина меню с видимыми пунктами больше значения доступного пространства и количество имеющихся пунктов в массиве больше 1   
        if (this.vlinks.value > this.availableSpace.value && this.menuitems.length >1 && this.vlinks.value - this.availableSpace.value > 30) { 
          // this.menuitemsHide.reverse();
          // пушим последний пункт из массива с видимыми пунктами меню в массив для скрытых пунктов
          this.menuitemsHide.push(this.menuitems[this.menuitems.length - 1]);
          // this.menuitemsHide.reverse();
          // удаляем последний пункт из массива с отображаемыми пунктами меню
          this.menuitems.pop();
        }
        return this.menuitemsHide;
      },
      numVis: function () {
        if (this.vlinks.value < this.availableSpace.value && this.menuitemsHide.length >0 && this.availableSpace.value - this.vlinks.value > 300) {
          // this.menuitemsHide.reverse();
          this.menuitems.push(this.menuitemsHide[this.menuitemsHide.length - 1]);
          this.menuitemsHide.pop(); 
          // this.menuitemsHide.reverse();
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
        myFunction2 ();
        function myFunction() {
          if (start == end || self.toggle == false) return;
          self.kostil.push(self.menuitemsHide[self.menuitemsHide.length - (start+1)]);
          start++;
          //тайминг появления
          var timer = setTimeout (myFunction, 120);
        }
        function myFunction2() {
          //прервать если курсор над выпадающим списком
          if (self.toggle2 == true) return;
          if (self.menuitemsHide.length > 0 && self.toggle == false) {
            self.kostil.pop();
            start--;
            //тайминг исчезновения
            var timer = setTimeout (myFunction2, 95);
          }
        }
      },
      //отслеживание выпадающего меню
      toggle2: function(){
        var self = this;
        myFunction2 ();
        function myFunction2() {
          var timer;
          function togfal() {
            myFunction ();
            function myFunction() {
              //прервать если курсор над выпадающим списком
              if (self.toggle2 == true) return;
              if (self.kostil.length > 0 && self.toggle2 == false) {
                self.kostil.pop();
                //тайминг исчезновения
                var timer = setTimeout (myFunction, 75);
              }
              if (self.kostil.length == 0){
                self.toggle = false;
              }
            }
          }
          timer = setTimeout (togfal, 3000);
        }   
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
    let menuwidth1 = document.querySelector(".sliderapp");
    let sliderHeight = menuwidth1.offsetHeight;
    let telpanelHeight = document.querySelector(".telpanel").offsetHeight;
    telpanelSliderHeight.value = sliderHeight+telpanelHeight;
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
</script>

<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";

.greedy-nav {
  z-index: 3;
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
  button {z-index: 23;
    position: absolute;
    height: 100%;
    right: 0px;
    padding: 0 15px;
    border: 0;
    outline: none;
    background-color: $redorange;
    color: #fff;
    cursor: pointer;
    background: radial-gradient(circle farthest-corner at 50% 50%, $redorange 50%, color($redorange blackness(30%)) 100%);

      &::after {
        margin-top: -2.6em;
        padding-top: 0.1em;
        content: attr(count);
        position: absolute;
        width: 15px;
        height: 14px;
        left: -10px;
        text-align: center;
        background-color: color($redorange blackness(35%));
        color: #fff;
        font-size: 0.8em;
        border-radius: 50%;
        border: 2px solid #fff;
        font-weight: bold;
        transition: 1.2s cubic-bezier(0,.27,.07,1);
      }
      &:hover::after {
         
      }
    }
    .blankdiv {
      background-color: $color-5; 
      z-index: 2;
      position: absolute;
      height: 100%;
      width: 300px;
      right: 0;
    }
    .blankdiv1 {
      background-color: $color-5; 
      z-index: 2;
       
      height: 100%;
      width: 60px;
      right: 0;
    }
  .hoverhamburger {
    background: radial-gradient(circle farthest-corner at 50% 55%, $redorange 50%, color($redorange blackness(40%)) 100%);
    &:after {
      background-color: color($redorange blackness(15%)); 
      transform:  scale(0.8) translateY(1.9em);
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
    z-index: 16;
    display: inline-table;
    :first-child {
      border-left: 0px;
    }
    li { 
      vertical-align: middle;
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
.fixed {
  lost-center: 1366px;
  z-index: 70;
  position: fixed;
  top: -60px;
}
.unfixed {
  position: relative;
}
.slide-in-top-enter-active {
  animation: slide-in-top 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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
.slide-in-top-leave-active {
  animation: slide-in-top 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both reverse;
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
 


</style>