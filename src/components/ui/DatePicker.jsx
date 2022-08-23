import styled from 'styled-components'
import { useState, useEffect } from 'react'

export default function DatePicker({ close }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 10)
    return () => setVisible(false)
  }, [])

  return (
    <Container className={visible ? 'visible' : null}>
      <div className="inner">
        <div>デートピッカーです</div>
        <button className="close button" onClick={close}>
          Close
        </button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  padding: 13.5rem var(--sidePadding) 4rem;
  transform: translate(-50%, -100%);
  overflow: hidden;
  max-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--white);
  border-bottom: 2px solid var(--gray);
  box-shadow: 0 3rem 3rem -5rem var(--dark);
  z-index: -1;
  transition: all 0.2s;

  &.visible {
    transform: translate(-50%, 0);

    .inner {
      opacity: 1;
    }
  }

  .inner {
    width: 100%;
    max-width: 720px;
    height: fit-content;
    min-height: 5rem;
    max-height: calc(100vh - 18rem);
    overflow: scroll;
    opacity: 0;
    transition: opacity 0.5s 0.2s;
    position: relative;
    padding: 1rem 0;

    &::-webkit-scrollbar {
      display: none;
      -webkit-appearance: none;
    }
  }

  .button {
    transition: transform 0.2s;
    cursor: pointer;

    &:hover,
    &:focus {
      transform: scale(0.95);
      box-shadow: 0 0 0 2px currentColor;
    }
    &:disabled {
      opacity: 0.5;
      box-shadow: none;
    }
  }

  .close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: #ff585d20;
    border: none;
    padding: 0.5rem 1rem;
    color: var(--red);
    border-radius: 99px;
  }
`
