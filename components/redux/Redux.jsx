import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

export default function Redux() {
  const BgMotion = keyframes`
    0%{width:0; background-color:#fff;}
    50%{width:70%; background-color:#e0f2ff;}
    100%{width:100%; background-color:#e0f2ff;}
  `;
  const ReduxBox = styled.section`
    h2 {
      display: block;
      padding: 1rem;
      font-weight: 300;
      font-size: 2rem;
      color: #000;
    }
    .img-box {
      padding: 2rem 0;
      img {
        display: block;
        max-width: 80rem !important;
        height: auto !important;
        min-height: auto !important;
        max-height: auto !important;
      }
    }
    ul + ul {
      position: relative;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 0.1rem solid #eee;
    }
    li {
      padding: 0;
      font-size: 1.6rem;
      span {
        display: inline-block;
        position: relative;
        padding: 1rem;
        font-size: 1.6rem;
        em {
          color: #0068c3;
          transition: 0.5s;
        }
        & + span:before {
          content: '/';
          position: absolute;
          left: -0.3rem;
          color: #ccc;
        }
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          z-index: -1;
        }
        &:hover {
          &:after {
            animation: ${BgMotion} 0.3s forwards ease-in-out;
          }
        }
      }
    }
  `;

  return (
    <>
      <ReduxBox>
        <h1>Redux,</h1>
        <div className="content-box">
          <h2>상태관리는 왜 필요한가?</h2>
          <ul>
            <li>
              <span>
                프로젝트의 규모가 점점 커지면서 컴포넌트가 늘어나고, 구조가 복잡해지면서 관리해야 할
                state 가 많음.
              </span>
            </li>
            <li>
              <span>
                React 프로젝트에서 state의 전달 방식은 props를 통해 이루어지기 때문에, 컴포넌트
                구조가 복잡할수록 state drilling이 발생됨.
              </span>
            </li>
            <li>
              <span>
                state drilling 이란, 상위 컴포넌트의 state를 하위 컴포넌트로 계속해서 전달해 목표
                컴포넌트까지 props를 통해 전달하는 행위를 의미. 이는 컴포넌트 구조가 복잡한
                프로젝트의 경우, 비효율적 구조와 소스의 가독성도 떨어짐.
              </span>
            </li>
          </ul>
          <dl>
            <dt>작성중..</dt>
            <dd>
              <pre>{`const .. `}</pre>
            </dd>
          </dl>
        </div>
      </ReduxBox>
    </>
  );
}
