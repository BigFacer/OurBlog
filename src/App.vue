<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.setFontSize(750, 750)
  },
  methods: {
    // 判断是否为手机端
    getIsPC () {
      let userAgentInfo = navigator.userAgent
      console.log(userAgentInfo)
      let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
      let flag = true
      for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      return flag
    },
    // 设置font-size
    setFontSize (designWidth, maxWidth) {
      let doc = document
      let win = window
      let docEl = doc.documentElement
      let remStyle = document.createElement('style')
      let rem
      let tid
      function refreshRem () {
        let width = docEl.getBoundingClientRect().width
        maxWidth = maxWidth || 540
        width > maxWidth && (width = maxWidth)
        rem = width * 10 / designWidth
        remStyle.innerHTML = 'html{font-size:' + rem + 'px;}'
      }
      if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(remStyle)
      } else {
        let wrap = doc.createElement('div')
        wrap.appendChild(remStyle)
        doc.write(wrap.innerHTML)
        wrap = null
      }
      // 要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
      refreshRem()

      win.addEventListener('resize', function () {
        clearTimeout(tid)// 防止执行两次
        tid = setTimeout(refreshRem, 300)
      }, false)

      win.addEventListener('pageshow', function (e) {
        if (e.persisted) { // 浏览器后退的时候重新计算
          clearTimeout(tid)
          tid = setTimeout(refreshRem, 300)
        }
      }, false)

      if (doc.readyState === 'complete') {
        doc.body.style.fontSize = '16px'
      } else {
        doc.addEventListener('DOMContentLoaded', function (e) {
          doc.body.style.fontSize = '16px'
        }, false)
      }
    }
  }
}
</script>

<style>
  html,body{
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
