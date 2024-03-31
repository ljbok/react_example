import React, { Component }  from "react";

/**
 * startWith(), endsWith(), includes() -> ES6에 추가된 String 함수들
 * startWith()는 앞에서 부터, endsWith()는 뒤에서 부터
 * includes()는 위치에 상관없이 변수에 특정 문자열이 포함돼 있는지 판단한다. 함수 조건에 부합하면
 * true, 부합하지 않으면 false를 반환한다.
 */

class R009_Es6 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var jsString1 = '자바스크립트';
        var jsString2 = '입니다\n 다음 줄입니다.';
        console.log(jsString1 + ' 문자열' + jsString2 + '~');
        
        var Es6String1 = 'Es6';
        var Es6String2 = '입니다.';
        console.log(`${Es6String1} 문자열${Es6String2}!!
         ____ 다음줄 입니다.`);

         var LoginString = "Es6에 추가된 String 함수들 입니다.";
         console.log('startWith : ' + LoginString.startsWith("Es6에 추가"));
         console.log('endWith : ' + LoginString.endsWith("함수들 입니다."));
         console.log('includes : ' + LoginString.includes("추가된 String"));
    }

    render() {
        return (
            <h2>[THIS IS ES6 STRING]</h2>
        )
    }
}

export default R009_Es6;