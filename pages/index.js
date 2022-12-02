import Header from '../components/header/Header.js'
import About from '../components/about/About.js'
import Skills from '../components/skills/Skills.js'
import Projects from '../components/projects/Projects.js'
import Contact from '../components/contact/Contact.js'
import Footer from '../components/footer/Footer.js'

function Main(props) {
    return (
        <div>
            <Header />
            <About 
                topTracks={props.topTracks}
                playingTrack={props.playingTrack}
                topShows={props.topShows}
            />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

const fetchJSON = (...args) => {
    return fetch(...args)
      .then(response => {
        if(response.ok && response.status == 200) {
          return response.json()
        }
      })
  }

export async function getStaticProps() {
    const refreshToken = 'AQARNoEdA_sRoSeA63oI15lphwmTAK2zakjWgWOalh6qtgbh5HeE25-adQgi62x_puKn354j9KH3VCEKTbzt1X6YddwrVI84cshnWZYtboiUm_LjsiIj-VhfISJ5ToKdAeA';
    const clientId = 'dd73939b84ee481aa782666c1e98c181'
    const clientSecret = '2554bd57f891473c8b408f977ee3cb72'

    const authOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=refresh_token&client_id=' + clientId + '&client_secret=' + clientSecret + '&refresh_token=' + refreshToken,
    };

    const spotifyToken = await fetchJSON('https://accounts.spotify.com/api/token', authOptions)
                                .then(data => data.access_token)
                                
    const init = {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + spotifyToken
        }
    }
    const tracks = await fetchJSON('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5&offset=0', init)
                        .then(data => data && data.items)
    const shows = await fetchJSON('https://api.spotify.com/v1/me/shows?limit=5&offset=0', init)
                        .then(data => data && data.items.map(item => item.show))

    const playingTrack = await fetchJSON('https://api.spotify.com/v1/me/player/currently-playing', init)
                        .then(data => data && data.currently_playing_type == 'track' && data.is_playing ? data : null)

    return {
        props: { 
            topTracks: tracks || null, 
            playingTrack: playingTrack,
            topShows: shows || null,
        },
        revalidate: 60
    }
}

export default Main