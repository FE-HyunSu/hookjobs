import styled, { keyframes } from 'styled-components';

export default function Callback() {
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
      dl {
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
          <h1>useCallback</h1>
          <p>준비중입니다.</p>
        </div>
      </HookBox>
    </>
  );
}
