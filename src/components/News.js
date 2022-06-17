import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {
  
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page:1,
      totalResults:0
      
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
  }

static propTypes = {
country:PropTypes.string,
pageSize:PropTypes.number,
category:PropTypes.string
}
async updateNews(){
  this.props.setProgress(10)
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page}&pageSize=${this.props.pageSize}`
  this.setState({loading:true})
  let data = await fetch(url)
  this.props.setProgress(30)
  let parsedData = await data.json()
  this.props.setProgress(70)
  this.setState({ articles: parsedData.articles,
    totalResults:parsedData.totalResults,
    loading:false
  })
  this.props.setProgress(100)
}

  async componentDidMount() {
   this.updateNews();
  }
  //  prevHandler=async()=>{
    
  //   this.setState({page:this.state.page-1})
  //   this.updateNews();
    
  // }
  // nextHandler=async()=>{
  //   this.setState({page:this.state.page+1})
  //   this.updateNews()
  // }
 
  fetchMoreData = async() => {
    
      this.setState({page:this.state.page+1})
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page}&pageSize=${this.props.pageSize}`
      
      let data = await fetch(url)
      let parsedData = await data.json()
      
      this.setState({ articles: this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults,
        
      })
      
    }
  render() {
    return (<>
      <h2 className='text-center'>News Monkey - Top {this.props.category} Headlines </h2>
      {this.state.loading&&<Spinner/>}
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
      <div className='row'>
        { this.state.articles.map((ele) => {
          return <div key={ele.url} className='col-md-4'>
            <NewsItem title={ele.title?ele.title:""} description={ele.description?ele.description:""} urlToImage={ele.urlToImage}
              url={ele.url} date={ele.publishedAt} source={ele.source.name} author={ele.author}/>
          </div>
        })}
          </div>
          </div>
    </InfiniteScroll>
    </>)
        {/* <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark my-3" onClick={this.prevHandler}>Previous &larr;</button>
        {this.state.loading && <Spinner/>}
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark my-3" onClick={this.nextHandler}>Next &rarr;</button>

        </div> */}
    
  }
}

export default News