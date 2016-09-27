import React from 'react'
import BusinessTitle from './BusinessTitle'
import BusinessCategory from './businessCategory'
import BusinessLogo from './BusinessLogo'
import BusinessAddress from './businessAddress'
import Sidebar from './sidebar'

const WizzardComponents ={BusinessTitle, BusinessCategory, BusinessLogo, BusinessAddress}

export default class WizzardLayout extends React.Component{
  constructor(props){
    super(props)
    this.addBusinessInfo= this.addBusinessInfo.bind(this)
    this.state={
      displayComponent:'BusinessTitle',
      businessData:{
        title:null
      }
    }
  }

  addBusinessInfo(dataType, dataValue, displayComponent){
    console.log(dataType, dataValue)
    if(dataType && dataValue){
      let {businessData}= this.state;
      businessData[dataType] = dataValue;
      this.setState({businessData });
    }

    if(displayComponent){
      this.setState({displayComponent});
    }

  }

  mapComponent(componentName){
    return WizzardComponents[componentName]
  }

  render(){

    let {displayComponent, businessData} = this.state
    const RenderComponent = this.mapComponent(displayComponent)

    return (
      <div className="mainLayout">
        <div className="row">
          <div className="col-sm-4 hidden-xs bg-teal full-height">
             <Sidebar businessData={businessData}  />
          </div>
          <div className="col-xs-12 col-sm-8">
            <RenderComponent insertData={this.addBusinessInfo} businessData={businessData} />
          </div>
        </div>
      </div>
    )
  }


}