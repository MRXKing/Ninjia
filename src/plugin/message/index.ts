import type { IMessageProps, MessageType, Message, Instance, MessageOptions } from './type'
import { createVNode, isVNode, render, App } from 'vue'
import MessageConstructor from './index.vue'
import { messageDefaults, messageTypes } from './default'
import { instances } from './instance'
let seed = 0
let zIndex = 30

const normalizeOptions = (params: MessageOptions) => {
    const options = params;
    const normalized = {
        ...messageDefaults,
        ...options
    };
    
    if (messageTypes.indexOf(normalized.type) < 0){
        normalized.type="success"
    }
    if (!normalized.appendTo) {
        normalized.appendTo = document.body;
    } else if (typeof normalized.appendTo == "string") {
        let appendTo = document.querySelector(normalized.appendTo);
        if (!(appendTo instanceof Element)) {
            console.warn("Message", "the appendTo option is not an HTMLElement. Falling back to document.body.");
            appendTo = document.body;
        }
        normalized.appendTo = appendTo;
    }
    return normalized;
};

const createMessage = ({ appendTo, ...options }: MessageOptions) => {
    const id: string = `message_${seed++}`;
    if (typeof appendTo === 'string') {
        appendTo = document.querySelector(appendTo)
    }
    if (!(appendTo instanceof HTMLElement)) {
        appendTo = document.body
    }
    const userOnClose = options.onClose;
    const props: IMessageProps = {
        ...options,
        zIndex: zIndex++,
        id: id,
        onClose: () => {
            userOnClose == null ? void 0 : userOnClose();
            closeMessage(instance)
        },
        onDestroy: () => {
            render(null, container)
        }
    }
    const container = document.createElement('div')
    const vnode = createVNode(
        MessageConstructor,
        props,
        typeof props.message == "function" || isVNode(props.message) ? {
            default: typeof props.message == "function" ? props.message : () => props.message
        } : null,
    )
    render(vnode, container)

    appendTo.appendChild(container.firstElementChild || container)
    const vm = vnode.component;
    const handler = {
        close: () => {
            vm!.exposed!.visible.value = false;
        }
    };
    const instance: Instance = {
        id,
        vnode,
        vm,
        handler,
        props: vnode!.component!.props
    };
    return instance;
    
}
export const message: Message = (options: MessageOptions | string) => {
    if (typeof options === 'string') {
        options = { message: options }
    }
    const normalized = normalizeOptions(options);
    const instance = createMessage(normalized);
    instances.push(instance)
    return instance.handler
}

const closeMessage = (instance: Instance) => {
    const idx = instances.indexOf(instance);
    if (idx === -1)
        return;
    instances.splice(idx, 1);
    const { handler } = instance;
    handler.close();
}

messageTypes.forEach((type: MessageType) => {
    message[type] = (options: MessageOptions | string) => {
        if (typeof options === 'string') {
            options = { message: options }
        }
        const normalized = normalizeOptions(options);
        return message({ ...normalized, type });
    };
});

export default {
    install(app: App) {
        app.config.globalProperties.$message = message
    }
}
