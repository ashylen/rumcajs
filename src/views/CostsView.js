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

const CostsView = () => (
  <StyledSection>
    <StyledInner>
      <StyledH2>Co wpływa na cenę?</StyledH2>
      <StyledParagraph>
        • TERMIN WYJAZDU - cena wielu usług turystycznych (zakwaterowanie,
        wyżywienie, przewodnicy, autokar) zależy od terminu w którym ma odbywać
        się wycieczka. W terminach szczytowych jak np. długie weekendy, okres
        wakacyjny, ferie zimowe, imprezy masowe, ceny usług są automatycznie
        podnoszone przez Naszych kontrahentów z racji dużego zainteresowania.
        Aby obniżyć koszty można wybrać termin w spokojniejszym czasie co także
        podniesie komfort pobytu poprzez mniejsze „tłumy”;
        <br />• CZAS ZGŁOSZENIA - na cenę ma także wpływ okres wyprzedzenia z
        jakim zgłosicie się Państwo do naszego biura z chęcią organizacji
        wyjazdu. Im dłuższy czas wyprzedzenia tym większe możliwości na
        rezerwacje lepszych jakościowo usług w niższej cenie;
        <br />• STANDARD HOTELU - koszt noclegu zależy od jego jakości. Im
        lepsza jakość tym cena jest wyższa. Trzeba także zwrócić uwagę na kraj
        docelowy podróży, ponieważ Polskie standardy 3 lub 4 gwiazdek nie są
        takie same w całej Europie;
      </StyledParagraph>
      <StyledParagraph>
        • FORMA WYŻYWIENIA - ilość i typ posiłków wpływa na koszt wycieczki.
        Najczęściej wybieraną opcją przy wycieczkach objazdowych jest śniadanie
        + obiadokolacja co powoduje optymalny poziom wydatków na wyżywienie
        uczestników; • BILETY WSTĘPU - ceny wejściówek mają bardzo dużą
        rozpiętość. Przy ustalaniu programu wycieczki należy zastanowić się
        które punkty najbardziej nas ciekawią i wybrać te najważniejsze oraz
        sprawdzić czy cena biletu w  konkretne miejsce jest adekwatna do jakości
        miejsca/rzeczy które tam zobaczymy. • ILOŚĆ UCZESTNIKÓW - podczas
        organizacji każdego wyjazdu są tzw. koszty stałe (autokar, przewodnicy,
        pilot, itp.) które rozkładają się wszystkich uczestników. Powoduje to
        zmniejszenie kosztów wyjazdu przy większej frekwencji a wzrost wydatków
        przy jej zmniejszeniu.
      </StyledParagraph>
    </StyledInner>
  </StyledSection>
)

export default CostsView
