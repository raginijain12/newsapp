import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,urlToImage,url,date,source,author}=this.props;
    return (
      <div>
        <div className="card" style={{margin:30}}>
        <span className="badge rounded-pill bg-success" style={{width:100}}>{source}</span>
          <img src={urlToImage}/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</p>
              <a href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>

    )
  }
}

export default NewsItem