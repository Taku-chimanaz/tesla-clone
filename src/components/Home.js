import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    
    <Container>

      <Section title="Model S" description="Order Online for Touchless Delivery"
      backgroundImg="model-s"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />

      <Section 
        title="Model Y" 
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"/>


      <Section 
        title="Model 3" 
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section 
        title="Model X" 
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section 
        title="Lowest Cost Solar Panels in America" 
        description="Money-back guarantee"
        backgroundImg="solar-panel"
        leftBtnText="Order now"
        rightBtnText="Learn More"
      />
      
      <Section 
        title="Accessories" 
        description=""
        backgroundImg="accessories"
        leftBtnText="shop now" 
      />

    </Container>
  )
}

export default Home

const Container = styled.div `
  height: 100vh;

`