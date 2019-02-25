import * as React from 'react'
// import  Header from './components/Header'
// import Description from './components/Description'
import PostForm from './components/PostForm'
import AllPost from './components/AllPost'
// import createStore from 'redux' 
import './App.css'
// const store = createStore();

class App extends React.Component {
   render() {
      return (
         <div className="App">
         {/* <Header name='Isaias'> */}

         {/* </Header> */}
   
         {/* <Description countBy={5}  /> */}
         {/* Passando para ts o redux */}
         <PostForm />
         <AllPost /> 
      
         </div>
      );
   }
}

export default App;
