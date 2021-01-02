import Head from 'next/head'
import layoutStyles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from './navBar'

const name = 'Rob'
export const siteTitle = "Rob's Learnatorium"

export default function Layout({ children, home }) {
    return (
      <div className={layoutStyles.container}>
        <Head>
          <link rel="icon" href="/images/mystic-power.png" />
          <meta
            name="description"
            content="This is where it all happens"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={layoutStyles.header}>
          <Link href="/">
            <a>
              <img
                src="/images/mystic-power.png"
                className={`${layoutStyles.headerImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
            </a>
          </Link>
          <NavBar/>
        </header>
        <main>
          {children}
        </main>
        {!home && (
          <div className={layoutStyles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    )
  }