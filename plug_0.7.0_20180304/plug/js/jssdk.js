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
 *  3、获取最新的定时记录
 *
 *
 */
LenSmJs._h5 = function(){
    if(LenSmJs.isiOS == true){

    }else{

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
 *
 * 回调方法：通过0.1 方法callbackdata(id,name,data)
 其中name : AddRoomWithName;
 返回值：
 {“state”:”0”}
 字符串  0 失败 1 成功；
 */
LenSmJs.AddRoomWithName_h5 = function(room_name,homeId){
    if(LenSmJs.isiOS == true){
        AddRoomWithName("room_name="+room_name,"homeId="+homeId);
    }else{
        JsInterface.AddRoomWithName(room_name, homeId);
    }
};

/**
 * 17、解除hub绑定
 *
 *  itemType：ConstantDef.ITEM_TYPE.ITEM_TYPE_HUB，固定值
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
            字符串，逗号“,”分割
           var gadgetName = data.split(",")[1];  ：设备名字
           var gadgetId = data.split(",")[2];   :设备号
}
 if(name == "onCreateGadgetTimeout"){
           //创建设备超时
}
 *
 * */
//第一步 注册监听：
LenSmJs.getAddListener_h5();
//第二步 开始绑定
LenSmJs.startAutoFindDeviceBySoftAp_h5 = function(gadgetKinds,ssid, psd, ip, ls, sl, perCode, timeZone, cn, wctom, stom, btom, cgtom, commongadget){
    JsInterface.startAutoFindDeviceBySoftAp(gadgetKinds,ssid, psd, ip, ls, sl, perCode, timeZone, cn, wctom, stom, btom, cgtom, commongadget);
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
 * 23、  版本更新：获取版本号，根据新旧版本号是否一致，来判断是否是新版本
 * 返回值：
 * {"state":"0","code":"aaa","version":"abcdefghi","os_version":"123","image_version":"3456"}
 * state： 字符串 0 成功 ； 1  失败
 *
 * 参数：对于空气净化器是固定值
 * gadgetTypeId:1000110
 * ms:Mainstream
 * version:当前版本号
 */

LenSmJs.GetEquipmentVersion_h5 = function(gadgetTypeId,ms,version){
    if(LenSmJs.isiOS == true) {
        GetEquipmentVersion("gadget_type_id="+gadgetTypeId,"version="+version);
    }else{
        JsInterface.GetEquipmentVersion(gadgetTypeId,ms);
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
        GadgetTypeDescriptionWithTypeId("gadgetTypeId="+gadgetTypeId );
    }else{
        JsInterface.GadgetTypeDescriptionWithTypeId(gadgetTypeId );
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
        //JsInterface.GetTimeListWithGadgetid();
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
 * 40 finish：，直接粉碎页面，进入到app里面
 *
 */
LenSmJs.initFinish_h5 = function(){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.initFinish();
    }else{
        successBack();
    }
};

/**
 * 41、Android ZigBee配网流程
 *
 */

//第一步 注册监听：
// LenSmJs.getAddListener_h5();

//第二步 发现设备
LenSmJs.gadgetScan_h5 = function(gadgetTypeId){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.gadgetScan(gadgetTypeId);;
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
// LenSmJs.gadgetCancelScan_h5();

/**
 * 42、IOS ZigBee配网流程
 *
 * gadget_type_id 可传空
 */
//第一步 ：设备扫描

LenSmJs.StartScanGadgetWithTypeId_h5 = function(gadget_type_id){
    if(LenSmJs.isiOS == true){
        StartScanGadgetWithTypeId("gadget_type_id="+gadget_type_id);
    }
};
//返回值：字符串
//设备的macaddr

//第二步 ：获取设备列表
LenSmJs.updateGadgetListWithResultBlock_h5 = function(macaddr){
    if(LenSmJs.isiOS == true){
        updateGadgetListWithResultBlock("macaddr="+macaddr);
    }
};

//返回值 json
//其中    state true  成功 false 失败

//第三步 取消发现设备
// LenSmJs.gadgetCancelScan_h5();


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
        JsInterface.DelShareMember(	gadget_id,userIds);
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