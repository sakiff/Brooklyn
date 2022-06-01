import React from 'react'
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

const HeroSlide = styled.div``
const HeroSlider = styled.div``
const HeroImage = styled.div``
const HeroContent = styled.div`
  margin: 5rem;
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
const SliderPrevBtn = styled(FaArrowCircleLeft)`
  ${arrowButtons}
`
const SliderNextBtn = styled(FaArrowCircleRight)`
  ${arrowButtons}
`

const Hero = ({ slides }) => {
  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slides, index) => (
          <HeroSlide key={index}>
            <HeroSlider>
              <HeroImage>
                <HeroContent>
                  <h1>{slides.title}</h1>
                  <p>{slides.price}</p>
                  <Button
                    css={`
                      max-width: 160px;
                    `}
                    to={slides.path}
                    primary='true'
                  >
                    {slides.label}
                    <VscArrowRight />
                  </Button>
                </HeroContent>
              </HeroImage>
            </HeroSlider>
          </HeroSlide>
        ))}
        <SliderButton>
          <SliderPrevBtn />
          <SliderNextBtn />
        </SliderButton>
      </HeroWrapper>
    </HeroSection>
  )
}

export default Hero
