import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export default function Ref() {
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
    .content-box {
      padding: 3rem;
      font-size: 1.6rem;
      background-color: #f8f8f8;
      border-radius: 1rem;
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
          <h2>useRef</h2>
          <ul>
            <li>포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.</li>
            <li>
              애니메이션을 직접적으로 실행시킬 때. (setInterval, settimeout 메서드 사용으로 clear
              처리가 필요할 때)
            </li>
            <li>서드 파티 DOM 라이브러리를 React와 같이 사용할 때.</li>
            <li>(정리중)</li>
            <li>컴포넌트에서 특정 DOM을 선택할 때, useRef를 사용.</li>
            <li>
              인자로 넘어온 초깃값을 useRef 객체의 .current 프로퍼티에 저장한다. DOM 객체를 직접
              가리켜서 내부 값을 변경하거나 focus() 메소드를 사용하거나 하는 때에 주로 사용하고,
              변경되어도 컴포넌트가 리렌더링되지 않도록 하기 위한 값들을 저장하기 위해서도 사용한다.
              (이는 useRef가 내용이 변경되어도 이를 알려주지 않기 때문이다. .current 프로피터를
              변경시키는 것은 리렌더링을 발생시키지 않고, 따라서 로컬 변수 용도로 사용할 수 있다.)
            </li>
            <li>
              JavaScript 를 사용 할 때에는, 우리가 특정 DOM 을 선택해야 하는 상황에 getElementById,
              querySelector 같은 DOM Selector 함수를 사용해서 DOM 을 선택합니다.
            </li>
            <li>
              리액트를 사용하는 프로젝트에서도 가끔씩 DOM 을 직접 선택해야 하는 상황이 발생 할 때도
              있습니다.
            </li>
            <li>
              외부 라이브러리를 사용해야 할 때에도 특정 DOM 에다 적용하기 때문에 DOM 을 선택해야
              하는 상황이 발생 할 수 있음.
            </li>
            <li>
              포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
              <br />
              애니메이션을 직접적으로 실행시킬 때.
              <br />
              서드 파티 DOM 라이브러리를 React와 같이 사용할 때.
            </li>
            <li>위 예시 3가지 케이스 샘플로 만들어볼 것.</li>
          </ul>
          <dl className="sample-box">
            <dt>예제</dt>
            <dd>* </dd>
          </dl>
          <dl>
            <dt>import</dt>
            <dd>
              <pre>{`import React, { useRef } from "react";`}</pre>
            </dd>
          </dl>
          <dl>
            <dt>선언</dt>
            <dd>
              <pre>{`...`}</pre>
            </dd>
          </dl>
        </div>
      </HookBox>
    </>
  );
}
