import md5 from 'js-md5'
import {message} from "@/plugin/message"
import type {BaiduParms,BaiduResult} from "./BaiduAPI"

function generateRandomSalt(length:number) {
    let salt = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      // 通过随机数索引选择一个字符添加到 salt 中
      salt += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return salt;
}

function hexArrayToString(hexArray:any) {
    let str = '';
  
    for (let i = 0; i < hexArray.length; i++) {
      const hexString = hexArray[i];
      const charCode = parseInt(hexString.toString(16), 16);
      str += String.fromCharCode(charCode);
    }
  
    return str;
}



const BaiduSecertKey = [0x70, 0x56, 0x66, 0x64, 0x55, 0x37, 0x76, 0x39, 0x42, 0x74,0x5a,0x6a, 0x37, 0x68, 0x67, 0x55, 0x72, 0x4c, 0x67, 0x46]
const BaiduAppID = "20230807001772104"

const BaiduApiUrl:string = "https://fanyi-api.baidu.com/api/trans/vip/translate"

enum TranslationError {
    Success = 52000,
    RequestTimeout = 52001,
    SystemError = 52002,
    UnauthorizedUser = 52003,
    MissingRequiredParams = 54000,
    SignatureError = 54001,
    AccessFrequencyLimited = 54003,
    InsufficientAccountBalance = 54004,
    FrequentLongQuery = 54005,
    InvalidClientIP = 58000,
    UnsupportedTranslationLanguage = 58001,
    ServiceClosed = 58002,
    AuthenticationFailedOrInactive = 90107
}

const BaiduErrorMessage: Record<TranslationError, string> = {
    [TranslationError.Success]: "成功",
    [TranslationError.RequestTimeout]: "请求超时,请重试",
    [TranslationError.SystemError]: "系统错误,请重试",
    [TranslationError.UnauthorizedUser]: "未授权用户,请检查appid是否正确或者服务是否开通",
    [TranslationError.MissingRequiredParams]: "必填参数为空,请检查是否少传参数",
    [TranslationError.SignatureError]: "签名错误,请检查您的签名生成方法",
    [TranslationError.AccessFrequencyLimited]: "访问频率受限,请降低您的调用频率,或进行身份认证后切换为高级版/尊享版",
    [TranslationError.InsufficientAccountBalance]: "账户余额不足,请前往管理控制台为账户充值",
    [TranslationError.FrequentLongQuery]: "长query请求频繁,请降低长query的发送频率,3s后再试",
    [TranslationError.InvalidClientIP]: "客户端IP非法,请检查个人资料里填写的IP地址是否正确,可前往开发者信息-基本信息修改",
    [TranslationError.UnsupportedTranslationLanguage]: "译文语言方向不支持,请检查译文语言是否在语言列表里",
    [TranslationError.ServiceClosed]: "服务当前已关闭,请前往管理控制台开启服务",
    [TranslationError.AuthenticationFailedOrInactive]: "认证未通过或未生效"
};

const BaiduTranslate = async (params:BaiduParms):Promise<BaiduResult> => {
    try {
        if(!params.salt){
            params.salt = generateRandomSalt(8)
        }
        let secertkey = hexArrayToString(BaiduSecertKey)
        if(!params.appid){
            params.appid = BaiduAppID
        }
        if(!params.sign){
            params.sign = md5(params.appid+params.q+params.salt+secertkey)
        }
        const callbackName:string = `jsonpCallback_${Date.now()}`
        const url:URL = new URL(BaiduApiUrl)
        const paramArray: [string, string][] = Object.entries(params);
        const urlSearchParams:URLSearchParams = new URLSearchParams(paramArray);
        url.search = urlSearchParams.toString()
        const script:HTMLScriptElement = document.createElement('script');
        script.src = `${url.href}&callback=${callbackName}`;
        document.head.appendChild(script);
        return new Promise((resolve, _) => {
            
            window[callbackName] = function(data:BaiduResult) {
              delete window[callbackName]; // 清除全局回调函数
              document.head.removeChild(script)
              if(data.error_code){
                message({
                    duration: 2000,
                    message: BaiduErrorMessage[data.error_code],
                    type: 'error',
                })
              }
              resolve(data); // 将数据传递给 Promise 的 resolve 函数
            }
        })
      } catch (error:any) {
        // 处理错误信息
        message({
            duration: 2000,
            message: error,
            type: 'error',
        })
        return Promise.reject(error)
      }
}


export {BaiduTranslate}