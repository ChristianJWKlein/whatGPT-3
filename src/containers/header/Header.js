import { useState } from 'react';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowRight,
} from './headerCss';
import Video from './video.mp4';

export default function Header() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Events Made Easy</HeroH1>
        <HeroP>See all the events happening right now!</HeroP>
        <HeroBtnWrapper>
          <button onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started {<ArrowRight />}
          </button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
