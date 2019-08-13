import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component{
  render(){
    return (
    <div>
      你点击了<span id="value">{this.props.n}</span>次
      <div>
        <button id="add1" onClick={this.props.add1.bind(this)}>+1</button>
        <button id="add2" onClick={this.props.add2.bind(this)}>+2</button>
        <button id="addIfOdd">如果是单数就+1</button>
        <button id="add1After2Sec">两秒后+1</button>
      </div>
    </div>
  )};
}

function mapStateToProps(state){ //必须是函数
  return {
    n: state.n     //从当前的state中取出你想要的值 ： n; x专门用来生成props
  }
}

function mapDispatchToProps(dispatch){ 
    return{
      add1: ()=>dispatch({type:'add', payload:1}),
      add2: ()=>dispatch({type:'add', payload:2}),
    }
}

// connect 就是把 x与 App结合起来？ 
export default connect(mapStateToProps,mapDispatchToProps)(App);// export connect以后的App； connect 接受两个参数
