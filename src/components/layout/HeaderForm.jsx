import styled from 'styled-components'
import { Search } from 'react-feather'
import DatePicker from '@/components/ui/DatePicker'
import { useState, useRef } from 'react'
import { useMediaQuery } from '@react-hook/media-query'

export default function HeaderForm({ placeholder }) {
  const [inputFocus, setInputFocus] = useState(false)
  // const primaryLocationRef = useRef(null)
  const secondaryLocationRef = useRef(null)

  const isSmallScreen = useMediaQuery('(max-width: 36rem)')

  const openDatePicker = () => {
    setInputFocus(true)
    document.body.style.overflow = 'hidden'
    document.body.classList.add('inputFocus')
    setTimeout(() => {
      if (!isSmallScreen && secondaryLocationRef.current) {
        secondaryLocationRef.current.focus()
      }
    }, 10)
  }

  const closeDatePicker = () => {
    setInputFocus(false)
    document.body.style.overflow = 'initial'
    document.body.classList.remove('inputFocus')
  }

  return (
    <>
      <FormContainer action="search" className="search">
        <input
          type="text"
          name=""
          id=""
          onFocus={openDatePicker}
          placeholder={placeholder || 'Where are you going?'}
          required
        />
        <button type="submit" aria-label="search places">
          <Search />
          <span>Search</span>
        </button>
      </FormContainer>
      {inputFocus && <DatePicker close={closeDatePicker} />}
    </>
  )
}

const FormContainer = styled.form`
  position: absolute;
  transform: translate(-50%, 150%);
  left: 50%;
  top: -1rem;
  background: var(--light);
  padding: 0.5rem;
  border-radius: 99px;
  display: flex;
  align-items: center;
  max-width: 720px;
  margin: 1.5rem 0;
  width: 60vw;
  box-shadow: 0 1rem 3rem -1rem #1e1e38;
  transition: all 0.2s;
  transform-origin: center;

  & * {
    transition: all 0.2s;
  }

  & > input {
    background: none;
    border: none;
    font-size: 1.15rem;
    flex: 1;
    padding: 0 1.5rem;
    color: var(--dark);
    outline: none;

    &::placeholder {
      color: var(--dark);
      opacity: 0.6;
    }
  }

  & > button {
    background: var(--red);
    color: #fafafc;
    border: none;
    padding: 0.5rem calc(1.75rem / 2);
    height: 3rem;
    max-width: 300px;
    display: flex;
    align-items: center;
    border-radius: 99px;
    font-weight: 700;
    font-size: 1rem;
    overflow: hidden;
    z-index: 2;

    &:hover:not(:disabled) {
      box-shadow: 0 0 0 2px var(--white), 0 0 0 4px var(--red);
    }

    &:disabled {
      opacity: 0.5;
    }

    svg {
      height: 1.25rem;
      margin-right: 0.75rem;
      flex: 0 0 1.25rem;
    }
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--light);
    border-radius: 99px;
    display: flex;
    align-items: center;
    left: 0;
    top: 0;
    transition: all 0.2s;
  }
`
