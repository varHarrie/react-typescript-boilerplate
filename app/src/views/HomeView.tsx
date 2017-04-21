import {RouteComponentProps} from 'react-router'
import {Link} from 'react-router-dom'

interface IHomeViewProps extends RouteComponentProps<{}> {

}

export default class HomeView extends React.Component<IHomeViewProps, void> {
  render () {
    return (
      <div>
        <h2>Hello World</h2>
        <Link to='/login'>logout</Link>
      </div>
    )
  }
}
