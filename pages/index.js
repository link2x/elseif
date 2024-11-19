import Head from 'next/head'
import { useEffect } from 'react'
import { faApple, faAmazon, faSpotify, faBandcamp, faTwitter, faFacebook, faYoutube, faGithub, faLinkedin, faInstagram, faSoundcloud, faDiscord, faTelegram, faBluesky, faPaypal } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faTShirt, faVrCardboard } from '@fortawesome/free-solid-svg-icons'
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
        <YoutubePlayer videoID='9KrHhTJBEZc' videoTitle='{ELSEIF} @ GROWL' />
      </Row>
      <SmallHeading>
        Merch
      </SmallHeading>
      <Row>
        <LinkButton width='twelve' href='https://merch.elseif.social/' icon={faTShirt} label='Merch' />
      </Row>
      <SmallHeading>
        Socials
      </SmallHeading>
      <Row>
        <LinkButton width='twelve' href='https://discord.gg/SJVFQDG3cR' icon={faDiscord} label='Discord Server' />
      </Row>
      <Row pad>
        <LinkButton width='six' href='https://t.me/elseifedm' icon={faTelegram} label='Telegram Group' />
        <LinkButton width='six' href='https://t.me/Siytron' icon={faTelegram} label='Personal Telegram' />
      </Row>
      <Row pad>
        <LinkButton width='six' href='https://youtube.com/c/ELSEIFedm' icon={faYoutube} label='YouTube' />
        <LinkButton width='six' href='https://instagram.com/ELSEIFedm' icon={faInstagram} label='Instagram' />
      </Row>
      <Row pad>
        <LinkButton width='four' href='https://twitter.com/ELSEIFedm' icon={faTwitter} label='Twitter' />
        <LinkButton width='four' href='https://bsky.app/profile/elseif.social' icon={faBluesky} label='Bluesky' />
        <LinkButton width='four' href='https://fb.com/ELSEIFedm' icon={faFacebook} label='Facebook' />
      </Row>
      <Row pad>
        <LinkButton width='six' href='https://vrc.group/ELSEIF.4356' icon={faVrCardboard} label='VRChat Group' />
        <LinkButton width='six' href='https://vrchat.com/home/user/usr_14a00c8f-642e-4cd0-91e0-d848f5841e17' icon={faVrCardboard} label='VRChat Profile' />
      </Row>
      <SmallHeading>
        Subscriptions and Donations
      </SmallHeading>
      <Row>
        <LinkButton width='six' href='https://ko-fi.com/ELSEIFedm' icon={faCoffee} label='Ko-fi' />
        <LinkButton width='six' href='https://www.paypal.com/donate/?hosted_button_id=2Z3X6H4FVE87S' icon={faPaypal} label='PayPal' />
      </Row>
      <SmallHeading>
        Stores and Sounds
      </SmallHeading>
      <Row>
        <LinkButton width='twelve' href='https://elseif.bandcamp.com' icon={faBandcamp} label='Bandcamp' />
      </Row>
      <Row pad>
        <LinkButton width='six' href='https://soundcloud.com/elseifedm' icon={faSoundcloud} label='Soundcloud' />
        <LinkButton width='six' href='https://open.spotify.com/artist/73yAfTEIyfHrWivS2TOTLg?si=yai3B_R4QFSn2ajCtxwE8g' icon={faSpotify} label='Spotify' />
      </Row>
      <Row pad>
        <LinkButton width='four' href='https://music.apple.com/us/album/re-boot-phase-1/1715559646' icon={faApple} label='Apple Music' />
        <LinkButton width='four' href='https://tidal.com/browse/artist/35089903' label='Tidal' />
        <LinkButton width='four' href='https://music.youtube.com/channel/UCIVwLsPG9eEm-A3f2-axWPg' icon={faYoutube} label='YouTube Music' />
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
