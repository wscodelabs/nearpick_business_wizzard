import React from 'react'

export default CategoryBlocks= ({title, icon, chooseCategory, selectedCategory}) =>{
    const selectedClass = selectedCategory && selectedCategory == title? 'selected_category' :''

    return (
      <div className={`col col-sm-3 col-xs-6  `}>
        <div className={`box ${selectedClass}`} onClick={(e) => chooseCategory(title)} >
         <h1 className="text-center category-icon text-pink"> <i className={icon}></i></h1>
          <h4 className="text-center">{title}</h4>
        </div>
      </div>
    )
}