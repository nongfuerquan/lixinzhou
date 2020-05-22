console.log('进入ajax0001.js');
// 校验axios是否导入
console.log('axios: ', axios);
// 校验Qs是否导入
console.log('qs:', Qs);
// 服务器api接口访问地址
var serviceBaseUrl = 'https://huhuiyu.cn/teach-ajax-demo';
// 本地保存token信息的key
var serviceToKenKey = 'service.token';

// 接口文档中的POST，GET表示接口的访问类型
// Path就是接口访问url地址
// axios访问端api接口 method参数就是接口访问类型
// headers用于传递Parameter Type为header的参数
// token参数就是header
var promise = axios({
  method: 'post',
  url: serviceBaseUrl + '/',
  headers: {
    token: localStorage.getItem(serviceToKenKey),
  },
});
// Promise对象如果正确应答回来会调用then方法,回来的方法参数是服务器应答的结果
promise.then(function (resp) {
  // 服务器的应答数据在data属性中
  console.log(resp.data);
  // 112997fd-a551-496a-8e9e-416e4e1a2186 这个就是你的token已经保存了，你可以自己刷新看看，不会变了
  // token是服务器追踪用户凭证，一定要保存好
  // 如果服务器端有返回token，需要保存下来
  if (resp.data.token) {
    localStorage.setItem(serviceToKenKey, resp.data.token);
  }
});

// 一次完整ajax请求
var txtEcho = document.getElementById('txtEcho');
var btnEcho = document.getElementById('btnEcho');
var spEcho = document.getElementById('spEcho');

btnEcho.addEventListener('click', function () {
  // 传数据用data:参数名称=参数的值
  promise = axios({
    method: 'post',
    url: serviceBaseUrl + '/',
    headers: {
      token: localStorage.getItem(serviceToKenKey),
    },
    data: 'echo=' + txtEcho.value,
  });
  promise.then(function (resp) {
    if (resp.data.token) {
      localStorage.setItem(serviceToKenKey, resp.data.token);
    }
    // JSON.stringify是将json对象转换成字符串
    spEcho.innerHTML = JSON.stringify(resp.data);
  });
});