//不要指定value 可以改用ref的方式去取得
//單純輸入的話 可以不要用onChange的方式 這樣會一直去改state (純看應用)
<input type="text" ref="input"></input> 
<button onClick={()=>this.props.doAdd(this.refs.input.value)}>Submit</button>