import React from 'react'
import './index.css'

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state={
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImages: []
        }
        this.handleChange = this.handleChange.bind(this)
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
        console.log(value)



    }



    render(){
        return(
            <div className = "main">
                <form className = 'meme-form'>
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

                    <button className="submit">Generate</button>
                </form>
                <div className = 'meme'>
                    <img src = {this.state.randomImage} alt = ''></img>
                    <h2 className = "top">{this.state.topText}</h2>
                    <h2 className = "bottom">{this.state.bottomText}</h2>
                </div>
                
            </div>
        )
    }
}

export default MemeGenerator