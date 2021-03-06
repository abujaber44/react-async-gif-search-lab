import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
      Gif: []
    }
  
    render() {
      return (
        <div>
          <GifList Gif = {this.state.Gif}/>
          <GifSearch fetchGIFs={this.fetchGIFs} />
        </div>
      )
    }
  
    fetchGIFs() {
      fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(response => response.json())
        .then(data => { 
          this.setState({
            Gif: data.data.map( gif => ({ url: gif.images.original.url }) )
          })
        })
    }
    componentDidMount() {
      this.fetchGIFs()
    }
  }
  
  export default GifListContainer