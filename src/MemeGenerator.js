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
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({ allMemeImages: memes})
        })
    }
    render(){
        return(
            <div className = "main">
                <form className = 'meme-form'>
                    <input type='text' className="top-Text" name="topText" placeholder="Start your meme here" ></input>
                    <input type='text' className="bottom-Text" name="bottomText" placeholder="Finsh your meme here" ></input>

                    <button className="submit">Generate</button>
                </form>
                <h1>This is for fetching the API</h1>
            </div>
        )
    }
}

export default MemeGenerator