console.log('进入ajax0007.js');
var txtContent = document.getElementById('txtContent');
var btnAdd = document.getElementById('btnAdd');
var divResult = document.getElementById('divResult');

btnAdd.addEventListener('click', function () {
  var param = { tbImages: { content: txtContent.value } };
  huhuiyu.ajax('POST', '/util/addImage', param, function (data) {
    divResult.innerHTML = JSON.stringify(data);
    divResult.innerHTML = data.message;
  });
});

// 查询部分
var btnQuery = document.getElementById('btnQuery');
var divImages = document.getElementById('divImages');
var btnMore = document.getElementById('btnMore');
var PAGE_STEP = 5; //每次加载更多数量
// 查询需要分页相关信息

var page = { pageNumber: 1, pageSize: 10 };

btnQuery.addEventListener('click', function () {
  console.log({ page: page });
  huhuiyu.ajax('POST', '/util/queryAllImage', { page: page }, function (data) {
    var list = data.resultData.list;
    page = data.resultData.page;
    divResult.innerHTML = JSON.stringify(list) + '<hr>';
    divResult.innerHTML += JSON.stringify(page);
    // 清除原有内容
    divImages.innerHTML = '';
    // list是一组图片，需要循环添加页面
    for (var i = 0; i < list.length; i++) {
      // 数组通过下标访问
      var imginfo = list[i];
      console.log(imginfo.content);
      // 创建img元素
      var img = document.createElement('img');
      img.setAttribute('src', imginfo.content);
      // 动态创建的元素也能添加事件
      img.addEventListener('click', function () {
        window.open(this.getAttribute('src'));
      });
      // z追加到容器中

      divImages.append(img);
    }
  });
});

btnMore.addEventListener('click', function () {
  // 加载更多用了最没有性能的方案，就是每次加大pageSize的值
  page.pageSize = page.pageSize + PAGE_STEP;
  // 触发查询按钮的事件
  btnQuery.click();
});