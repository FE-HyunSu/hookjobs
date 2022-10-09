import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import ImgVirtualDom from '../../assets/images/img_virtualdom.png';

export default function VirtualDom() {
  const BgMotion = keyframes`
    0%{width:0; background-color:#fff;}
    50%{width:70%; background-color:#e0f2ff;}
    100%{width:100%; background-color:#e0f2ff;}
  `;
  const VirtualBox = styled.section`
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
      <VirtualBox>
        <h1>
          <strong>가상돔</strong>
          <span>(Virtual DOM)</span>
        </h1>
        <div className="img-box">
          <Image src={ImgVirtualDom} />
        </div>
        <ul>
          <li>
            <span>1. Virtual DOM은 실제 DOM 노드 트리를 복제한 자바스크립트 객체입니다.</span>
          </li>
          <li>
            <span>
              2. Virtual DOM은 실제 DOM과 같은 UI구조와 클래스 스타일, 속성들을 갖고 있지만, 화면에
              직접적인 변화를 줄수 있는 DOM API는 갖고있지 않습니다.
            </span>
          </li>
          <li>
            <span>
              3. 돔 노드에 변화가 생기면, 새로운 DOM Tree를 생성합니다. 기존에 DOM 노드와 비교를
              하고 변경된 부분만 업데이트를 합니다.
            </span>
          </li>
          <li>
            <span>
              4. 변화들을 전부 Virtual DOM에 반영한 후에 변경된 부분만 모아서 실제 DOM에 한번만
              적용하면서 성능을 최적화 하는 구조로 사용되고 있습니다.
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>
              * 웹브라우저 단에서 DOM 변화가 일어나면 웹브라우저가 CSS를 다시 연산하고 Layout을
              구성하고,
            </span>
          </li>
          <li>
            <span>
              * 페이지를 <em>Repaint</em> 즉 렌더링이 일어 나는 이 과정에서 시간이 허비되는
              것입니다.
            </span>
          </li>
          <li>
            <span>
              * 그리고 이 렌더링 과정은 상황에 따라 여러번 반복하여 발생할 수 있고, 돔이 추가,삭제
              혹은 태그 위치가 변하는 경우 렌더링이 일어납니다.
            </span>
          </li>
          <li>
            <span>
              * 속도적인 부분과 많은 일을 수행하다 버그가 발생하거나 브라우저가 죽는 일 등등의 일을
              개선하고자 <em>가상돔(Virtual DOM)</em>이 나왔습니다.
            </span>
          </li>
        </ul>
      </VirtualBox>
    </>
  );
}
