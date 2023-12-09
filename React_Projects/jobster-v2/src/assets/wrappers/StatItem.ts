/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import styled from 'styled-components'

const Wrapper = styled.article`
  padding: 2rem;
  background: var(--white);
  border-radius: var(--borderRadius);
  border-bottom: 5px solid ${(props: { color: any }) => props.color};
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${(props: { color: any }) => props.color};
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: left;
    margin-top: 0.5rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    background: ${(props: { bcg: any }) => props.bcg};
    border-radius: var(--borderRadius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: ${(props: { color: any }) => props.color};
    }
  }
`

export default Wrapper
