import type {  MessageType } from './type'


const messageTypes:MessageType[] = ["success", "info", "warning", "error"];

const messageDefaults = {
    id:"",
    type:'info' as MessageType,
    zIndex:0,
    onClose:  void 0,
    message:"",
    duration:3000
}


export {messageDefaults,messageTypes}
