import Head from 'next/head'
import { useEffect } from 'react'
import { faApple, faAmazon, faSpotify, faBandcamp, faTwitter, faFacebook, faYoutube, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faTShirt } from '@fortawesome/free-solid-svg-icons'
import YoutubePlayer from '../components/youtubeplayer.js'
import { Container, Row, Column } from '../components/skeletonhelpers.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import LinkButton from '../components/button.js'
import SmallHeading from '../components/smallheading.js'
import { randomTitle } from '../functions/randomtitle.js'
import CookieConsent, { getCookieConsentValue, Cookies } from 'react-cookie-consent'
import { initGA } from '../functions/ga-utils'


export default function Home() {

  const handleAcceptCookie = () => {
    if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
      initGA(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);
    }
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  return (
    <div>
    <Head>
      <title>Eden Simmons - {randomTitle()}</title>
    </Head>
    <Container pad={true}>
      <Header />
      <Row pad={true}>
        <YoutubePlayer videoID='lSC32D29k68' videoTitle='Falling (W8 Remix) {ELSEIF Edit}' />
      </Row>
      <SmallHeading>
        Socials
      </SmallHeading>
      <Row>
        <LinkButton width='four' href='https://youtube.com/c/ELSEIFedm' icon={faYoutube} label='YouTube' />
        <LinkButton width='four' href='https://twitter.com/link2x101' icon={faTwitter} label='Twitter' />
        <LinkButton width='four' href='https://fb.com/ELSEIFedm' icon={faFacebook} label='Facebook' />
      </Row>
      <SmallHeading>
        Subscriptions
      </SmallHeading>
      <Row>
        <LinkButton width='twelve' href='https://ko-fi.com/00eden' icon={faCoffee} label='Ko-fi'/>
      </Row>
      <SmallHeading>
        Stores
      </SmallHeading>
      <Row>
        <LinkButton width='four' href='https://open.spotify.com/artist/73yAfTEIyfHrWivS2TOTLg?si=yai3B_R4QFSn2ajCtxwE8g' icon={faSpotify} label='Spotify' />
        <LinkButton width='four' href='https://music.youtube.com/channel/UCIVwLsPG9eEm-A3f2-axWPg' icon={faYoutube} label='YouTube Music' />
        <LinkButton width='four' href='https://elseif.bandcamp.com' icon={faBandcamp} label='Bandcamp' />
      </Row>
      <Row pad={true}>
        <LinkButton width='four' href='https://music.apple.com/us/album/brotherhood-single/1585752974?uo=4' icon={faApple} label='Apple Music' />
        <LinkButton width='four' href='https://tidal.com/browse/artist/35089903' label='Tidal' />
        <LinkButton width='four' href='https://trshfmme.com/' icon={faTShirt} label='Merch' />
      </Row>
      <br />
      <SmallHeading>
        Other Bits
      </SmallHeading>
      <Row pad={true}>
        <LinkButton width='six' href='https://github.com/link2x' icon={faGithub} label='GitHub' />
        <Column width='six' center={false}>
          I write code sometimes, it lives here.
        </Column>
      </Row>
      <Row pad={true}>
        <LinkButton width='six' href='https://www.linkedin.com/in/eden-simmons-174b118b/' icon={faLinkedin} label='LinkedIn' />
        <Column width='six' center={false}>
          Resume / Work Experience.
        </Column>
      </Row>
      <Row pad={true} />
    </Container>
    <Footer />
    <CookieConsent enableDeclineButton onAccept={handleAcceptCookie}>
      This website uses cookies to enhance the user experience.
    </CookieConsent>
    </div>
  )
}
