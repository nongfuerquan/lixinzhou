console.log('执行index.js');

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/javascript/demo0002.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/javascript/demo0003.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/javascript/demo0004.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/javascript/demo0005.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/javascript/demo0006.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/javascript/demo0007.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/javascript/demo0008.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/javascript/demo0009.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/level02/h0001.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/level02/h0002.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/level02/h0003.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/level02/h0004.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/level02/h0005.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/level02/h0006.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/level02/h0006-1.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/zy/zy0001.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/zy/zy0002.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/zy/zy0003.html');
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('/zy/zy0004.html');
});

var inde = 0;
var z02 = document.getElementById('z02');
var st =
  '发现自己的代码里面可能存在问题，怎么办?可能会自大，因为是自己写的就觉得没有必要审核，或者有问题也非要自己完成，而不是协作解决，优秀的程序员应该自己严格要求自己，以身作则          ';
setInterval(function() {
  z02.innerHTML = z02.innerHTML + st.charAt(inde);
  inde = inde + 1;
  if (inde == st.length) {
    z02.innerHTML = '';
    inde = 0;
  }
}, 200);
