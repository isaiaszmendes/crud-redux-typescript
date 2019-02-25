import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import { IPost } from '../shared/IPost'

interface IEditComponentProps {
   dispatch: Dispatch<AnyAction>
   post: IPost
}

class EditComponent extends React.Component<IEditComponentProps,{}> {
   
   private getTitle!: HTMLInputElement
   private getMessage!: HTMLTextAreaElement

   private acaoEdit = (e: React.FormEvent): void => {
      e.preventDefault()
      const title = this.getTitle.value
      const newMessage = this.getMessage.value
      const payload = { title,newMessage}
      const { id } =  this.props.post
      

      this.props.dispatch({ type: 'UPDATE_POST', id, payload })
   }

   render() {
      const { title, message } =  this.props.post

      return (
         <div>
            <form onSubmit={(e) => this.acaoEdit(e)}>
               <input required type="text" ref={(inputTitle) => this.getTitle = inputTitle as HTMLInputElement}
               defaultValue={title} placeholder="Enter Post Title" /><br /><br />
               <textarea required rows={5} ref={(inputMSG) => this.getMessage = inputMSG as HTMLTextAreaElement}
               defaultValue={message} cols={28} placeholder="Enter Post" /><br /><br />
               <button>Update</button>
            </form>
         </div>
      )
   }
}

export default connect()(EditComponent);
