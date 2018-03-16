/**
 * Created by FengChen.
 */
//  定义命名空间 LenSmJs
var LenSmJs = new Object();
//the judgment is ios or Android？
var LenSmJsU = navigator.userAgent;
LenSmJs.isAndroid = LenSmJsU.indexOf('Android') > -1 || LenSmJsU.indexOf('Adr') > -1; //android终端
LenSmJs.isiOS = !!LenSmJsU.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if(LenSmJs.isiOS == true){
     //ios终端
}
if(LenSmJs.isAndroid == true){
     //android终端
}


/**
 *  0.1、回调方法
 *  参数：设备号：id ；
 *     name：请求app后返回的最近一次请求的方法的方法名去掉“_h5”的字符串.
 *     例如：获取设备列表的方法是 getGadgets_h5 ，则此方法的回调方法中的name即时“getGadgets”；
 *     返回数据：data
 *
 *     ps:这个方法是回调的方法，页面不需要调用，但是要注册。
 *
 */

//function callbackdata(id,name,data){
//
//}


/**
 *  0.2、获取设备号
 *  字符串截取获取 gadget_id
 *  返回值：gadgetId
 */
LenSmJs.gadgetId_h5 = function(){
    //字符串截取获取 gadget_id;
    //例如：var href = 'http://html.zai0312.com/cs.html?gadget_id=298892786ushuihvu19288988';
    var href = location.href;
    var gadgetId = href.split("gadget_id=")[1];
    var andpos;
    try
    {
        //在这里运行代码
        andpos = gadgetId.indexOf("&");
    }
    catch(err)
    {
        //在这里处理错误
    }

    if(andpos){
        if(andpos >= 0){
            gadgetId = gadgetId.split("&")[0];
        }
    }

    var jingpos;
    try
    {
        //在这里运行代码
        jingpos = gadgetId.indexOf("#");
    }
    catch(err)
    {
        //在这里处理错误
    }

    if(jingpos){
        if(jingpos >= 0){
            gadgetId = gadgetId.split("#")[0];
        }
    }

    return gadgetId;
};

/**
 * 0.3  Android 储存gardetid
 * gadgetId:设备号
 * ps:进入页面时，给app传递一个设备号，以便于app其他接口使用：
 *
 */
LenSmJs.saveGadgetId_h5 = function(gadgetId){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.SaveGadgetId(gadgetId);
    }
};

/**
 * 0.4 Android 注册监听回调
 * 用到监听时，先在页面注册此方法
 *
 *
 */
LenSmJs.getAddListener_h5 = function(){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.getAddListener();
    }

};

/**
 * 0.5 Android 移除监听：
 *
 */
LenSmJs.getRemoveListener_h5 = function(){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.getRemoveListener();
    }

};

/**
 * 1、从h5页面跳转至native页面
 * toPage:要跳转到的位置
 *      set : 		设置
        home :		app首页
        QuipmentList :	设备列表
 *      Ps:具体跳转app界面参数，待定。
 */
LenSmJs.HtmlJumpApp_h5 = function(toPage){
    if(LenSmJs.isiOS == true){
        HtmlJumpApp(toPage);
    }else{
        JsInterface.HtmlJumpApp(toPage);
    }
};
/**
 * 40 finish：，直接粉碎页面，进入到app里面
 *
 */
LenSmJs.initFinish_h5 = function(){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.initFinish();
    }else{
        homeback();
    }
};

/**
 *  4、监听属性变化回调
 *  通过0.1 callbackdata(id,name,data) 方法进行的回调
 *  其中name为BackExcuteList
 *
 *  ps:app监听到属性变化时，主动调用，页面需要注册
 */


/**
 *  5、存储账号密码
 *
 *  remCount：账号
 *  remPass：密码
 */
LenSmJs.SaveSSIDAndPwd_h5 = function(remCount,remPass){
    if(LenSmJs.isiOS == true){
        SaveSSIDAndPwd("ssid="+remCount,"pwd="+remPass);
    }else{
        JsInterface.SaveSSIDAndPwd(remCount,remPass);
    }
};

/**
 *  6、读取账号密码
 *
 *  remCount：账号
 *  remPass：密码
 *  返回值：
         类型：json
         示例：{“ssid":"wifiName","pwd":"123456"}
 */
LenSmJs.ReadSSIDAndPwd_h5 = function(){
    if(LenSmJs.isiOS == true){
        ReadSSIDAndPwd();
    }else{
        JsInterface.ReadSSIDAndPwd();
    }
};


/**
 *  7、获取设备的在线状态（网络）
 *
 *返回值：
 *{"state":0}
 * 字符串
 *data.state ：0 离线； 1 在线
 *
 */
LenSmJs.GetGadgetState_h5 = function(){
    if(LenSmJs.isiOS == true){
        GetGadgetState();
    }else{
        JsInterface.GetGadgetState();
    }
};



/**
 *  8、监听并设置设备在线/离线状态
 *
 *  通过0.1 callbackdata(id,name,data)方法进行的回调
 *  其中name为 GetGadgetState
 *  返回值：
 * {"state":0}
 * 字符串：
 * data.state ：0 离线； 1 在线
 *
 *  ps:app监听到属性变化时，主动调用，页面需要注册
 *
 */

/**
 * 9、根据gadgetId请求获取gadget的所有属性信息
 *
 * 返回值：通过0.1 callbackdata(id,name,data)方法进行的回调
 * 回调name : FindGadgetById
 *
 */

LenSmJs.FindGadgetById_h5 = function(gadgetId){
    if(LenSmJs.isiOS == true){
        FindGadgetById("gadgetId="+gadgetId);
    }else{
        JsInterface.FindGadgetById(gadgetId);
    }
};

/**
 * 10、属性操作方法：设置修改属性值
 *
 * PS：操作成功之后，是通过4监听属性变化，来回调的。
 */

LenSmJs.ExcuteAction_h5 = function(gadgetId, actionId,value){
    if(LenSmJs.isiOS == true){
        ExcuteAction("actionId="+actionId,"value="+value);
    }else{
        JsInterface.ExcuteAction(gadgetId, actionId,value);
    }
};

/**
 * 11、根据设备id和属性id 获取值
 *
 *回调方法：
 通过0.1方法callbackdata(id,name,data)回调
 回调name : GetAttrDiscriptionByAttrId
 返回数据：
 多值：{"value":["2907","3000"],"attribute_id":"0x0009000b"}
 单值：{"value":"1","attribute_id":"0x0009000b"}
 */

LenSmJs.GetAttrDiscriptionByAttrId_h5 = function(gadgetId, actionId){
    if(LenSmJs.isiOS == true){
        GetAttrDiscriptionByAttrId("gadgetId="+gadgetId,"actionId="+actionId);
    }else{
        JsInterface.GetAttrDiscriptionByAttrId(gadgetId,actionId);
    }
};

