import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import State from '../components/hooks/State';
import Effect from '../components/hooks/Effect';
import Ref from '../components/hooks/Ref';
import Callback from '../components/hooks/Callback';
import Memo from '../components/hooks/Memo';
import Context from '../components/hooks/Context';
import hookItems from '../data/hookList.json';
import Redux from '../components/redux/Redux';
import VirtualDom from '../components/virtualdom/VirtualDom';
import Render from '../components/javascript/Render';
import LifeCycle from '../components/lifeCycle/LifeCycle';

export default function Intro() {
  const [activeHook, setActiveHook] = useState('useState');
  const BgMotion = keyframes`
    0%{width:0; background-color:#fff;}
    50%{width:70%; background-color:#e0f2ff;}
    100%{width:100%; background-color:#e0f2ff;}
  `;
  const heartMotion = keyframes`
    0%{background-color:#b1d5f0; transform: rotate(-45deg);}
    50%{background-color:#ffcae2; transform: rotate(-70deg);}
    100%{background-color:#b1d5f0; transform: rotate(-45deg);}
  `;
  const Hello = styled.section`
    p {
      position: relative;
      text-align: left;
      &:before {
        content: '';
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        width: 0.8rem;
        height: 1.4rem;
        background-color: #b1d5f0;
        border-top-right-radius: 1.6rem;
        border-top-left-radius: 1.6rem;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
        animation: ${heartMotion} 1s infinite linear alternate;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0.8rem;
        left: 0.2rem;
        width: 1.4rem;
        height: 0.8rem;
        background-color: #b1d5f0;
        border-top-right-radius: 1.6rem;
        border-bottom-right-radius: 1.6rem;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
        animation: ${heartMotion} 1s infinite linear alternate;
      }
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
  const HookList = styled.section`
    p {
      position: relative;
      text-align: left;
      &:before {
        content: '';
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        width: 0.8rem;
        height: 1.4rem;
        background-color: #b1d5f0;
        border-top-right-radius: 1.6rem;
        border-top-left-radius: 1.6rem;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
        animation: ${heartMotion} 1s infinite linear alternate;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0.8rem;
        left: 0.2rem;
        width: 1.4rem;
        height: 0.8rem;
        background-color: #b1d5f0;
        border-top-right-radius: 1.6rem;
        border-bottom-right-radius: 1.6rem;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
        animation: ${heartMotion} 1s infinite linear alternate;
      }
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
    li {
      display: inline-block;
      margin: 1rem;
      font-size: 2rem;
      background-color: #eee;
      border-radius: 1rem;
      button {
        padding: 1.2rem;
        transition: 0.2s;
        &.active {
          color: #0068c3;
          border-radius: 1rem;
          background-color:#b1d5f0;
        }
        &:hover {
          color: #0068c3;
          background-color:#b1d5f0;
          border-radius: 1rem;
          transform: rotate(5deg) scale(1.05);
        }
      }
      &:first-child {
        margin-left:0;
      }
      &:nth-child(2n) {
        button:hover {
        color: #4b7c5e;
        transform: rotate(-5deg) scale(1.05);
      }
    }
  `;
  const HookBody = styled.section`
    background-color: #fff;
  `;
  return (
    <>
      <Hello>
        <h1>Hello,</h1>
        <p>
          <span>안녕하세요</span>
          <span>
            저는 프론트엔드 개발을 하고 있는 <em>김현수</em> 입니다.
          </span>
          <span>
            <em>Javascript, React</em> 개인 스터디를 위해 만든 페이지 입니다.
          </span>
          <span>
            <em>React NextJS</em> 환경으로 구성되었습니다.
          </span>
          <span>
            <em>FrontEnd</em> 기본적인 내용을 정리, 지속적인 업데이트 예정입니다.
          </span>
        </p>
      </Hello>
      <Render />
      <VirtualDom />
      <LifeCycle />
      <HookList>
        <h1>Hooks,</h1>
        <p>
          <span>
            React 버전 <em>16.8</em>부터 React 요소로 새로 추가되었습니다.
          </span>
          <br />
          <span>
            Hook을 이용하여 기존 Class 바탕의 코드를 작성할 필요 없이 상태 값과 여러 React의 기능을
            사용할 수 있습니다.
          </span>
        </p>
        <ul>
          {hookItems &&
            hookItems.map((item, idx) => {
              return (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => setActiveHook(item.name)}
                    className={activeHook === item.name ? 'active' : null}
                  >
                    <span>{item.name}</span>
                  </button>
                </li>
              );
            })}
        </ul>
      </HookList>
      <HookBody>
        {activeHook === 'useState' ? (
          <State />
        ) : activeHook === 'useEffect' ? (
          <Effect />
        ) : activeHook === 'useRef' ? (
          <Ref />
        ) : activeHook === 'useCallback' ? (
          <Callback />
        ) : activeHook === 'useMemo' ? (
          <Memo />
        ) : activeHook === 'useContext' ? (
          <Context />
        ) : activeHook === 'useRef' ? (
          <Ref />
        ) : null}
      </HookBody>
      <Redux />
    </>
  );
}
