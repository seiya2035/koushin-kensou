import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import './css/base.css'
import './css/embla.css'
import './css/sandbox.css'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const textSections = [
  {
    h2: '代表 石川翔吾',
    p: '一一一一 一言 一一一一\n一一一一 一言 一一一一\n一一一一 一言 一一一一',
  },
  {
    h2: '副代表 戸崎圭太',
    p: '二二二二 二言 二二二二\n二二二二 二言 二二二二\n二二二二 二言 二二二二',
  },
  {
    h2: '事務局長 鈴木ノリアキ',
    p: '三三三三 三言 三三三三\n三三三三 三言 三三三三\n三三三三 三言 三三三三',
  },
  {
    h2: '顧問 田中渡辺',
    p: '四四四四 四言 四四四四\n四四四四 四言 四四四四\n四四四四 四言 四四四四',
  },
  {
    h2: '顧問 井上聖也',
    p: '四四四四 四言 四四四四\n四四四四 四言 四四四四\n四四四四 四言 四四四四',
  },
]

const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="theme-light">
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>

      <div className="embla_text_wrapper">
        {textSections.map((section, index) => (
          <div
            key={index}
            className={`embla_text${index === selectedIndex ? ' embla_text--active' : ''}`}
          >
            <h2>{section.h2}</h2>
            <p>
              {section.p.split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default EmblaCarousel
