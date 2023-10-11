import {VNode,ComponentInternalInstance} from 'vue'


export declare type MessageType = 'success' | 'error' | 'info' | "warning"
type Data = {
    [x: string]: any;
}
export declare interface IMessageProps extends Data{
    id?: string
    type?: MessageType
    duration?: number
    zIndex?: number
    message?: string | VNode
    offset?: number
    onDestroy?: () => void
    onClose?: () => void
}

export declare interface MessageOptions extends IMessageProps {
    appendTo?: HTMLElement | string | Element | null
  }
  

export declare type Message =  {
    (options: MessageOptions | string) : { close: () => void; }
} & {
    [key in MessageType]?: (options: MessageOptions | string) => { close: () => void };
};

export declare interface Instance {
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

