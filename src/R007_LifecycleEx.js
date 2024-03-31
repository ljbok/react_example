import React, { Component } from "react";

/**
 * - componentDidMount() 함수는 작성한 함수들 중 가장 마지막으로 실행된다.
 * - render() 함수가 return 되는 html 형식의 코드를 화면에 그려준 후 실행된다.
 * - 화면이 모두 그려진 후에 실행돼야 하는 이벤트 처리, 초기화 등 가장 많이 활용되는 함수이다.
 * - 순서 constructor ▷ getDerivedStateFromProps ▷ render  ▷ componentDidMount 
 */
class R007_LifecycleEx extends Component {
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
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS COMPONENTDIDMOUNT FUNCTION]</h2>
        )
    }
}

export default R007_LifecycleEx;