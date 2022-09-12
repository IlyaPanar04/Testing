import React,{Component} from "react";
import logo from './logo.svg';
import './App.css';


let massLogin = []
class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      login: 'ilpanard58@gmail.com',
      password: 'Qwerty',
      onShowPanel:false,
      onDelete:false
    };


  }

  
  deleteData = (value,index) =>{
    massLogin.splice(index , 1)
    console.log(massLogin)
    this.setState({
      onDelete: true
    })

  }

  handleChange = event =>{
    const value = event.target.value
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  submitData = event =>{

    massLogin.push({login :this.state.login , password:this.state.password})

    this.setState({
      onShowPanel:true
    })
    console.log(massLogin)
    event.preventDefault();
  }
  render(){
    return(
        <div id="central-panel">
          <div id="left-panel">
            <div id="log-menu">
              <form>
                <p>Login:<input name="login" type="text" onChange={this.handleChange} value={this.state.login}  id="inp_1"  /></p>
                <p>Password:<input name="password" type="text" onChange={ this.handleChange} value={this.state.password} id="inp_2"  /></p>
                <button id="button-log"  onClick={this.submitData}>
                  Создать
                </button>
              </form>
            </div>
          </div>
          <div id="right-panel">
            {massLogin.map((log , index) =>

                <div id="panel">
                  <p>
                    login:
                    <input  type="text" onChange={this.empty} value={log.login}/>
                  </p>
                  <p>
                    Password:
                    <input  type="text" onChange={this.empty} value={log.password}/>
                  </p>
                  <button id="button-delete" onClick={() => this.deleteData(log , index)}>
                    Delete
                  </button>
                  <button id="button-change" >
                    Change
                  </button>
                </div>
            )}
          </div>
        </div>


    )
  }
}

export default App;
