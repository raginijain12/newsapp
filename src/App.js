import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

export class App extends Component {
   pageSize=10
  apiKey=process.env.REACT_APP_NEWS_API
   state={
    progress:0
   }
   setProgress=(progress)=>{
    this.setState({progress:progress})
    
   }
  render() {
    return (
      <div>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <Navbar/>
      <Routes>
      <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="us" category="general"/>}/>
      <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country="us" category="business"/>}/>
      <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>}/>
      <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="us" category="general"/>}/>
      <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country="us" category="health"/>}/>
      <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country="us" category="science"/>}/>
      <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country="us" category="sports"/>}/>
      <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country="us" category="technology"/>}/>
      </Routes>
      </Router>
      
      
      </div>
    )
  }
}

export default App