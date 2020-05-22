console.log('进入ajax0004.js');

var txtname = document.getElementById('txtname');
var txtpwd = document.getElementById('txtpwd');
var btnLogin = document.getElementById('btnLogin');
var divResult = document.getElementById('divResult');

var param = { tbUser: { password: '', username: '' } };

btnLogin.addEventListener('click', function () {
  param.tbUser.username = txtname.value;
  param.tbUser.password = txtpwd.value;
  console.log(param);
  huhuiyu.ajax('post', '/user/login', param, function (resp) {
    console.log(resp);
    divResult.innerHTML = JSON.stringify(resp);
    if (resp.success) {
      // 提取服务器返回的用户信息
      console.log(resp.resultData.tbUser);
      sessionStorage.setItem(
        'login-user',
        JSON.stringify(resp.resultData.tbUser)
      );
      location.href = 'ajax0005.html';
    }
  });
});
// var test='a b';
// console.log(test);
// console.log(encodeURI(test));
// console.log(decodeURI(encodeURI(test)));

// var json = {
//   code: 200,
//   message: '登陆成功！',
//   success: true,
//   token: '4ddce7c2-e4fb-48b7-b216-bfbfd94dbd41',
//   resultData: {
//     tbUser: { username: 'user', nickname: '内置用户', regDate: 1588158380000 }
//   }
// };