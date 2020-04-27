// 控制台显示信息，确认js已经被导入，要在浏览器控制台查看
console.log('执行zy0002.js');

/*
功能说明，点击计算按钮之后
要求文本框中必须输入的是数
如果不是就显示错误信息
如果是就计算结果
*/
// 第一步，获取页面的计算按钮和输入框，以及提示信息的元素
var jisuan = document.getElementById('jisuan'); //计算的按钮
var n01 = document.getElementById('n01'); //加法的第一个输入框
var n02 = document.getElementById('n02'); //加法的第二个输入框
var jieguo01 = document.getElementById('jieguo01'); //加法的结果

var n03 = document.getElementById('n03'); //减法的第一个框
var no4 = document.getElementById('n04'); //减法的第二个框
var jieguo02 = document.getElementById('jieguo02'); // 减法的结果

var n05 = document.getElementById('n05'); //除法的第一个框
var no6 = document.getElementById('n06'); //除法的第二个框
var jieguo03 = document.getElementById('jieguo03'); //除法的结果

var n07 = document.getElementById('n07'); //乘法的第一个框
var no8 = document.getElementById('n08'); //乘法的第二个框
var jieguo04 = document.getElementById('jieguo04'); //乘法的结果

var sperr = document.getElementById('sperr'); //错误提示信息

// 显示元素是不是正确
console.log(
  jisuan,
  n01,
  n02,
  jieguo01,
  n03,
  n04,
  jieguo02,
  n05,
  n06,
  jieguo03,
  n07,
  n08,
  jieguo04,
  sperr
);

// 第二步：计算按钮的单机动作
jisuan.addEventListener('click', function() {
  console.log('点击计算按钮');
  // 第三步：校验输入的值是不是数
  var num01 = n01.value; //获取n01 (加法的第一个输入框) 的输入值
  // parseFloat转换参数成为数值，如果参数是数值类型就会成功转换，否则返回NaN
  // isNaN判断参数是不是非数，不是数就返回true真，是数就返回false假
  console.log(n01.value, '是不是非数：', isNaN(parseFloat(num01)));
  // 判断n01的值是不是数
  if (isNaN(num01)) {
    sperr.innerHTML = '加法的第一个输入不是数！';
    return;
  }
  // 第二个数
  var num02 = parseFloat(n02.value);
  if (isNaN(num02)) {
    sperr.innerHTML = '加法的第二个输入不是数！';
    return;
  }
  // 第三个数
  var num03 = parseFloat(n03.value);
  if (isNaN(num03)) {
    sperr.innerHTML = '减法的第一个输入不是数！';
    return;
  }
  // 第四个数
  var num04 = parseFloat(n04.value);
  if (isNaN(num04)) {
    sperr.innerHTML = '减法的第二个输入不是数！';
    return;
  }
  // 第五个数
  var num05 = parseFloat(n05.value);
  if (isNaN(num05)) {
    sperr.innerHTML = '除法的第一个输入不是数！';
    return;
  }
  // 第六个数
  var num06 = parseFloat(n06.value);
  if (isNaN(num06)) {
    sperr.innerHTML = '除法的第二个输入不是数！';
    return;
  }
  // 第七个数
  var num07 = parseFloat(n07.value);
  if (isNaN(num07)) {
    sperr.innerHTML = '乘法的第一个输入不是数！';
    return;
  }
  // 第八个数
  var num08 = parseFloat(n08.value);
  if (isNaN(num08)) {
    sperr.innerHTML = '乘法的第二个输入不是数！';
    return;
  }
  // 第四步，计算并显示结果
  // 执行到这里，说明数值都输入
  sperr.innerHTML = ''; //清空错误信息
  // 加法的结果
  jieguo01.innerHTML = parseFloat(n01.value) + parseFloat(n02.value)  ;
  // 减法的结果
  jieguo02.innerHTML = n03.value - n04.value;
  // 除法的结果
  jieguo03.innerHTML = n05.value / n06.value;
  // 乘法的结果
  jieguo04.innerHTML = n07.value * n08.value;
});
