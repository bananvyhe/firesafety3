<template>
  <div class="mainmenu">
    <nav class='greedy-nav font3'>
      <button><div class="hamburger"></div></button>
      <ul v-for="menuitem in menuitems" class='visible-links'>
        <li><a href="">{{menuitem.title.toUpperCase()}}</a></li>
        </li>
      </ul>
      <ul class='hidden-links hidden'></ul>
    </nav> 
  </div>
</template>

<script>
// setTimeout(function(){
//       $('.tel').css('visibility', 'visible').addClass('slideUpReturn');
// }, 1300);



export default {
  data: function () {
    return {
      menuitems: [
        { title: 'главная', url: ''},
        { title: 'о нас', url: ''},
        { title: 'противопожарные системы', url: ''},
        { title: 'видеонаблюдение', url: ''},
        { title: 'контроль доступа', url: ''},
      ]
    }
  }
}
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