/**
 * 12、根据gadgetId获取设备信息,包含设备名，信息状态等，
 *
 *回调方法：0.1方法callbackdata(id,name,data)
 其中回调name : GetGagdgetInfoWithId;
 返回数据：
data.gadget_name; //设备名字
data.room_id;	//room id
data.client_data;	//client_data
data.push_msg_flag; //是否要推送信息
推送消息判断，
 data.push_msg_flag;当为1 或者 true时，为打开消息，反之 为关闭消息
 PS:
 data.push_msg_flag
 IOS是  string  0 关闭 1  打开
 Android 是  布尔类型  false 关闭 true  打开
 */

LenSmJs.GetGagdgetInfoWithId_h5 = function(gadgetId){
    if(LenSmJs.isiOS == true){
        GetGagdgetInfoWithId("gadget_id="+gadgetId);
    }else{
        JsInterface.GetGagdgetInfoWithId(gadgetId);
    }
};

/**
 * 13、修改设备信息
 * 参数同  方法 12
 *
 * 回调方法：通过方法0.1callbackdata(id,name,data)
 其中name : ModifyGagdgetInfoWithId;
 返回值：
 {“state”:”0”key)}
 state 字符串  0 失败 1 成功；
 key : 传什么返回什么，以便于区分究竟是修改了哪个信息的返回结果
 */
LenSmJs.ModifyGagdgetInfoWithId_h5 = function(gadgetId, gadgetName, roomId, clientData, push_msg_flag,key){
    if(LenSmJs.isiOS == true){
        ModifyGagdgetInfoWithId("gadgetId="+gadgetId,"gadgetName="+gadgetName,"roomId="+roomId,"clientData="+clientData,"push_msg_flag="+push_msg_flag,"key="+key);
    }else{
        JsInterface.ModifyGagdgetInfoWithId(gadgetId, gadgetName, roomId, clientData, push_msg_flag,key);
    }
};


/**
 * 14、获取房间列表
 *
 * 回调方法：通过0.1方法callbackdata(id,name,data)
 其中name : QueryDataHomeAndRoomList;
 返回值：
 [{"room_id":"12","home_id":"12","room_name":"厨房"},{"room_id":"13","home_id":"12","room_name":"卧室"}]
 */
 LenSmJs.QueryDataHomeAndRoomList_h5 = function(){
    if(LenSmJs.isiOS == true){
        QueryDataHomeAndRoomList();
    }else{
        JsInterface.QueryDataHomeAndRoomList();
    }
};

/**
 * 通过id获取room信息
 *
 * 回调方法：通过0.1方法callbackdata(id,name,data)
 */
 LenSmJs.DataPoolroomInfoById_h5 = function(room_id){
    if(LenSmJs.isiOS == true){
        DataPoolroomInfoById("room_id="+room_id);
    }else{
        JsInterface.DataPoolroomInfoById(room_id);
    }
};

/**
 * 15、删除房间
 *
 * rome_id ：房间号
 *
 * 回调方法：通过0.1 方法callbackdata(id,name,data)
 其中name : DeleteRomeWithRomeid;
 返回值：
 {“state”:”0”}
 字符串  0 失败 1 成功；
 */
LenSmJs.DeleteRomeWithRomeid_h5 = function(rome_id){
    if(LenSmJs.isiOS == true){
        DeleteRomeWithRomeid("rome_id="+rome_id);
    }else{
        JsInterface.DeleteRomeWithRomeid(rome_id);
    }
};

/**
 * 16、创建房间
 *
 * room_name ：房间名
 * homeId：home id
 * Icon:房间的icon，以base64编码，以字符串形式传递到云端
 *
 * 回调方法：通过0.1 方法callbackdata(id,name,data)
 其中name : AddRoomWithName;
 返回值：
 {“state”:”0”}
 字符串  0 失败 1 成功；
 */
LenSmJs.AddRoomWithName_h5 = function(room_name,homeId,icon){
    if(LenSmJs.isiOS == true){
        AddRoomWithName("room_name="+room_name,"homeId="+homeId);
    }else{
        JsInterface.AddRoomWithName(room_name, homeId,icon);
    }
};

/**
 * 修改房间
 * roomId : room id
 * roomName ：房间名
 * homeId：home id
 * Icon:房间的icon，以base64编码，以字符串形式传递到云端
 *
 * 回调方法：通过0.1 方法callbackdata(id,name,data)
 * 其中name : ModifyRoom;
 */
LenSmJs.ModifyRoom_H5 = function(roomId, roomName, homeId, icon){
    if(LenSmJs.isiOS == true){
        modifyRoom("roomId="+roomId, "roomName="+roomName, "homeId="+homeId, "icon="+icon);
    }else{
        JsInterface.modifyRoom(roomId, roomName,homeId, icon);
    }
}

/**
 * 更新room排序
 * homeId：要修改home的id
 * Sort：房间数组，按顺序，值为roomId
 *
 * 回调方法：通过0.1 方法callbackdata(id,name,data)
 * 其中name : UpdateRoomSort;
 */
LenSmJs.UpdateRoomSort_H5 = function(homeId, sorts){
    if(LenSmJs.isiOS == true){
        UpdateRoomSort("homeId="+homeId,"sorts="+sorts);
    }else{
        JsInterface.UpdateRoomSort(homeId, sorts);
    }
}

/**
 * 将设备移动到房间
 * roomId：要修改room的id
 * gadgetIds：要移动到房间的设备id
 *
 * 回调方法：通过0.1 方法callbackdata(id,name,data)
 * 其中name : MoveGadgets2Room;
 */
LenSmJs.MoveGadgets2Room_H5 = function(roomId, gadgetIds){
    if(LenSmJs.isiOS == true){
        MoveGadgets2Room("roomId="+roomId,"gadgetIds="+gadgetIds);
    }else{
        JsInterface.MoveGadgets2Room(roomId, gadgetIds);
    }
}

/**
 * 17、解除hub绑定
 *
 *  itemType："ITEM_TYPE_HUB"，固定值
 *             hubid：hubid。
 *
 * 回调方法：通过0.1 方法callbackdata(id,name,data)
 其中name : UnbindHub;
 返回值：
 {“state”:”0”}
 字符串  0 失败 1 成功；
 */
LenSmJs.UnbindHub_h5 = function(itemType, hubId){
    if(LenSmJs.isiOS == true){
        UnbindHub("hubId="+hubId);
    }else{
        JsInterface.UnbindHub(itemType, hubId);
    }
};

