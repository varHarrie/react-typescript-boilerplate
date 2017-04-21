import {RouteComponentProps} from 'react-router'
import {Link} from 'react-router-dom'

interface ILoginViewProps extends RouteComponentProps<{}> {

}

@observer
export default class LoginView extends React.Component<ILoginViewProps, void> {
  @observable username: string = ''
  @observable password: string = ''

  handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.username = e.target.value
  }

  handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.password = e.target.value
  }

  render () {
    const {username, password} = this
    return (
      <div>
        <h2>Login View</h2>
        <div>
          <input type='text' placeholder='username' onChange={this.handleUsernameChange}/>
          <span>{username}</span>
          <br/>
          <input type='text' placeholder='password' onChange={this.handlePasswordChange}/>
          <span>{password}</span>
        </div>
        <Link to='/'>login</Link>
      </div>
    )
  }
}
