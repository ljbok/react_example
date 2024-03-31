import React, { Component } from "react";

/**
 * render()는 return 되는 html 형식의 코드를 화면에 그려주는 함수이다.
 * 화면 내용이 변경돼야 할 시점에 자동으로 호출된다.
 */
class R004_LifecycleEx extends Component {
    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS RENDER FUNCTION]</h2>
        )
    }
}

export default R004_LifecycleEx;