/**
 * 20、Android设备绑定
 *
 * 参数：
 * var gadgetKinds string  //空气净化器的是“LenovoSmartAir”
 var ssid = remCount; //账号
 var psd = remPass;   //密码
 var ls = "cn";      //服务器
 var sl = "dev";     //服务器级别
 var perCode = "";
 var timeZone = LenSmJs.getTimezoneName_h5();    //本地时区
 var cn = "false";    //网络配置流程+绑定流程
 var wctom = "60000";    //wifi连接超时时间
 var stom = "60000";     //softAp超时时间
 var btom = "120000";    //绑定超时时间
 var cgtom = "120000";   //创建设备超时时间
 var ip = "192.168.199.1"  固定
 var commongadget = "true"  固定

 返回：是通过 0.1 方法返回的，
 其中每一步返回的name，及结果是：
 //andriod 返回 start
 if(name == "onDeviceWifiConnectSuccess"){
          //设备wiif连接成功
  }
 if(name == "onDeviceWifiConnectTimeout"){
           //设备wifi连接超时
}
 if(name == "onSoftApSuccess"){
           //softAp成功
}
 if(name == "onSoftApTimeout"){
           //softAp超时
}
 if(name == "onBindSuccess"){
           //绑定成功
}
 if(name == "onBindError"){
           //绑定失败
           if(data == "103" || data == "-8" || data == "42409" ){
               //失败 提示被其他用户绑定
           }else{
               //绑定超时
           }
}
 if(name == "onCreateGadgetSuccess"){
           //创建设备成功
           返回结果：
            字符串，逗号“,”分割:第一个是状态值，第二个是设备名字，第三个是设备id
           var gadgetName = data.split(",")[1];  ：设备名字
           var gadgetId = data.split(",")[2];   :设备号
}
 if(name == "onCreateGadgetTimeout"){
           //创建设备超时
}
 *
 * */
//第一步 注册监听：
//LenSmJs.getAddListener_h5();
//第二步 开始绑定
LenSmJs.startAutoFindDeviceBySoftAp_h5 = function(gadgetKinds,ssid, psd, ip, ls, sl, perCode, timeZone, cn, wctom, stom, btom, cgtom, commongadget){
    if(LenSmJs.isAndroid == true){
        JsInterface.startAutoFindDeviceBySoftAp(gadgetKinds,ssid, psd, ip, ls, sl, perCode, timeZone, cn, wctom, stom, btom, cgtom, commongadget);
    }
};

/**
 *  第三步 Android停止自动发现设备接口（用户点击左上角返回键或者系统返回键调用）
 */
LenSmJs.stopAutoFindDevice_h5 = function(){
    if(LenSmJs.isAndroid == true){
        JsInterface.stopAutoFindDevice();
    }
};

/**
 * 21、IOS设备绑定
 * var wifi_nowDate = Date.parse(new Date())/1000;  时间 时间戳 单位秒
 var wifi_nowTimeZone = LenSmJs.getTimezoneName_h5();          时区 通过getTimezoneName()；获取
 wifi_name：wifi名字
 wifi_passWord：wifi密码
 第一步：softAPNew方法
 通过第一步返回数据，能够获取到：
 返回json，
 data.state 为 true 成功，false 失败
 Ghubtype:hub type
 Gmacaddr: mac地址
 获取方式：
 Ghubtype = data.hubtype;
 Gmacaddr = data.macaddr;
 第二步：bindHub方法
 返回json，
 data.state 为 true 成功，false 失败

 第三步：updateGadgetListWithResultBlock方法
 返回json，
 data.state 为 true 成功，false 失败
 *
 * */
//ios第一步： softAp绑定：
LenSmJs.softAPNew_h5 = function(wifi_name, wifi_passWord, wifi_nowDate, wifi_nowTimeZone){
    if(LenSmJs.isiOS == true) {
        softAPNew("wifi_name="+wifi_name,"wifi_passWord="+wifi_passWord,"wifi_nowDate="+wifi_nowDate,"wifi_nowTimeZone="+wifi_nowTimeZone);
    }
};

//ios第二步：绑定Hub：
LenSmJs.bindHub_h5 = function(Gmacaddr, Ghubtype){
    if(LenSmJs.isiOS == true) {
        bindHub("macaddr="+Gmacaddr,"hubtype="+Ghubtype);
    }
};

//ios第三步：获取设备列表：
LenSmJs.updateGadgetListWithResultBlock_h5 = function(macaddr){
    if(LenSmJs.isiOS == true) {
        updateGadgetListWithResultBlock("macaddr="+macaddr);
    }
};


/**
 * 22、 获取所有home信息（本地）
 * //获取所有家庭home列表
 *
 * 返回数据：homeid  homename
 * 返回值格式：[{“home_id”:”01ac43921e67e768c66f0670fc58061d”,”home_name”:”家庭1”},{“home_id”:”123456”,”home_name”:”家庭1”}]
 */
LenSmJs.GetHomeList_h5 = function(){
    if(LenSmJs.isiOS == true) {
        GetHomeList();
    }else{
        JsInterface.GetHomeList();
    }
};


/**
 * 24、  获取当前连接的wifi的名字
 * 返回值：
 *  string "wifiName"
 *  ps：返回值是获取到的经过base64加密wifi名字；所以需要先解密，再使用；
 *
 */

LenSmJs.GetWifiName_h5 = function(){
    if(LenSmJs.isiOS == true){
        GetWifiName();
    }else{
        JsInterface.GetWifiName();
    }
};

/**
 * 26、 获取支持型号列表
 * 返回值：
 * state,code,value(数组json)
 * {"state":"1","code":"123","value":[a,b,c]}
 */
LenSmJs.GetGadgetTypeList_h5 = function(){
    if(LenSmJs.isiOS == true){
        GetGadgetTypeList();
    }else{
        JsInterface.GetGadgetTypeList();
    }
};

/**
 * 28、取所有的gadget列表, 本地获取
 *
 *  返回值：
 *  state,code,value(数组json)
 * {"state":"1","code":"123","value":[a,b,c]}
 *
 */
LenSmJs.GetGadgetsList_h5 = function(){
    if(LenSmJs.isiOS == true){
        GetGadgetsList();
    }else{
        JsInterface.GetGadgetsList();
    }
};

/**
 * 29.0、根据设备Id获取设备类型（型号）
 *  返回值：
 * {"gadgetTypeid":" 100 "，"name":"联想智能空净","tag":"联想智能空净"}
 */
LenSmJs.GadgetTypeDescriptionWithGadgetID_h5 = function(gadgetId){
    if(LenSmJs.isiOS == true){
        GadgetTypeDescriptionWithGadgetID("gadget_id="+gadgetId);
    }else{
        JsInterface.GadgetTypeDescriptionWithGadgetID(gadgetId);
    }
};

/**
 * 29、通过单个的gadgetTypeId获取一个类型描述
 *  返回值：
 *  state,code,value(数组json)
 * {"state":"1","code":"123","value":[a,b,c]}
 */
LenSmJs.GadgetTypeDescriptionWithTypeId_h5 = function(gadgetTypeId){
    if(LenSmJs.isiOS == true){
        GadgetTypeDescriptionWithTypeId("gadgetTypeId="+gadgetTypeId);
    }else{
        JsInterface.GadgetTypeDescriptionWithTypeId(gadgetTypeId);
    }
};

/**
 * 30、删除gadget
 *
 *  *  返回值：
 *  state,code
 * {"state":"1","code":"123"}
 */
