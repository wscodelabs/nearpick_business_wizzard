import WizzardLayout from './compoenents/wizzard/wizzardLayout'
import React from 'react'
import {render} from 'react-dom'
Meteor.startup(()=>{
  render(<WizzardLayout />, document.getElementById('app'));
})

