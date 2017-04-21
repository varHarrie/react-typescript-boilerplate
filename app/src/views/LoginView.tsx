import {RouteComponentProps} from 'react-router'
import {Link} from 'react-router-dom'

interface ILoginViewProps extends RouteComponentProps<{}> {

}

export default class LoginView extends React.Component<ILoginViewProps, void> {
  render () {
    return (
      <div>
        <h2>Login View</h2>
        <Link to='/'>login</Link>
      </div>
    )
  }
}
