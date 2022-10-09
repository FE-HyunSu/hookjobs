import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import ImgLifeCycle from '../../assets/images/img_lifecycle.png';

export default function LifeCycle() {
  const BgMotion = keyframes`
    0%{width:0; background-color:#fff;}
    50%{width:70%; background-color:#e0f2ff;}
    100%{width:100%; background-color:#e0f2ff;}
  `;
  const Render = styled.section`
    width: 100%;
    max-width: 102.4rem;
    margin: 0 auto 2rem;
    padding: 4rem 2rem;
    box-sizing: border-box;
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
      <Render>
        <h1>
          <strong>React LifeCycle</strong>
        </h1>
        <div className="img-box">
          <Image src={ImgLifeCycle} />
        </div>
        <ul>
          <li>
            <span>
              React의 모든 컴포넌트는 <em>생성될때(Mounting)</em>, <em>업데이트할때(Updating)</em>,
              <em> 제거할때(Unmounting)</em> 3가지 주요 단계를 통해 관리된다.
            </span>
          </li>
          <li>
            <span>
              <em>Mounting (컴포넌트 생성)</em>
            </span>
            <br />
            <span>
              1. constructor
              <br />
              &nbsp; &ndash; constructor 메소드는 컴포넌트가 초기화될 때 다른 어떤 메소드보다 먼저
              호출되며, state 와 다른 초기 값들을 세팅한다.
            </span>
            <br />
            <span>
              2. getDerivedStateFromProps
              <br />
              &nbsp; &ndash; getDerivedStateFromProps 메소드는 DOM에서 요소들이 랜더링 되기 직전에
              호출된다. <br />
              &nbsp; &ndash; 최초의 props 에 기반한 state 객체를 저장한다. state 를 인자로 받고,
              state 가 변하면 객체를 반환한다.
            </span>
            <br />
            <span>
              3. render
              <br />
              &nbsp; &ndash; render() 메소드는 필수값이며, DOM에 HTML을 표현해준다.
            </span>
            <br />
            <span>
              4. componentDidMount
              <br />
              &nbsp; &ndash; componentDidMount() 메소드는 컴포넌트가 랜더링된 직후에 호출된다.
              <br />
              &nbsp; &ndash; 이미 DOM에 위치한 컴포넌트를 필요로 하는 구문을 사용하는 곳이다.
            </span>
          </li>
        </ul>
      </Render>
    </>
  );
}
