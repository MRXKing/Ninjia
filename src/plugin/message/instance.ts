import { shallowReactive } from 'vue';
import type {Instance} from './type'
const instances = shallowReactive<Instance[] >([]);
const getInstance = (id:string) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  const current = instances[idx];
  let prev;
  if (idx > 0) {
    prev = instances[idx - 1];
  }
  return { current, prev };
};
const getLastOffset = (id:string) => {
  const { prev } = getInstance(id);
  if (!prev)
    return 0;
  return prev.vm?.exposed?.bottom.value;
};

export { getInstance, getLastOffset, instances };
