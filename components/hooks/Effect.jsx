import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export default function Effect() {
  const [isSample, setSample] = useState(0);
  const [isSampleText, setSampleText] = useState(null);
  const fontMotion = keyframes`
    0%{color:#111;}
    20%{color:#0068c3;}
    40%{color:#50c444;}
    60%{color:#b73ca4;}
    80%{color:#d65d0d;}
    100%{color:#111;}
  `;
  const fontMotionOpacity = keyframes`
    0%{color:#111; opacity:1;}
    20%{color:#0068c3;}
    40%{color:#50c444;}
    60%{color:#b73ca4;}
    80%{color:#d65d0d;}
    100%{color:#111; opacity:0;}
  `;
  const HookBox = styled.section`
    width: 100%;
    max-width: 102.4rem;
    margin: 0 auto 2rem;
    padding: 1rem 0;
    box-sizing: border-box;
    ul {
      padding: 2rem 0;
      li {
        position: relative;
        padding: 0.5rem 0 0.5rem 1rem;
        &:before {
          content: '';
          position: absolute;
          top: 1.3rem;
          left: 0.2rem;
          width: 0.2rem;
          height: 0.2rem;
          background-color: #111;
          border-radius: 100%;
        }
      }
    }
    .content-box {
      padding: 3rem;
      font-size: 1.6rem;
      background-color: #f8f8f8;
      border-radius: 1rem;
      dl {
        &.sample-box {
          padding: 3rem 0;
          border-top: 0.1rem solid #ddd;
          border-bottom: 0.1rem solid #ddd;
        }
        dt {
          position: relative;
          padding-bottom: 1rem;
          font-size: 2.4rem;
        }
        dd {
          p {
            position: relative;
            padding: 0.5rem 0 0.5rem 1rem;
            &:before {
              content: '';
              position: absolute;
              top: 1.3rem;
              left: 0.2rem;
              width: 0.2rem;
              height: 0.2rem;
              background-color: #111;
              border-radius: 100%;
            }
          }
          strong {
            font-weight: normal;
            color: #0068c3;
          }
          em {
            font-weight: lighter;
            font-size: 5rem;
            vertical-align: middle;
            animation: ${fontMotion} 1s forwards ease-in-out;
          }
          span {
            animation: ${isSample === 0 ? fontMotion : fontMotionOpacity} 1s forwards ease-in-out;
          }
          button {
            display: inline-block;
            margin: 1rem auto;
            padding: 1rem 1.5rem;
            color: #fff;
            background-color: #0068c3;
            border-radius: 0.5rem;
          }
        }
        & + dl {
          margin-top: 4rem;
        }
      }
    }
  `;
  useEffect(() => {
    setSampleText('리렌더링 되었습니다.');
  }, [isSample]);
  useEffect(() => {
    setSampleText('최초 렌더링 상태입니다.');
  }, []);
  return (
    <>
      <HookBox>
        <div className="content-box">
          <h2>useEffect</h2>
          <ul>
            <li>
              useEffect() 함수는 React component가 렌더링 될 때마다 특정 작업(Sied effect)을 실행할
              수 있도록 하는 리액트 Hook입니다.
            </li>
            <li>
              여기서 Side effect는 component가 렌더링 된 이후에 비동기로 처리되어야 하는 부수적인
              효과들을 뜻합니다.
            </li>
            <li>
              이러한 기능으로 인해 함수형 컴포넌트에서도 클래스형 컴포넌트에서 사용했던 생명주기
              메서드를 사용할 수 있게 되었습니다.
            </li>
          </ul>
          <dl className="sample-box">
            <dt>예제</dt>
            <dd>* 1 ~ 99 사이의 숫자를 useState로 랜덤하게 보여주는 state값 입니다.</dd>
            <dd>* state값이 업데이트 되면 해당컴포넌트는 리렌더링 됩니다.</dd>
            <dd>
              <button type="button" onClick={() => setSample(Math.floor(Math.random() * 100))}>
                State 값 변경
              </button>
            </dd>
            <dd>
              * state 값 : <em>{isSample}</em>
            </dd>
            <dd>
              <span>{isSampleText}</span>
            </dd>
          </dl>
          <dl>
            <dt>import</dt>
            <dd>
              <pre>{`import React, { useEffect } from "react";`}</pre>
            </dd>
          </dl>
          <dl>
            <dt>선언</dt>
            <dd>
              <pre>
                {`// 렌더링, 리렌더링이 될때마다 실행.`}
                <br />
                {`useEffect(() => { `}
                <strong>{`(실행함수)`}</strong>
                {` });`}
              </pre>
              <pre>
                {`// 최초 렌더링 시점에서 실행.`}
                <br />
                {`useEffect(() => { `}
                <strong>{`(실행함수)`}</strong>
                {` }, []);`}
              </pre>
              <pre>
                {`// 특정 값이 업데이트 되는 시점에 실행.`}
                <br />
                {`useEffect(() => { `}
                <strong>{`(실행함수)`}</strong>
                {` }, [`}
                <strong>{`name`}</strong>
                {`]);`}
              </pre>
              <pre>
                {`// Component가 UnMount 될때 시점에서 실행.`}
                <br />
                {`useEffect(() => { return () => { `}
                <strong>{`(실행함수)`}</strong>
                {` }; });`}
              </pre>
            </dd>
          </dl>
        </div>
      </HookBox>
    </>
  );
}
