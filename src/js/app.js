import Vue from 'vue'
 

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  const app = new Vue({
    el: '#app',
    data: function () {
      return {
        message: "Welcome to Pixeltech!"
      }
    }
  })

  console.log(app)
})