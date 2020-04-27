console.log('进入demo0001.js');

var myimg = document.getElementById('myimg');
// js里面路径是由引用它的html位置决定
myimg.setAttribute('src', './images/img4.jpg');
setTimeout(function () {
  myimg.setAttribute('src','./images/img4.jpg')
},5000);