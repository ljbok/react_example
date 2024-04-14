import React, {Component} from "react";
import StrAddButton from "./StrAddButton";

class App extends Component {
  render() {
    return(
      <div>
        <h1>Start React 200!</h1>
        <span>{this.props.store.getState().data.str}</span><br/> {/*index.js 에서 App.js로 store를 props로 전달받은 상황*/}  
        <StrAddButton store={this.props.store}/>
      </div>
    )
  }
}

export default App;