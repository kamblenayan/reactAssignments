import React, { Component } from 'react'
import {connect} from 'react-redux'
import { searchBooks } from '../actions'

 class Search extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              textSearch :''
         }
     }
     
     handler =(e)=>{
         this.setState({textSearch:e.target.value})
     }

     clickHandle = ()=>{
        const {textSearch} = this.state
        this.props.searchBooks(textSearch)
     }
    render() {
        const {textSearch} = this.state
        return (
            <div className="searcBarContainer">
                <input className="searchBar" placeholder="Enter book name" value={textSearch} onChange={this.handler}></input>
                <button className="btn" onClick={this.clickHandle}>Search</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
   return {searchBooks : textSearch => dispatch(searchBooks(textSearch))}
}

const mapStateToProps = state =>{
   
    return {books : state.books}
    
}
const SearchComponent = connect(mapStateToProps,mapDispatchToProps)(Search)
export default SearchComponent