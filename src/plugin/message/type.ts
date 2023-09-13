import {VNode,VNodeProps,ComponentInternalInstance} from 'vue'

type MessageType = 'success' | 'error' | 'info' | "warning"
type Data = {
    [x: string]: any;
}
interface IMessageProps extends Data{
    id?: string
    type?: MessageType
    duration?: number
    zIndex?: number
    message?: string | VNode
    offset?: number
    onDestroy?: () => void
    onClose?: () => void
}

interface MessageOptions extends IMessageProps {
    appendTo?: HTMLElement | string | Element | null
  }
  

type Message =  {
    (options: MessageOptions | string) : { close: () => void; }
} & {
    [key in MessageType]?: (options: MessageOptions | string) => { close: () => void };
};

interface Instance {
    id:string;
    vnode:VNode;
    vm:ComponentInternalInstance | null,
    handler:{
        close: () => void;
    };
    props:{
        [x: string]: unknown
    }
}

export type {IMessageProps,MessageType,Message,Instance,MessageOptions}

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
