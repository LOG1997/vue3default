import axios from "./axios";
let {get,post}=axios;
// 例子
export const test_get=(data:object)=>get(`/test`,data);
export const test_post=(data:object)=>post(`/test`,data);
