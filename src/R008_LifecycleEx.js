import React, { Component } from "react";

/**
 - componentDidMount() 함수는 '생성' 단계의 생명주기 함수 중 가장 마직막으로 실행된다.
 - tmp_state2라는 state 변수에 true 라는 boolean 유형의 데이터를 세팅했다.
 - setState() 함수는 변수의 선언과 초기화를 동시에 실행한다.
 - 따라서 state 변경이 발생했기 때문에 '변경' 단계의 생명주기 함수 shouldComponentUpdate() 가 실행된다.
 - shouldComponentUpdate() 는 boolean 유형의 데이터를 반환하는데 return 값이 true 일 경우에 render() 함수를 한 번 더 - 호출한다.
 */

class R008_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call : ' + props.prop_value);
        return {tmp_state : props.prop_value};
    }

    constructor(props) {
        super(props);
        this.state = {}
        console.log('1. constructor Call');
    }

    componentDidMount() {
        console.log('4. conponeneDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state);
        this.setState({tmp_state2 : true});
    }

    shouldComponentUpdate(props, state) {
        console.log('6. shouldComponentUpdate Call / tmp_state2 = ' + state.tmp_state2);
        return state.tmp_state2;
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS COMPONENTDIDMOUNT FUNCTION]</h2>
        )
    }
}

export default R008_LifecycleEx;