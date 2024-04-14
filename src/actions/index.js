/**
 * src > actions > index.js
 * 다른 컴포넌트에서 ㅏimport {메소드명} from './actions' 하면 그 메소드 가져다가 쓸 수 있음.
 */
export const ADD = 'ADD';
export const add = () => {
    return {
        type : ADD
    }
};