LenSmJs.DeleteGadget_h5 = function(gadget_id){
    if(LenSmJs.isiOS == true){
        DeleteGadget("gadget_id="+gadget_id);
    }else{
        JsInterface.DeleteGadget(gadget_id,"ITEM_TYPE_GADGET");
    }
};

/**
 * 31、获取单个gadget的历史记录详情
 *
 * 参数：
 * starttime：默认给空字符串， 刷新更多时，给上次取到的最后一条数据的时间
 *  *  gadgetId:设备号
 *  attributeIds：属性id  可以为空""
 *  startTime：起始时间 可以为空""
 *  endTime：结束时间  可以为空""
 *  num：条数  可以为空""
 *  *  返回值：
 *  state,code,value(数组json)
 * {"state":"1","code":"123","value":[a,b,c]}
 */

LenSmJs.GetGadgetHistoryDetDataWithId_h5 = function(gadget_id,attributeIds, startTime, endTime, num){
    if(LenSmJs.isiOS == true){
        GetGadgetHistoryDetDataWithId("gadget_id="+gadget_id,"attributeIds="+attributeIds,"startTime="+startTime, "endTime="+endTime, "num="+num);
    }else{
        JsInterface.GetGadgetHistoryDetDataWithId(gadget_id,attributeIds, startTime, endTime, num);
    }
};

/**
 * 32、创建Home
 * 参数：
 *home_name
 *返回值：
 * state,code,value(home_name,home_id)
 */
LenSmJs.AddHomeWithName_h5 = function(home_name){
    if(LenSmJs.isiOS == true){
        AddHomeWithName("home_name="+home_name);
    }else{
        JsInterface.AddHomeWithName(home_name);
    }
};

/**
 * 33、修改Home
 *
 * 返回值：
 * IOS:
 * state,code(android 有value(home_name,home_id))
 * Android:
 * state,code,value(json)
 *
 */
LenSmJs.ModifyHomeWithHomeid_h5 = function(home_id,home_name){
    if(LenSmJs.isiOS == true){
        ModifyHomeWithHomeid("home_id="+home_id,"home_name="+home_name);
    }else{
        JsInterface.ModifyHomeWithHomeid(home_id,home_name);
    }
};

/**
 * 34、删除Home
 *
 * home_id（android参数两个--》 ITEM_TYPE_HOME 固定值写死 ，homeId
 * 返回值：
 * {"state":"1","code":"123456"}
 */
LenSmJs.DeleteHomeWithHomeid_h5 = function(home_id){
    if(LenSmJs.isiOS == true){
        DeleteHomeWithHomeid("home_id="+home_id);
    }else{
        JsInterface.DeleteHomeWithHomeid(home_id,"ITEM_TYPE_HOME");
    }
};

/**
 * 35.0创建定时器
 *
 * begin_time:定时器启动时间  格式： h:m ；小时：分钟
 * actionid:设备动作id
 * paramios:数组([1,2,3]数组不要字符串)
 * paramand:数组([“1”,“2”,“3”]要字符串)
 * week(同week),gadget_id,name,status
 * gadget_id：设备号
 * week:周几 int
 * name：定时器名字
 * status：状态启用（0）/禁用（1）
 * 一下两个参数是安卓独有的：
 * time_id： 定时器id
 * class_id：设备类别
 *
 *
 *
 * 返回值：
 * state,code
 */
LenSmJs.CreateTime_h5 = function(begin_time,actionid,param,week,gadget_id,name,status,time_id,class_id){
    if(LenSmJs.isiOS == true){
        CreateTime("begin_time="+begin_time,"actionid="+actionid,"param="+param,"week="+week,"gadget_id="+gadget_id,"name="+name,"status="+status);
    }else{
        JsInterface.CreateTime(begin_time,actionid,param,week,gadget_id,name,status,time_id,class_id);
    }
};

/**
 * 35.1 修改定时器
 *
 * begin_time:定时器启动时间  格式： h:m ；小时：分钟
 * actionid:设备动作id
 * paramios:数组([1,2,3]数组不要字符串)
 * paramand:数组([“1”,“2”,“3”]要字符串)
 * week(同week),gadget_id,name,status
 * gadget_id：设备号
 * week:周几 int
 * name：定时器名字
 * status：状态启用（0）/禁用（1）
 * 一下两个参数是安卓独有的：
 * time_id： 定时器id
 * class_id：设备类别
 * 返回值：
 * state,code
 */
LenSmJs.ModifyTime_h5 = function(time_id,begin_time,actionid,param,week,gadget_id,name,status,class_id){
    if(LenSmJs.isiOS == true){
        ModifyTime("time_id="+time_id,"begin_time="+begin_time,"actionid="+actionid,"param="+param,"week="+week,"gadget_id="+gadget_id,"name="+name,"status="+status);
    }else{
        JsInterface.ModifyTime(begin_time,actionid,param,week,gadget_id,name,status,time_id,class_id);
    }
};

/**
 * 35、删除定时器
 * * 返回值：
 * {"state":"1","code":"123456"}
 *
 * 参数time_id（android参数两个--》ITEM_TYPE_CLOCK 固定值写死 ，clockId ）
 */
LenSmJs.DeleteTimeWithId_h5 = function(time_id){
    if(LenSmJs.isiOS == true){
        DeleteTimeWithId("time_id="+time_id);
    }else{
        JsInterface.DeleteTimeWithId(time_id,"ITEM_TYPE_CLOCK");
    }
};

/**
 * 36、根据gadgetid获取定时器列表
 *
 *
 * 返回值：
 * state,code,value(数组json)
 */
LenSmJs.GetTimeListWithGadgetid_h5 = function(gadget_id){
    if(LenSmJs.isiOS == true){
        GetTimeListWithGadgetid("gadget_id="+gadget_id);
    }else{
        JsInterface.GetTimeListWithGadgetid();
    }
};

/**
 * 37、获取所有的定时器列表
 *
 *
 * 返回值：
 * state,code,value(数组json)
 */
LenSmJs.GetTimeList_h5 = function(){
    if(LenSmJs.isiOS == true){
        GetTimeList();
    }else{
        JsInterface.GetTimeList();
    }
};

/**
 * 38、获取单个定时器
 *
 * 返回值：
 * state,code,value(定时器数据)
 *
 */
LenSmJs.GetTimerWithId_h5 = function(time_id){
    if(LenSmJs.isiOS == true){
        GetTimerWithId("time_id="+time_id);
    }else{
        JsInterface.GetTimerWithId(time_id);
    }
};


/**
 * 39、启用禁用定时器
 *
 *  *参数：
 * status:0 or 1
 * 返回值：
 * state,code

 */
LenSmJs.SetTimeWithId_h5 = function(time_id,status){
    if(LenSmJs.isiOS == true){
        SetTimeWithId("time_id="+time_id,"status="+status);
    }else{
        JsInterface.SetTimeWithId(time_id,status);
    }
};


/**
 * 41、Android ZigBee配网流程
 *
 */

//第一步 注册监听：
//LenSmJs.getAddListener_h5();

