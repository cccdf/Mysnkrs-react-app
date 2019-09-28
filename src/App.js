import React from 'react';
import logo from './logo.svg';
import './App.css';
import getNikeApi from './getNikeApi'
import NikeSnkrs from './NikeSnkrs';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      results: [],
    }
  }

  async componentDidMount(){
    let response = await getNikeApi();
    this.setState({results: response, loading: false});
    
    
  }

  render(){
    return(
      <div>
        <p className='numberofResult'>{this.state.results.length} results</p>
        <div>
        {this.state.results.map((result) => {
            return <NikeSnkrs result={result} key={result.id}></NikeSnkrs>
          })}
        </div>
      </div>
      

    );
  }


}
