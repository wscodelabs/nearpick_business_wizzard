import React from 'react'
import {SampleCategory} from '../config'
import CategoryBlocks from './categoryBlocks'
export default class BusinessCategory extends React.Component{
  constructor(props){
    super(props)
    this.state={
      selectedCategory:props.businessData.category || ''
    }

  }

  chooseCategory(categoryTitle){
    this.setState({selectedCategory:categoryTitle})
    this.props.insertData('category', categoryTitle)
  }

  render(){
    let {category} = this.props.businessData
    let ButtonComponent= <span></span>

    if(category){
      ButtonComponent=<a className="btn btn-block btn-lg btn-success"
                         onClick={()=> this.props.insertData(null, null,'BusinessAddress')} > Continue </a>
    }


    let categoryList = SampleCategory.map((categoryData) => <CategoryBlocks selectedCategory={category} chooseCategory={this.chooseCategory.bind(this)} title={categoryData.title} icon={categoryData.icon} />)
      categoryList = categoryList || <h4 className="text-center">Oops! no Category</h4>
    return (
      <div>
        <h2 className="text-center"> Select Category</h2>
        <div className="=row">
          {categoryList}
        </div>
        <div className="col-sm-4 col-sm-offset-4">
          {ButtonComponent}

        </div>
      </div>

    )
  }

}