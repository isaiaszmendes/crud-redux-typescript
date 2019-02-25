import * as React from 'react' 
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux'

interface IPostFormProps {
   dispatch: Dispatch<AnyAction>
}

// interface IPostFormState {
//    isOpen: boolean;
// }

class PostForm extends React.Component<IPostFormProps> {

   private getTitle!: HTMLInputElement;
   private getMessage!: HTMLTextAreaElement;

   private acaoSubmit = (event: React.FormEvent): void =>{
      event.preventDefault();

      const title  = this.getTitle.value
      const message = this.getMessage.value
      // console.log(`Title ${title} e message ${message}`)

      const payload = {
         id: new Date(),
         title,
         message
      }

      this.props.dispatch({
         type:'ADD_POST',
         payload});
         
      this.getTitle.value = ''
      this.getMessage.value = ''
      
   }

   render() {
      return (
         <div>
            <h1>Create Post</h1>
            <form onSubmit={(e) => this.acaoSubmit(e)}>
               <input required ref={(input) => this.getTitle = input as HTMLInputElement} type="text" placeholder="Enter Post Title" /><br /><br />
               <textarea required ref={(textarea) => this.getMessage = textarea as HTMLTextAreaElement}  rows={6} cols={40} placeholder="Enter Post" /><br /><br />
               <button>Post</button>
            </form>
         </div>
      )
   }
}
export default connect()(PostForm)