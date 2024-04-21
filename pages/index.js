import Head from 'next/head'
import { useEffect } from 'react'
import { faApple, faAmazon, faSpotify, faBandcamp, faTwitter, faFacebook, faYoutube, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faTShirt } from '@fortawesome/free-solid-svg-icons'
import YoutubePlayer from '../components/youtubeplayer.js'
import { Container, Row, Column } from '../components/skeletonhelpers.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import LinkButton from '../components/button.js'
import SmallHeading from '../components/smallheading.js'
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
      <title>{"{ELSEIF}"}</title>
    </Head>
    <Container pad={true}>
      <Header />
      <Row pad={true}>
        <YoutubePlayer videoID='Y-Dy9mR4jnY' videoTitle='{ELSEIF} - HEAL | Aural Alliance (Audio)' />
      </Row>
      <SmallHeading>
        Socials
      </SmallHeading>
      <Row>
        <LinkButton width='six' href='https://youtube.com/c/ELSEIFedm' icon={faYoutube} label='YouTube' />
        <LinkButton width='six' href='https://instagram.com/ELSEIFedm' icon={faInstagram} label='Instagram' />
      </Row>
      <Row pad>
        <LinkButton width='four' href='https://twitter.com/ELSEIFedm' icon={faTwitter} label='Twitter' />
        <LinkButton width='four' href='https://bsky.app/profile/elseif.social' label='Bluesky' />
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
        <LinkButton width='four' href='https://music.apple.com/us/album/re-boot-phase-1/1715559646' icon={faApple} label='Apple Music' />
        <LinkButton width='four' href='https://tidal.com/browse/artist/35089903' label='Tidal' />
        <LinkButton width='four' href='https://merch.elseif.social/' icon={faTShirt} label='Merch' />
      </Row>
      <br />
    </Container>
    <Footer />
    <CookieConsent enableDeclineButton onAccept={handleAcceptCookie}>
      This website uses cookies to enhance the user experience.
    </CookieConsent>
    </div>
  )
}
