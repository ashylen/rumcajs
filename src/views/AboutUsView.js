import React from "react"

import styled from "styled-components"

// Components

const StyledH2 = styled.h2`
  font-weight: 600;
  font-size: 4rem;
  margin-bottom: 15px;
  line-height: 1.4;
  text-align: center;

  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
`

const StyledSection = styled.section`
  background-color: #343a40;
`
const StyledParagraph = styled.p`
  line-height: 1.4;
  font-size: 1.6rem;
  margin-bottom: 15px;

  span {
    font-weight: bold;
  }

  white-space: pre-line;
`

const StyledInner = styled.section`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;

  padding: 30px 0;
`

const AboutUsView = () => (
  <StyledSection>
    <StyledInner>
      <StyledH2>O NAS</StyledH2>
      <StyledParagraph>
        Nasze biuro powstało na bazie bogatych wieloletnich doświadczeń
        turystycznych. Działalność rozpoczęliśmy jako firma transportowa w
        1992r., świadcząc usługi przewozu osób w kraju oraz poza jego granicami.
        W 2012 r. przeszliśmy zmianę pokoleniową co zaowocowało powstaniem Biura
        Turystycznego. W ciągu 24 lat działalności zbudowaliśmy sieć kontaktów
        które pozwalają nam na organizacje wszelkiego rodzaju wyjazdów
        autokarowych o najwyższym standardzie jakości. Jesteśmy pasjonatami,
        kochamy swoją pracę. Największą przyjemność sprawia nam uśmiech na
        twarzy zadowolonego klienta. Staramy się wsłuchiwać w Wasze potrzeby i
        dobierać programy imprezy, które spełnią oczekiwania najbardziej
        wymagających klientów.
      </StyledParagraph>
      <StyledParagraph>
        Wyróżniają nas wycieczki po Polsce, bo dbamy o tożsamość narodową i
        zwracamy uwagę na walory turystyczne naszego pięknego kraju. Ale
        zorganizujemy dla Państwa każdą wycieczkę, począwszy od Skandynawii aż
        po Bałkany oraz od zachodu po wschód Europy. Zapewniamy fachową kadrę
        przewodników i pilotów wycieczek, sprawdzoną bazę noclegowo-żywieniową,
        co gwarantuje wysoki poziom naszych usług.
      </StyledParagraph>
      <StyledParagraph>
        Nasze Biuro podchodzi do klientów otwarcie i rzetelnie przez co nie
        spotkacie się Państwo z ukrytymi kosztami, programem z podziałem na
        „cena zawiera i cena nie zawiera” oraz z tzw. „kapeluszem” wędrującym po
        autokarze chyba że umowa z klientem stanowi inaczej.
      </StyledParagraph>
    </StyledInner>
  </StyledSection>
)

export default AboutUsView
