import * as React from 'react' 
import { Dispatch, AnyAction } from 'redux'
import { IPost } from '../shared/IPost'
import { connect } from 'react-redux'


export interface IPostProps {
  post: IPost
  dispatch: Dispatch<AnyAction>
}

class Post extends React.Component<IPostProps> {
   
   render() {
      const { id, title, message } = this.props.post
      return (
         <div>
            <h3>{title}</h3>
            <p>{message}</p>
            <button
                onClick={() => this.props.dispatch({type: 'EDIT_POST', id})}>
               Editar</button>
            <button
               onClick={() => this.props.dispatch({type: 'DELETE_POST', id})}>
               Excluir</button>
         </div>
      )
   }
}

export default connect()(Post)