//第二步 发现设备
LenSmJs.gadgetScan_h5 = function(gadgetTypeId){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.gadgetScan(gadgetTypeId);
    }
};


//第三步 等待监听
//这一步是在页面接收监听的不需要主动调用
//CreategetListener;
//返回值为json，里面包含字段
/**
 *
 * private String gadget_id;
 private String gadget_type_id;
 private String hub_id;
 private String room_id;
 private String gadget_name;
 private String user_id;
 private String client_data;
 private boolean push_msg_flag;
 private long time_created;
 private boolean blklist;
 private String gadget_vendor;
 private String gadget_mac;
 private String gadget_info;
 private Object private_data;
 private String member;
 private String defaultName;

 *
 *
 */
//第四步 取消发现设备
//LenSmJs.gadgetCancelScan_h5();

/**
 * 42、IOS ZigBee配网流程
 *
 * gadget_type_id 可传空
 * 返回值：字符串 设备的gadget_id
 */

LenSmJs.StartScanGadgetWithTypeId_h5 = function(gadget_type_id){
    if(LenSmJs.isiOS == true){
        StartScanGadgetWithTypeId("gadget_type_id="+gadget_type_id);
    }
};

/**

//第二步 ：获取设备列表
LenSmJs.updateGadgetListWithResultBlock_h5 = function(macaddr){
    if(LenSmJs.isiOS == true){
        updateGadgetListWithResultBlock("macaddr="+macaddr);
    }
};

//返回值 json
//其中    state true  成功 false 失败

//第三步 取消发现设备
//LenSmJs.gadgetCancelScan_h5();


**/

/**
 * 43、判断当前链接wifi是不是5G;
 *
 * JudgmentWifi5G
 *
 * 返回值：
 *  {state:"1"}
 *  0 不是5G
 *  1 是5G
 *
 */
LenSmJs.JudgmentWifi5G_h5 = function(){
    if(LenSmJs.isiOS == true){
        JudgmentWifi5G();
    }else{
        JsInterface.JudgmentWifi5G();
    }
};

/**
 * 44、取消发现设备
 *
 *
 *
 */
LenSmJs.gadgetCancelScan_h5 = function(){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.gadgetCancelScan();
    }else {
        gadgetCancelScan();
    }
};

/**
 *
 *  InviteShareRequest ：
 *  List<ShareAccountList> shareAccountList;
 *  List<String> shareGadgetIds：要分享的设备id列表
 *  ShareAccountList：
 *  accountType：账户类型
 *  Account：账户，见ConstantDef.SHARE_ACCOUNT_TYPE.
 *
 */

LenSmJs.inviteShareDevice_h5 = function(accounts,gadget_id_list){
    if( LenSmJs.isiOS == true ){
        inviteShareDevice("accounts="+accounts,"gadget_id_list="+gadget_id_list);
    }else{
        JsInterface.inviteShareDevice(accounts,gadget_id_list);
    }
}

/**
 *   接受设备分享
 *   msgId：分享设备消息的id
 *
 */
LenSmJs.acceptShareInvite_h5 = function(msgId){
    if( LenSmJs.isiOS == true ){
        acceptShareInvite("msgId="+msgId);
    }else{
        JsInterface.acceptShareInvite(msgId);
    }
}

/**
 * 获取别人分享给自己的设备列表
 *
 */
LenSmJs.getGadgetsFromOthersList_h5 = function(){
    if( LenSmJs.isiOS == true ){
        getGadgetsFromOthersList();
    }else{
        JsInterface.getGadgetsFromOthersList();
    }
}

/**
 * 获取分享给别人的设备列表
 *
 */
LenSmJs.getGadgetsMyShared_h5 = function(){
    if( LenSmJs.isiOS == true ){
        getGadgetsMyShared();
    }else{
        JsInterface.getGadgetsMyShared();
    }
}

/**
 * 拉取最近分享的人列表
 *
 */
LenSmJs.getSharedAccountList_h5 = function(){
    if( LenSmJs.isiOS == true ){
        getSharedAccountList();
    }else{
        JsInterface.getSharedAccountList();
    }
}

/**
 * 45、获取单个设备的分享码
 *
 * 返回值：
 *  state,code,share_code_ttl,gadget_ids
 *  share_code_ttl:分享码
 *
 */
LenSmJs.GetShareCodeForGadgets_h5 = function(gadget_id){
    if(LenSmJs.isiOS == true){
        GetShareCodeForGadgets("gadget_id="+gadget_id);
    }else {
        JsInterface.GetShareCodeForGadgets(gadget_id);
    }
};

/**
 * 46、获取分享成员
 *
 * 返回值：
 *  state,code,value(数组)
 *
 */
LenSmJs.GetShareUserArray_h5 = function(gadget_id){
    if(LenSmJs.isiOS == true){
        GetShareUserArray("gadget_id="+gadget_id);
    }else {
        JsInterface.GetShareUserArray(gadget_id);
    }
};

/**
 * 47、删除分享码
 *
 * code：分享码
 * 返回值：
 *  state,code
 *
 */
LenSmJs.DelShareCode_h5 = function(code){
    if(LenSmJs.isiOS == true){
        DelShareCode("code="+code);
    }else {
        JsInterface.DelShareCode(code);
    }
};

/**
 * 48、通过分享码分享设备
 *
 * code：分享码
 * 返回值：
 *  state,code
 *
 */
LenSmJs.ShareGadgetsWithShareCode_h5 = function(code){
    if(LenSmJs.isiOS == true){
        ShareGadgetsWithShareCode("code="+code);
    }else {
        JsInterface.ShareGadgetsWithShareCode(code);
    }
};

/**
 * 分享设备
 *
 * 返回值：
 * 无
 *
 */
LenSmJs.ShareGadgets_h5 = function(){
    if(LenSmJs.isiOS == true){
        ShareGadgets();
    }else {
        JsInterface.ShareGadgets();
    }
};

/**
 * 49、管理员删除成员
 *
 * userIds：要删除的成员ID以，隔开,例如："aaa,bbbb,ccc"
 * 返回值：
 *  state,code
 *
 */
LenSmJs.DelShareMember_h5 = function(gadget_id,userIds){
    if(LenSmJs.isiOS == true){
        DelShareMember("gadget_id="+gadget_id,"userIds="+userIds);
    }else {
        JsInterface.DelShareMember(gadget_id,userIds);
    }
};

/**
 * 50、用户主动退出分享
 *
 * 返回值：
 *  state,code
 *
 */
LenSmJs.MemberQuitShare_h5 = function(gadget_id){
    if(LenSmJs.isiOS == true){
        MemberQuitShare("gadget_id="+gadget_id);
    }else {
        JsInterface.MemberQuitShare(gadget_id);
    }
};


/**
 * 51、	获取PM2.5
 *
 * 返回值：
 *  	state,code,value 取值
 *   value的值：{"code":"","text":"","temp":"","city":"","pm2_5":"","condition":""}
 *   code:天气类型；
 *   text:天气类型描述；
 *   temp:温度
 *   city:天气城市
 *   pm2_5:天气质量，pm2.5的值
 *   condition:天气质量描述
 *
 *   例如：  value.pm2_5下面的值 是 当前城市下面的所有pm2.5
 */
