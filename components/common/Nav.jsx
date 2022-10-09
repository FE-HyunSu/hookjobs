import styled, { keyframes } from 'styled-components';

export default function Nav() {
  const NavBox = styled.nav`
    display: block;
    position: fixed;
    top: 20rem;
    left: 50%;
    width: 30rem;
    margin-left: 50rem;
    background-color: #999;
    z-index: 10;
  `;

  const FontColorMotion = keyframes`
    0% {
      color: #111;
    }
    10% {
      color: #0068c3;
    }
    60% {
      color: #4b7c5e;
    }
    100% {
      color: #ff0000;
    }
  `;
  const Header = styled.header`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    z-index: 100;
    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin: 0;
      padding: 0;
      strong {
        display: block;
        width: 100%;
        margin: 0;
        padding: 1.4rem 1rem;
        font-weight: lighter;
        font-size: 1.8rem;
        color: #1a1a1a;
        letter-spacing: 0.1rem;
        background-color: #fff;
        text-align: center;
        text-transform: uppercase;
        transition: 0.2s;
        transform-origin: 50% 50%;
        em {
          display: block;
          font-size: 1.2rem;
          color: #999;
        }
        &:hover {
          letter-spacing: 0.7rem;
          background-color: #f7f7f7;
          animation: ${FontColorMotion} 2s infinite linear alternate;
          em {
            animation: ${FontColorMotion} 2s infinite linear alternate;
          }
        }
      }
    }
    & + div,
    & + section {
      margin-top: 6.6rem;
    }
    & + main {
      width: 100%;
      margin: 6.6rem auto 0;
    }
  `;
  return (
    <>
      <NavBox>
        <ul>
          <li>
            <button type="button">button 1</button>
          </li>
          <li>
            <button type="button">button 2</button>
          </li>
          <li>
            <button type="button">button 3</button>
          </li>
          <li>
            <button type="button">button 4</button>
          </li>
        </ul>
      </NavBox>
    </>
  );
}
