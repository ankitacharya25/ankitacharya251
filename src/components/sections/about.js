import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Ruby on Rails', 'C++', 'Python', 'JavaScript', 'AWS DynamoDB', 'PostgreSQL'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              {' '}<a href="https://i.imgflip.com/2084ea.jpg" target="_blank" title="You found a Star Wars reference!">
              Hello there</a>! My name is Ankit and I have always been curious about how stuff works. This
              curiousness led me to learning loads of trivial stuff over time. Talking about tech, I've
              always been fascinated about how computers work and hence I'm!
            </p>
            
            <p>
              I enjoy reading mythology, folklore, conspiracy theories and theoretical physics.
              My{' '}<a href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator" target="_blank">Myers-Briggs Type Indicator</a> is{' '}<a href="https://www.16personalities.com/intp-personality" target="_blank">INTP</a> [Introverted, Intuitive, Thinking, and Prospecting].
              I'm a big time cinephile, mostly into old action and adventure, the Wild-West type. Besides, I love music,
              and currently play at my college band. I don't stick to any certain genre, but if I had to choose one,
              it'd be{' '}<a href="https://open.spotify.com/playlist/37i9dQZF1EQqlvxWrOgFZm?si=43078b7be4db4e20&nd=1" target="_blank">Punk Rock &amp; Metal</a>.
            </p>

            <p>
              I’m currently working as an SDE intern at{' '}
              <a href="https://devathon.com/" target="_blank">Devathon</a>, where I'm working on{' '}
              <a href="https://www.doctorsgalaxy.com/landing" target="_blank">some exciting stuff</a>.
              I've previously worked as a Freelance Designer at {' '}
              <a href="https://www.upwork.com/freelancers/~01737f8ac4b83aae0e" target="_blank">Upwork</a>, this{' '}
              <a href="https://valkyreclothing.com/" target="_blank"> emerging apparel store</a>, and{' '}
              <a href="https://pocketguru.in/" target="_blank">an ed-tech startup</a>.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jfif"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
