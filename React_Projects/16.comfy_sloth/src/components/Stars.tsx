import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({stars,reviews}:any) => {
  return <Wrapper>
    <div className="stars">
       {
            [1,2,3,4,5].map((num, index) => { 
                return <span key={index}>
                    {stars >= num ? <BsStarFill/> : stars >= num - 0.5 ? <BsStarHalf/> : <BsStar/>}
                </span>

             })
       }
       </div>
    <p className="reviews">({reviews} customer reviews)</p>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars