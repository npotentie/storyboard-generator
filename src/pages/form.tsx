import Form from '@/components/form'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Storyboard Generator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="main-content">
        <Form/>
      </main>
      <Footer/>
      <style jsx>{`
        .main-content {
          padding: 24px 130px;
          margin: 130px 0px;
        }
      `}</style>
    </>
  )
}