LenSmJs.GetPMData_h5 = function(){
    if(LenSmJs.isiOS == true){
        GetPMData();
    }else {
        JsInterface.GetPMData();
    }
};


/**
 * 52、	获取一段时间内PM2.5
 *
 *
 *    start_time：开始时间：单位为秒
 *    end_time：结束时间：单位为秒
 *    interval：时间间隔：单位为秒
 *    key：传什么反什么
 *  返回值：
 {"state": "1","code": "1","value": "[{"time ":"1540294793 ","value ":"45 "},{"time ":"1540503593 ","value ":"4 "},{"time ":"1540294793 ","value ":"45 "},{"time ":"1540503593 ","value ":"4 "}]","key":"key"}
 *
 */
LenSmJs.GetAllPMData_h5 = function(start_time,end_time,interval,key){
    if(LenSmJs.isiOS == true){
        GetAllPMData("start_time="+start_time,"end_time="+end_time,"interval="+interval,"key="+key);
    }else {
        JsInterface.GetAllPMData(start_time,end_time,interval,key);
    }
};


/**
 *  53、获取某个hubId 下的所有设备
 *  参数hub_id
 *  返回值：json
 [{"room_id":"e95a45ec62245f9c65508d8ced3b8cad","member":"1","gadget_type_id":"100","gadget_classId":"0x0009","user_id":"01ac43921e67e768c66f0670fc58061d","push_msg_flag":"0","gadget_name":"联想","hub_id":"fa43aa084e620789733daa4b9287a184d4add06f","attributes":[{"value":["0"],"attribute_id":"0x0009000d","attr_time":"1516791897"},{"value":["0"],"attribute_id":"0x0009000e","attr_time":"1516791897"},{"value":["1"],"attribute_id":"0x0009000f","attr_time":"1516791897"},{"value":["0"],"attribute_id":"0x1000000a","attr_time":"1516791897"},{"value":["18"],"attribute_id":"0x10000001","attr_time":"1516791897"},{"value":["1S20171127ABZ1731025"],"attribute_id":"0x10000004","attr_time":"1516791897"},{"value":["D06F4A5C9529"],"attribute_id":"0x1000000c","attr_time":"1516791897"},{"value":["陕西省,渭南市,"],"attribute_id":"0x1000000f","attr_time":"1516791897"},{"value":["0"],"attribute_id":"0x00090011","attr_time":"1516791897"},{"value":["50"],"attribute_id":"0x00090012","attr_time":"1516791897"},{"value":["0"],"attribute_id":"0x00090013","attr_time":"1516791897"},{"value":["360","1440"],"attribute_id":"0x00090014","attr_time":"1516791897"},{"value":["0"],"attribute_id":"0x00090015","attr_time":"1516791897"},{"value":["2"],"attribute_id":"0x0009000a","attr_time":"1516794163"},{"value":["2883","3000"],"attribute_id":"0x0009000b","attr_time":"1516797083"},{"value":["0"],"attribute_id":"0x00090000","attr_time":"1516797124"},{"value":["0"],"attribute_id":"0x0009000c","attr_time":"1516797124"},{"value":["0"],"attribute_id":"0x00090010","attr_time":"1516797124"},{"value":["9"],"attribute_id":"0x00090007","attr_time":"1516804567"}],"isInDirectMode":false,"client_data":"","gadget_id":"ad31ee468cd841e5a3701beb0c08a3ac277e5242","status":"0","memAttr":0}]
 */

LenSmJs.GetAllGadgetsWithHudId_h5 = function(hub_id){
    if(LenSmJs.isiOS == true){
        GetAllGadgetsWithHudId("hub_id="+hub_id);
    }else {
        JsInterface.GetAllGadgetsWithHudId(hub_id);
    }
};

/**
 * 54、获取自己的用户信息（本地）
 *
 * DataPoolgetMyUserInfo
 * 返回数据：
 * {"user_id":"","user_name":"","nick_name":"","img_url":""}
 * user_id：用户唯一表示，用户id
 user_name：用户名
 nick_name：昵称
 img_url：头像url
 */

LenSmJs.DataPoolgetMyUserInfo_h5 = function(){
    if(LenSmJs.isiOS == true){
        DataPoolgetMyUserInfo();
    }else {
        JsInterface.DataPoolgetMyUserInfo();
    }
};

/**
 * 55、获取当前账号下所有设备（网络）
 *
 * boolean force：是否强制更新数据，不强制从本地获取，强制true，不强制false
 */

LenSmJs.gadgetListAll_h5 = function(force){
    if(LenSmJs.isiOS == true){
        //gadgetListAll(force);
    }else {
        JsInterface.gadgetListAll(force);
    }
};

//消息相关接口
/**
 * 获取商城消息记录
 *
 */
LenSmJs.getStoreMessageList_h5 = function(){
    if( LenSmJs.isiOS == true ){
        getStoreMessageList();
    }else{
        JsInterface.getStoreMessageList();
    }
}


/**
 * 删除商城消息记录
 * messageId：要删除的消息id
 */
LenSmJs.deleteStoreMessageList_h5 = function(messageId){
    if( LenSmJs.isiOS == true ){
        deleteStoreMessageList("messageId="+messageId);
    }else{
        JsInterface.deleteStoreMessageList(messageId);
    }
}

//消息相关接口
/**
 * 获取分享消息记录
 */
LenSmJs.getShareGadgetMessageList_h5 = function(){
    if( LenSmJs.isiOS == true ){
        getShareGadgetMessageList();
    }else{
        JsInterface.getShareGadgetMessageList();
    }
}
/**
* 删除分享消息记录
* msgId：要删除消息的id
*/
LenSmJs.deleteShareMessage_h5 = function(messageId){
    if( LenSmJs.isiOS == true ){
        deleteShareMessage("messageId="+messageId);
    }else{
        JsInterface.deleteShareMessage(messageId);
    }
}


/**
* 设置消息是否接收
* type: ConstantDef.NOTIFITION_RECEIVE_TYPE
*/
LenSmJs.setNofitycationEnable_h5 = function(type,isOpen){
    if( LenSmJs.isiOS == true ){
        setNofitycationEnable("type="+type,"isOpen="+isOpen);
    }else{
        JsInterface.setNofitycationEnable(type,isOpen);
    }
}


//设备相关接口

/**
*
* 批量控制设备
* MutiGadgetControlRequest：
* gadgetId：要控制的设备id
* actionId：要控制设备的action
* Params：字符串数组，给第0个元素赋值。
*/
LenSmJs.multiGadgetControl_h5 = function(requests){
    if( LenSmJs.isiOS == true ){
        multiGadgetControl("requests="+requests);
    }else{
        JsInterface.multiGadgetControl(requests);
    }
}

