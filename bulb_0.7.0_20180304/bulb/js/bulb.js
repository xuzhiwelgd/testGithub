(function(){
  var bulb = new Object()
  // var gadgetid = LenSmJs.gadgetId_h5()

  bulb.init = function(){
    bulb.load()
    // bulb.dialogShow('一往无前')
  }

  bulb.dialogShow = function(tip){
    $('#dialog').text(tip).slideDown(0).delay(1000).hide(0);
  }

  bulb.load = function(){
    FastClick.attach(document.body);
    // LenSmJs.saveGadgetId_h5(gardetid)

    //首页返回
    $(document).on('click', '#backPrev', function(){
      LenSmJs.initFinish_h5()
    })
//    if(LenSmJs.isAndroid == true){
//      //Android 点击手机物理返回键
//      pushHistory();
//      window.addEventListener("popstate", function(e) {
//        LenSmJs.initFinish_h5();
//      }, false);
//      function pushHistory() {
//        var state = {
//          title: "title",
//          url: "#"
//        };
//        window.history.pushState(state, "title", "#");
//      }
//    }
  }
  bulb.init()
  window.bulb = bulb
})()
