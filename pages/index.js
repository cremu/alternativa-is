import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Alternativa | Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src='/logo-img.webp'
            alt='Alternativa minimalistic logo'
            width={75}
            height={75}
          />
        </div>
        <Image
          src='/logo-text.webp'
          alt='Alternativa claim: Embrace your inner flow'
          width={250}
          height={250/4.77}
          priority
        />    
      </header>
      <main className={styles.main}>
        <div className={styles.heading}>
          <h1>Margnota<br/>túrnærbuxur</h1>
          <p>Reusable period underwear</p>
        </div>
        <Image
          src='/alternativa-scaled-compressed-85.webp'
          alt='Big size model wearing Alternativa underwear'
          layout={'fill'}
          objectFit='cover'
          placeholder='blur'
          blurDataURL='/alternativa-scaled-compressed-85.webp'
          priority
        />
      </main>

      <footer className={styles.footer}>
        <p>CONTACT:</p>
        <a className={styles.email} href="mailto:hello@alternativa.is">HELLO@ALTERNATIVA.IS</a>
      </footer>
    </div>
  )
}