/**
* 获取所有设备版本信息
*/
LenSmJs.getAllDeviceVersion_h5 = function(){
    if( LenSmJs.isiOS == true ){
        getAllDeviceVersion();
    }else{
        JsInterface.getAllDeviceVersion();
    }
}

/**
* 获取推荐设备列表
*/
LenSmJs.getRecommendGadgetList_h5 = function(){
    if( LenSmJs.isiOS == true ){
        getRecommendGadgetList();
    }else{
        JsInterface.getRecommendGadgetList();
    }
}

/**
* 批量删除设备
* List<BatchRemoveRequest> ：
* BatchRemoveRequest
* dataType：
* BatchRemoveRequest.REMOVE_DATA_TYPE_HUB解绑hub
* BatchRemoveRequest.REMOVE_DATA_TYPE_GADGET删除设备
* Id：对应的hubId或gadgetId
*/
LenSmJs.deleteGadgetBatch_h5 = function(requests){
    if( LenSmJs.isiOS == true ){
        deleteGadgetBatch("requests="+requests);
    }else{
        JsInterface.deleteGadgetBatch(requests);
    }
}

/**
* 根据房间id获取设备列表
* roomId：要查找的房间id
* Force：是否强制更新数据，不强制从本地获取，强制true，不强制false
*/
LenSmJs.getGadgetsByRoomId_h5 = function(roomId,force){
    if( LenSmJs.isiOS == true ){
        getGadgetsByRoomId("roomId="+roomId);
    }else{
        JsInterface.getGadgetsByRoomId(roomId,force);
    }
}

/**
* 根据设备类别id获取设备商品信息
* gadgetTypeIds：设备类别id数组
*/
LenSmJs.getGadgetGoodsInfoByTypeId_h5 = function(strGadgetTypeIds){
    if( LenSmJs.isiOS == true ){
        getGadgetGoodsInfoByTypeId("strGadgetTypeIds="+strGadgetTypeIds);
    }else{
        JsInterface.getGadgetGoodsInfoByTypeId(strGadgetTypeIds);
    }
}

/**
* 根据设备类别id获取设备商品信息
* gadgetId：设备id
*/
LenSmJs.getGadgetTypeVersion_h5 = function(gadgetTypeId,model){
    if( LenSmJs.isiOS == true ){
        getGadgetTypeVersion("gadgetTypeId="+gadgetTypeId,"model="+model);
    }else{
        JsInterface.getGadgetTypeVersion(gadgetId,model);
    }
}

/**
 * 添加联动
 * IOS
 * @param smartRuleInfo 联动信息，通过id获取后传递即可
 * Android
 * @param linkageInfo 联动信息，通过id获取后传递即可
 *
 */

 LenSmJs.CreateRule_h5 = function(ruleInfo){
     if( LenSmJs.isiOS == true ){
         CreateRule("ruleInfo="+ruleInfo);
     }else{
         JsInterface.CreateRule(ruleInfo);
     }
 }
 /**
  * 删除联动
  *
  * @param itemType ConstantDef.ITEM_TYPE.ITEM_TYPE_LINKAGE，固定值 4
  * @param itemId   linkid
  *
  */

 LenSmJs.LKremoveItem_h5 = function(itemType, itemId){
     if( LenSmJs.isiOS == true ){
         LKremoveItem("itemId="+itemId);
     }else{
         JsInterface.LKremoveItem(itemType, itemId);
     }
 }

/**
 * 5.3修改联动，是否推送消息接口
 * IOS
 * @param linkageInfo 联动信息，通过id获取后传递即可
 * @param pushFlag    true，false
 * Android
 * @param linkageInfo 联动信息，通过id获取后传递即可
 * @param pushFlag    true，false
 */
LenSmJs.linkageChangePushFlag_h5 = function(ruleid, pushFlag){
   if( LenSmJs.isiOS == true ){
       linkageChangePushFlag("ruleid="+ruleid,"pushFlag="+pushFlag);
   }else{
       JsInterface.linkageChangePushFlag(ruleid, pushFlag);
   }
}

/**
 * 5.4修改联动，是否可用
 *
 * @param linkageInfo 联动信息，通过id获取后传递即可
 * @param pushFlag    true，false
 *
 */
LenSmJs.linkageSetValid_h5 = function(ruleid, pushFlag){
    if( LenSmJs.isiOS == true ){
        linkageSetValid("ruleid="+ruleid);
    }else{
        JsInterface.linkageSetValid(ruleid,pushFlag);
    }
}

/**
 * 5.5.1修改联动 修改名称,icon
 */
LenSmJs.modifyNameWithIconId_h5 = function(ruleid, ruleName,icon){
    if( LenSmJs.isiOS == true ){
        modifyNameWithIconId("ruleid="+ruleid,"ruleName="+ruleName,"icon="+icon);
     }else{
        JsInterface.modifyNameWithIconId(ruleid, ruleName,icon);
     }
}
/**
 * 5.5.2修改联动 修改Conditions、actions、start_time、end_time、week
 */
LenSmJs.linkageModify_h5 = function(ruleid, conditions,actions,start_time,end_time,week){
    if( LenSmJs.isiOS == true ){
         linkageModify("ruleid="+ruleid,"conditions="+conditions,"actions="+actions,"start_time="+start_time,"end_time="+end_time,"week="+week);
    }else{
         JsInterface.linkageModify(ruleid, conditions,actions,start_time,end_time,week);
    }
}


/**
 * 获取所有联动列表
 *
 * @param force boolean force：是否强制更新数据，不强制从本地获取，强制true，不强制false
 */
 LenSmJs.linkageListAll_h5 = function(force){
     if( LenSmJs.isiOS == true ){
         linkageListAll();
     }else{
         JsInterface.linkageListAll(force);
     }
 }
/**
 * 获取推荐联动列表
 *
 */
LenSmJs.getRecommendRuleList_h5 = function(){
  if( LenSmJs.isiOS == true ){
      getRecommendRuleList();
  }else{
      JsInterface.getRecommendRuleList();
  }
}

/**
 * 根据联动id获取联动信息
 *
 * @param linkId linkId：联动id
 */
LenSmJs.linkageInfoById_h5 = function(linkId){
   if( LenSmJs.isiOS == true ){
       linkageInfoById("linkId="+linkId);
   }else{
       JsInterface.linkageInfoById(linkId);
   }
}

/**
 * 手动执行联动
 *
 * @param ruleId：要执行的联动id
 */
 LenSmJs.directExecuteRule_h5 = function(ruleId){
    if( LenSmJs.isiOS == true ){
        directExecuteRule("ruleId="+ruleId);
    }else{
        JsInterface.directExecuteRule(ruleId);
    }
 }


/**
 * 获取系统时间制 （12/24小时制）
 * 返回值:
 * 格式：json
 * code：返回码（见全局返回码）
 * {"hourMode":"12"}
 */
 LenSmJs.getHourMode_h5 = function(){
    if( LenSmJs.isiOS == true ){
        getHourMode();
    }else{
        JsInterface.getHourMode();
    }
 }

