import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

export default function State() {
  const [isSample, setSample] = useState(0);
  const fontMotion = keyframes`
    0%{color:#111;}
    20%{color:#0068c3;}
    40%{color:#50c444;}
    60%{color:#b73ca4;}
    80%{color:#d65d0d;}
    100%{color:#111;}
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
          button {
            display: inline-block;
            margin: 1rem auto;
            padding: 1rem 1.5rem;
            color: #fff;
            background-color: #0068c3;
            border-radius: 0.5rem;
            transition: 0.3s;
            &:hover {
              background-color: #53b2b2;
            }
          }
        }
        & + dl {
          margin-top: 4rem;
        }
      }
    }
  `;
  return (
    <>
      <HookBox>
        <div className="content-box">
          <h2>useState</h2>
          <ul>
            <li>setState() ????????? ????????? ???????????????.</li>
            <li>
              ??? ?????? ????????? ?????? ?????? ????????? ????????????, ?????? ??? ????????? ?????? ?????? ?????? ????????? ???
              ????????? ??? ?????? ???????????????.
            </li>
          </ul>
          <dl className="sample-box">
            <dt>??????</dt>
            <dd>* ?????? state ?????? 0 ?????????.</dd>
            <dd>
              * ?????? ?????? ?????? ??? 1 ~ 99 ????????? ????????? useState??? ?????? state?????? ???????????? ??????
              ????????????.
            </dd>
            <dd>
              <button type="button" onClick={() => setSample(Math.floor(Math.random() * 100))}>
                State ??? ??????
              </button>
            </dd>
            <dd>
              * state ??? : <em>{isSample}</em>
            </dd>
          </dl>
          <dl>
            <dt>import</dt>
            <dd>
              <pre>{`import React, { useState } from "react";`}</pre>
            </dd>
          </dl>
          <dl>
            <dt>??????</dt>
            <dd>
              <pre>
                {`const [`}
                <strong>{`(????????? ????????????)`}</strong>
                {`, `}
                <strong>{`(????????? ????????????)`}</strong>
                {`] = useState(`}
                <strong>{`(???????????????)`}</strong>
                {`);`}
              </pre>
              <pre>
                {`// ex) ???????????? 0??? ????????? isSample.`}
                <br />
                {`const [`}
                <strong>{`isSample`}</strong>
                {`, `}
                <strong>{`setSample`}</strong>
                {`] = useState(`}
                <strong>{`0`}</strong>
                {`);`}
              </pre>
              <pre>
                {`// isSample ?????? 2??? ????????????.`}
                <br />
                <strong>{`setSample`}</strong>
                {`(`}
                <strong>{`2`}</strong>
                {`);`}
              </pre>
            </dd>
          </dl>
        </div>
      </HookBox>
    </>
  );
}
