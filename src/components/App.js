import React, { Component } from 'react'
import SearchComponent from './Search'
import BooksComponent from './Books'
import BookComponent from './Book'

 class App extends Component {
    render() {
        return (
            <div>
                <div><SearchComponent/></div>
                <div className='container'>    
                    <div className="leftComp">  
                        <BooksComponent/>
                    </div>
                    <div className="rightComp">
                        <BookComponent/>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default App;