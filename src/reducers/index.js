/**
 * src > reducers > index.js
 */
import {ADD} from '../actions'
import { combineReducers } from 'redux' // 리듀서를 store 에 넘겨주기 위해 combinedReducers 함수를 임포트


const initState = { // 리듀서 데이터 초깃값 선언 및 할당
    str : 'react',
}

const data = (state = initState, action) => {
    switch (action.type) {
        case ADD:
            return state, {
                str : state.str + '200'
            };
            
            default:
                return state;
    }
}

/**
 * 리듀서 함수 data를 combineReducers 함수를 이용해 하나의 리듀싱 함수로 변환하고
 * 익스포트한다. 이 함수는 src의 index.js에 있는 createStore 함수의 파라미터로 넘겨진다. 스토어 state 
 * 값에 변경이 발생했기 때문에 subscribe 함수가 동작해 화면이 렌더링된다.
 */
const App = combineReducers({
    data
    // 이렇게 하면 다른 컴포넌트에서 import reducers from './reducers'; 로 불러와서
    // const store = createStore(reducers) 이렇게 리듀러 스토어를 생성하고
    // 위 store를 props로 자식 컴포넌트에게 전달하면
    // 여기 src > reducers > index.js 에 있는 data 가 store에 전달되는 형태로 인식된다.
});

export default App;