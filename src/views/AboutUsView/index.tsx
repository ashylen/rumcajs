import React from "react"

// Components
import { StyledSectionInfo } from "./styles"
import { Typography, Box } from "@material-ui/core"
import SectionTitle from "components/atoms/SectionTitle"

const AboutUsView: React.FC = () => (
  <StyledSectionInfo>
    <Box textAlign="center">
      <SectionTitle subtitle="doświadczenie procentuje">O NAS</SectionTitle>
      <br />
      <br />
      <Typography variant="h5" component="p" align="left">
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
      </Typography>
      <br />
      <Typography variant="h5" component="p" align="left">
        Wyróżniają nas wycieczki po Polsce, bo dbamy o tożsamość narodową i
        zwracamy uwagę na walory turystyczne naszego pięknego kraju. Ale
        zorganizujemy dla Państwa każdą wycieczkę, począwszy od Skandynawii aż
        po Bałkany oraz od zachodu po wschód Europy. Zapewniamy fachową kadrę
        przewodników i pilotów wycieczek, sprawdzoną bazę noclegowo-żywieniową,
        co gwarantuje wysoki poziom naszych usług.
      </Typography>
      <br />
      <Typography variant="h5" component="p" align="left">
        Nasze Biuro podchodzi do klientów otwarcie i rzetelnie przez co nie
        spotkacie się Państwo z ukrytymi kosztami, programem z podziałem na
        „cena zawiera i cena nie zawiera” oraz z tzw. „kapeluszem” wędrującym po
        autokarze chyba że umowa z klientem stanowi inaczej.
      </Typography>
      <br />
    </Box>
  </StyledSectionInfo>
)

export default AboutUsView
