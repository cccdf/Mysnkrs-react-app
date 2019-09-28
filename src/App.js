import React from 'react';
import logo from './logo.svg';
import './App.css';
import getNikeApi from './getNikeApi'
import NikeSnkrs from './NikeSnkrs';
import MenuNav from './MenuNav'


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      results: [],
      navElements: ["News", "Login", "Sign Up", "Help", "About"],
      navElementLinks: ["https://www.google.com/", "https://www.amazon.com/", "https://www.ebay.com/", "https://www.alibaba.com/"],
    }
  }

  async componentDidMount(){
    let response = await getNikeApi();
    this.setState({results: response, loading: false});
    
    
  }

  render(){
    return(
      <div>
        <MenuNav 
        navElements={this.state.navElements}
        navElementLinks={this.state.navElementLinks}></MenuNav>
        <ul>
          <li>Nike
              <p className='numberofResult'>{this.state.results.length} results</p>
            <div>
            {this.state.results.map((result) => {
                return <NikeSnkrs result={result} key={result.id}></NikeSnkrs>
              })}
            </div>
          </li>
          <li>Adidas

          </li>
        </ul>
        
      </div>
      

    );
  }


}
