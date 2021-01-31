import React from 'react'
import './index.css'

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state={
            topText: '',
            bottomText: '',
            randomImage: '',
            allMemeImages: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({ allMemeImages: memes})
        })
    }

    handleChange(event){
        const {name, value } = event.target;
        this.setState({[name] : value})

    }

    handleSubmit(event){
        event.preventDefault()
        let random = Math.floor(Math.random() * this.state.allMemeImages.length)
        let randomMeme = this.state.allMemeImages[random].url
        this.setState({randomImage: randomMeme})
    }



    render(){
        return(
            <div className = "main">
                <form className = 'meme-form' onSubmit ={this.handleSubmit}>
                    <input 
                        type='text' 
                        className="top-Text" 
                        name="topText" 
                        placeholder="Start your meme here" 
                        value ={this.state.topText}
                        onChange = {this.handleChange}
                    />
                    <input 
                        type='text' 
                        className="bottom-Text" 
                        name="bottomText" 
                        placeholder="Finsh your meme here" 
                        value = {this.state.bottomText}
                        onChange = {this.handleChange}
                    />

                    <button className="submit" >New Image</button>
                </form>
                <div className = 'meme'>
                    <img className = 'meme-image' src = {this.state.randomImage} alt = ''></img>
                    <h2 className = "top">{this.state.topText.toUpperCase()}</h2>
                    <h2 className = "bottom">{this.state.bottomText.toUpperCase()}</h2>
                </div>
                
            </div>
        )
    }
}

export default MemeGenerator