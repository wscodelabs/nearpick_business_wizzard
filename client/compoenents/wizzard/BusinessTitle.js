import React from 'react'

export default class BusinessTitle extends React.Component{
  constructor(props){
    super(props)
    this.state={
      title:props.businessData.title || ''
    }

  }

  render(){
    const {title} = this.state
    const ButtonComponent= title? <a
        className="btn btn-block btn-lg btn-success"
        onClick={()=> this.props.insertData(null, null,'BusinessCategory')}
        > Continue </a>: <span></span>
    return (
      <div className="">
      <h2 className="text-center">
        Business Title
      </h2>
        <div>
          <input className="big-input text-pink"
                 value={title || ''}
                 placeholder="Enter Title For your Business"
                 onChange={(e) => this.setState({title: e.target.value})}
                 onKeyUp={(e)=> {
                 console.log(e.target.value)
                 this.props.insertData('title', e.target.value)

                  }} />
        </div>
        <div className="col-sm-4 col-sm-offset-4">
          {ButtonComponent}

        </div>
       </div>
    )
  }

}