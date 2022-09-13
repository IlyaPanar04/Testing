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
      onDelete:false,
      onChangePanel:false,
      change_login:'',
      change_password: ''

    };

  }
  
  deleteData = (value,index) =>{
    massLogin.splice(index , 1)
    this.setState({
      onDelete: true
    })
  }

  handleChange = event =>{
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    });
  }

  submitData = event =>{
      const logMass = massLogin.map(value => {
          return value.login
      })
      if(!logMass.includes(this.state.login)){
          massLogin.push({login :this.state.login , password:this.state.password ,onChange:false})
      }

      this.setState({
          onShowPanel:true
      })
      event.preventDefault();
  }
  changeButton = (value , index) => {
      massLogin[index].onChange = true
      this.setState({
          onChangePanel:true
      })
  }
  changeData = (event) =>{

      const value = event.target.value
      const name = event.target.name
      this.setState({
          [name]: value
      });
  }

  safeChangeData = (log , index) =>{
      massLogin[index].login =this.state.change_login
      massLogin[index].password =this.state.change_password
      massLogin[index].onChange = false
      this.setState({
          onChangePanel:false
      })

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
                      {log.onChange
                          ? <p>login:<input id='change-login-input' name = "change_login" type="text" onChange={this.changeData}  value={this.state.change_login}/></p>
                          : <a>login:{log.login}</a>
                      }
                    </p>
                    <p>
                      {log.onChange
                          ? <p>password:<input name = "change_password" type="text" onChange={this.changeData} value={this.state.change_password}/></p>
                          : <a>password:{log.password}</a>
                      }
                    </p>
                    <p>{log.onChange
                          ?<button id="button-ok" onClick={() =>this.safeChangeData(log,index)} >Ok</button>
                          :null
                        }
                    </p>
                    <button id="button-delete" onClick={() => this.deleteData(log , index)}>
                      Delete
                    </button>
                    <button  id="button-change" onClick={() => this.changeButton(log , index)}>
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