//群组相关
//创建群组
LenSmJs.createGroup_h5 = function(group_name,gadget_ids,room_id,icon){
    if( LenSmJs.isiOS == true ){
        createGroup("group_name="+group_name,"gadget_ids="+gadget_ids,"room_id="+room_id,"icon="+icon);
    }else{
        JsInterface.createGroup(group_name,gadget_ids,room_id,icon);
    }
 }
//删除群组
 LenSmJs.deleteGroup_h5 = function(groups){
    if( LenSmJs.isiOS == true ){
        deleteGroup("groups="+groups);
    }else{
        JsInterface.deleteGroup(groups);
    }
 }
//获取群组
 LenSmJs.getGroups_h5 = function(){
    if( LenSmJs.isiOS == true ){
        getGroups();
    }else{
        JsInterface.getGroups();
    }
 }
//修改群组
 LenSmJs.modifyGroups_h5 = function(groupId, groupName, gadgetIds, roomId, icon){
     if( LenSmJs.isiOS == true ){
         modifyGroups("groupId="+groupId,"groupName="+groupName,"gadgetIds="+gadgetIds,"roomId="+roomId,"icon="+icon);
     }else{
         JsInterface.modifyGroups(groupId, groupName, gadgetIds, roomId, icon);
     }
 }

//Wifi相关
//获取Wifi列表
LenSmJs.getWifiList_h5 = function(){
    if( LenSmJs.isiOS == true ){
        getWifiList();
    }else{
        JsInterface.getWifiList();
    }
}
//打开Wifi设置
 LenSmJs.startWifiSetting_h5 = function(){
      if( LenSmJs.isiOS == true ){
          startWifiSetting();
      }else{
          JsInterface.startWifiSetting();
      }
 }

/***
 * 其他方法：
 *
 * @returns {*}
 * 获取当前时区
 * 返回值：时区字符串
 */
//获取时区
LenSmJs.getTimezoneName_h5=function (){
    var tmSummer = new Date(Date.UTC(2005, 6, 30, 0, 0, 0, 0));
    var so = -1 * tmSummer.getTimezoneOffset();
    var tmWinter = new Date(Date.UTC(2005, 12, 30, 0, 0, 0, 0));
    var  wo = -1 * tmWinter.getTimezoneOffset();

    if (-660 == so && -660 == wo) return 'Pacific/Midway';
    if (-600 == so && -600 == wo) return 'Pacific/Tahiti';
    if (-570 == so && -570 == wo) return 'Pacific/Marquesas';
    if (-540 == so && -600 == wo) return 'America/Adak';
    if (-540 == so && -540 == wo) return 'Pacific/Gambier';
    if (-480 == so && -540 == wo) return 'US/Alaska';
    if (-480 == so && -480 == wo) return 'Pacific/Pitcairn';
    if (-420 == so && -480 == wo) return 'US/Pacific';
    if (-420 == so && -420 == wo) return 'US/Arizona';
    if (-360 == so && -420 == wo) return 'US/Mountain';
    if (-360 == so && -360 == wo) return 'America/Guatemala';
    if (-360 == so && -300 == wo) return 'Pacific/Easter';
    if (-300 == so && -360 == wo) return 'US/Central';
    if (-300 == so && -300 == wo) return 'America/Bogota';
    if (-240 == so && -300 == wo) return 'US/Eastern';
    if (-240 == so && -240 == wo) return 'America/Caracas';
    if (-240 == so && -180 == wo) return 'America/Santiago';
    if (-180 == so && -240 == wo) return 'Canada/Atlantic';
    if (-180 == so && -180 == wo) return 'America/Montevideo';
    if (-180 == so && -120 == wo) return 'America/Sao_Paulo';
    if (-150 == so && -210 == wo) return 'America/St_Johns';
    if (-120 == so && -180 == wo) return 'America/Godthab';
    if (-120 == so && -120 == wo) return 'America/Noronha';
    if (-60 == so && -60 == wo) return 'Atlantic/Cape_Verde';
    if (0 == so && -60 == wo) return 'Atlantic/Azores';
    if (0 == so && 0 == wo) return 'Africa/Casablanca';
    if (60 == so && 0 == wo) return 'Europe/London';
    if (60 == so && 60 == wo) return 'Africa/Algiers';
    if (60 == so && 120 == wo) return 'Africa/Windhoek';
    if (120 == so && 60 == wo) return 'Europe/Amsterdam';
    if (120 == so && 120 == wo) return 'Africa/Harare';
    if (180 == so && 120 == wo) return 'Europe/Athens';
    if (180 == so && 180 == wo) return 'Africa/Nairobi';
    if (240 == so && 180 == wo) return 'Europe/Moscow';
    if (240 == so && 240 == wo) return 'Asia/Dubai';
    if (270 == so && 210 == wo) return 'Asia/Tehran';
    if (270 == so && 270 == wo) return 'Asia/Kabul';
    if (300 == so && 240 == wo) return 'Asia/Baku';
    if (300 == so && 300 == wo) return 'Asia/Karachi';
    if (330 == so && 330 == wo) return 'Asia/Calcutta';
    if (345 == so && 345 == wo) return 'Asia/Katmandu';
    if (360 == so && 300 == wo) return 'Asia/Yekaterinburg';
    if (360 == so && 360 == wo) return 'Asia/Colombo';
    if (390 == so && 390 == wo) return 'Asia/Rangoon';
    if (420 == so && 360 == wo) return 'Asia/Almaty';
    if (420 == so && 420 == wo) return 'Asia/Bangkok';
    if (480 == so && 420 == wo) return 'Asia/Krasnoyarsk';
    if (480 == so && 480 == wo) return 'Australia/Perth';
    if (540 == so && 480 == wo) return 'Asia/Irkutsk';
    if (540 == so && 540 == wo) return 'Asia/Tokyo';
    if (570 == so && 570 == wo) return 'Australia/Darwin';
    if (570 == so && 630 == wo) return 'Australia/Adelaide';
    if (600 == so && 540 == wo) return 'Asia/Yakutsk';
    if (600 == so && 600 == wo) return 'Australia/Brisbane';
    if (600 == so && 660 == wo) return 'Australia/Sydney';
    if (630 == so && 660 == wo) return 'Australia/Lord_Howe';
    if (660 == so && 600 == wo) return 'Asia/Vladivostok';
    if (660 == so && 660 == wo) return 'Pacific/Guadalcanal';
    if (690 == so && 690 == wo) return 'Pacific/Norfolk';
    if (720 == so && 660 == wo) return 'Asia/Magadan';
    if (720 == so && 720 == wo) return 'Pacific/Fiji';
    if (720 == so && 780 == wo) return 'Pacific/Auckland';
    if (765 == so && 825 == wo) return 'Pacific/Chatham';
    if (780 == so && 780 == wo) return 'Pacific/Enderbury';
    if (840 == so && 840 == wo) return 'Pacific/Kiritimati';
    return 'US/Pacific';
}
