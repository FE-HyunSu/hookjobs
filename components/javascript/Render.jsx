import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import ImgRender from '../../assets/images/img_render.png';

export default function Render() {
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
          <strong>브라우저 렌더링</strong>
          <span>(Browser Rendering)</span>
        </h1>
        <div className="img-box">
          <Image src={ImgRender} />
        </div>
        <ul>
          <li>
            <span>
              1. 렌더링 엔진이 HTML 문서를 <em>Parsing </em>해서 <em>DOM Tree</em>를 만들고,
              CSS파일은 <em>CSSOM Tree</em>를 만듭니다.
            </span>
          </li>
          <li>
            <span>
              2. 이 두개를 결합해서 <em>Render Tree</em>를 생성합니다.
            </span>
          </li>
          <li>
            <span>
              3. 생성된 렌더트리 안에 있는 각 노드의 위치와 크기를 계산하는 <em>Layout</em> 작업
              후에,
            </span>
          </li>
          <li>
            <span>
              4. 픽셀로 변환해서 레이어를 만드는 <em>Paint</em> 작업과 실제 화면에 합성해서 그려지는{' '}
              <em>Composite</em> 작업으로 렌더링이 끝이 납니다.
            </span>
          </li>
          <li>
            <span>* 요소의 내용, 크기, 위치가 변경, 윈도우 리사이징, 노드의 추가 제거 시,</span>
            <span>
              다시 Layout 과, Paint 작업을 반복하고, 이것을 <em>Reflow</em> 와 <em>Repaint</em>
              라고 합니다.
            </span>
          </li>
        </ul>
      </Render>
    </>
  );
}
