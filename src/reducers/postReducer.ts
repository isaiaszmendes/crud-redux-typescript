import { Action } from 'redux'
import { IPost } from '../shared/IPost'

export interface EditPostAction {
   data: any
   newTitle?: string
   newMessage?: string
}

export interface IAction extends Action, IPost, EditPostAction {
   payload: Array<any>
}

const postReducer = (state = [] as Array<any>, action: IAction) => {
   switch(action.type){
      case 'ADD_POST':
         return state.concat([action.payload]) 
      case 'DELETE_POST':
         return state.filter( post => post.id !== action.id) // return all que for diff de action.id
      case 'EDIT_POST':
         return state.map( post => post.id === action.id ? {...post, editando: !post.editando } : post)
      case 'UPDATE_POST':
         return state.map( post => {
            if (post.id === action.id) { // localizar o elemento pelo id faço as atualizações e passao editando para

               const { newTitle, newMessage } = action.data
               return {
                  ...post,
                  title: newTitle,
                  message: newMessage,
                  editando: !post.editando
               }
            }else {
               return post
            }
         })
      default:
         return state
   }
}

export default postReducer;