import floatObj from '@/utils/calculation'
var   gettype=Object.prototype.toString
var  isEmpty =function (str){

  if(gettype.call(str)!='[object String]') return true;
  return str.length <= 0;
}
//正则判定
var _validateByReg = function (str,sRegexp){
  if(gettype.call(str)=='[object Number]'){
    str+="";
  }

  str = str?str.trim():'';

  if(isEmpty(str)) return true;
  if(str && (new RegExp (sRegexp) ) && (new RegExp (sRegexp)).test(str)) return true ;
  return false;
};

export  let validate= {
  /**
   * 是否不为空
   * @param {String} str
   * @return {Boolean}
   */
  isNotEmpty :function (str){
    if(gettype.call(str)=='[object Number]'){
      str+="";
    }

    if(gettype.call(str)!='[object String]') return false;
    return str.length > 0;
  },
  /**
   * 是否为空
   * @param {String} str
   * @return {Boolean}
   */
  isEmpty:isEmpty,

  isTel:function (str) {
    return _validateByReg(str,/^[1][3,4,5,7,8,6,9][0-9]{9}$/)
  },

  isEmai:function (str) {
    return _validateByReg(str,/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
  },
  isNumber:function(str){
    return  _validateByReg(str,/^[\-]?\d+([\.]\d+)*$/)
  },
  isOnlyNumber:function(str){
    return _validateByReg(str,/^[1-9]+[0-9]*$/)
  },
  isInteger:function(str){
    return _validateByReg(str,/^\d*/)
  },
  lengh:function(str,lenght){
    return str.length==lenght;
  },
  minLengh:function(str,lenght){//*minlenth?7
    return str.length>=lenght;
  },
  maxNum:function(str,num) {
    return floatObj.subtract(str,num)<=0

  },
  minNum:function(str,num) {
    return floatObj.subtract(str,num)>=0

  },
  isVehicleNumber:function(vehicleNumber){
    var result = false;
    if (vehicleNumber.length == 7){
      var express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9领警学挂港澳试超]{1}|[使]{1}[A-Z0-9]{1}[A-HJ-NP-Z0-9]{5})$/;
      result = express.test(vehicleNumber);
    }
    return result;
  },
  xiaoShuLenght:function(str,lenght){
    if(isEmpty(str)){
      return true
    }
    let arr = str.split('.')
    if(!arr[1]||arr[1].length<=parseInt(lenght)){
      return true
    }
    return false
  },
  integerLenght:function(str,lenght){
    if(isEmpty(str)){
      return true
    }
    let arr = str.split('.')
    if(!arr[0]||arr[0].length<=parseInt(lenght)){
      return true
    }
    return false
  },
  maxLengh:function(str,lenght){//*maxLengh?7
    if(str && str.length){
      str=str.replace('.','');
      return str.length<=parseInt(lenght);
    }
    return true
  },

  mustLengh:function(str,lenght){//*mustLengh?7
    if(str && str.length){
      return str.length==parseInt(lenght);
    }
    return true
  },
  absLengh:function (str,lenght) { //绝对值比较
    return Math.abs(str) <= Math.abs(lenght)
  }

}
export let messges={
  isNotEmpty:'请输入{messge}',
  isTel:"请输入正确的手机号码",
  lengh:"长度为{key}",
  isEmai:"请输入正确的邮箱",
  ajax:"{messge}已存在",
  minLengh:"{messge}最小长度为{key}",
  isNumber:"请输入数字",
  maxNum:"{messge}最大不可超过{key}",
  isOnlyNumber:"请输入不为0的整数",
  maxLengh:"{messge}最大长度为{key}",
  isInteger:"请输入整数",
  xiaoShuLenght:"小点后最多{key}位",
  mustLengh:"{messge}长度必须为{key}位",
  absLengh:"{messge}最大不可超过{key}",
  integerLenght:"整数位最大{key}位",
  minNum:"{messge}不能小于{key}",
  isVehicleNumber:"请输入正确的车牌号"
}
