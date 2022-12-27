import React,{Component}  from 'react'
import './QuizComponent.css'
import { Questions } from '../resoures/questions'
class Quiz extends Component{
    constructor(){
        super()
        this.state={
            questionNumber:0
        }
    }
    goNext(){
        if(this.state.questionNumber<14){
        this.setState({
            questionNumber:this.state.questionNumber+1
        
        })
    }
    }
    goBack(){
        if(this.state.questionNumber>0){
            this.setState({
                questionNumber:this.state.questionNumber-1
            })
        }
    }
    quit(){
        window.confirm("Are you sure you want to quit")
    }
    render(){
    return(
        <>
        
        <div className='questions'>
                <h1>Questions</h1>
                <div className='span'>
                  <span>{this.state.questionNumber+1} of {Questions.length}</span>
                  <h3>{Questions[this.state.questionNumber].question}</h3>  
                </div>
                  <div className='answer'>
                    <button className="option">{Questions[this.state.questionNumber].optionA}</button>
                    <button className="option">{Questions[this.state.questionNumber].optionB}</button>
                  </div>
                  <div className='answer'>
                    <button className="option">{Questions[this.state.questionNumber].optionC}</button>
                    <button className="option">{Questions[this.state.questionNumber].optionD}</button>
                  </div>
                  <div className='button'>
                    <button className='previous' onClick={()=>this.goBack()}>Previous</button>
                    <button className='next' onClick={()=>this.goNext()}>Next</button>
                    <button className='quit' onClick={()=>this.quit()}>Quit</button>
                  </div>
            </div>
        
        </>
    )
    }
}
export default Quiz