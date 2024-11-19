import React from 'react'
import Navigation from '../../Component/Navigation/Navigation'
import Card from '../../Component/Card/Card'
import Background from '../../Component/Background/Background'
import Team from '../../Component/Team/Team'
import Form from '../../Component/Form/Form'


function Home() {
  return (
    <div>
        <Navigation/>
        
        <Background/>
        <Team/>
        <Form/>
    </div>
  )
}

export default Home