import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Button } from './Button'
import { VscArrowRight } from 'react-icons/vsc'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`
const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-conent: center;
  background: rgba(21, 21, 21, 0.59);
`
const HeroImage = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`
const HeroContent = styled.div`
  margin: 5rem;
  z-index: 1;
  color: #fff;
  align-items: center;
  justify-content: left;
  text-transform: uppercase;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

  h1 {
    font-size: clamp(1rem, 6vw, 4rem);
    margin-bottom: 0.5rem;
  }
  p {
    font-size: clamp(0.75rem, 6vw, 2rem);
    margin-bottom: 0.25rem;
  }
`
const SliderButton = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 100;
`
const arrowButtons = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
  padding: 10px;
  user-select: none;
  margin-right: 1rem;
  transition: 0.3s;
  background: #000d1a;
  color: #fff;
  border-radius: 50px;

  &:hover {
      background: #cd853f
      transform: scale(1.05);
  }
`

const Arrow = styled(VscArrowRight)`
  margin-left: 0.5rem;
`
const SliderPrevBtn = styled(FaArrowCircleLeft)`
  ${arrowButtons}
`
const SliderNextBtn = styled(FaArrowCircleRight)`
  ${arrowButtons}
`

const Hero = ({ slides }) => {
  //function for slider buttons
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const timeout = useRef(null)

  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrent((current) => (current === length - 1 ? 0 : current + 1))
  //   }
  //   timeout.current = setTimeout(nextSlide, 2000)

  //   return function () {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current)
  //     }
  //   }
  // }, [current, length])

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const PrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map(
          (slide, index) =>
            index === current && (
              <HeroSlide key={index}>
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <Button
                      css={`
                        max-width: 160px;
                      `}
                      to={slide.path}
                      primary='true'
                    >
                      {slides.label}
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroSlider>
              </HeroSlide>
            )
        )}
        <SliderButton>
          <SliderPrevBtn onClick={PrevSlide} />
          <SliderNextBtn onClick={nextSlide} />
        </SliderButton>
      </HeroWrapper>
    </HeroSection>
  )
}

export default Hero
