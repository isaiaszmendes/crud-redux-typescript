import * as React from 'react'
import { connect } from 'react-redux'

// components
import Post from './Post'
import EditComponent from './EditComponent' 

interface IAllPostProps {
   posts: Array<any>
}

interface IAllPostState {
   posts: Array<any>
}

class AllPost extends React.Component<IAllPostProps,IAllPostState> {
   render() {
      return (
         <div>
            <h1>All Posts</h1>
            {this.props.posts.map(post => 
               (
                  <div key={post.id}>
                     {post.editando ?  <EditComponent key={post.id} post={post}/> :
                     <Post key={post.id} post={post} />}
                  </div>
               )
            )}
         </div>
      );
   }
}

const mapStateToProps = (state: Array<any>) => {
   return {
      posts: state
   }
}

export default connect(mapStateToProps)(AllPost)