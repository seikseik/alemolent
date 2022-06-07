import { Fragment } from 'react'
import Head from 'next/head'
import Header from  '../components/header'
import Slideshow from "../components/swiper";
import Sidepanel from "../components/sidepanel";
import AboutSection from "../components/about-section";
import { createClient } from '../prismicio'

import {useState, useEffect } from 'react'

export default function Home({page, about}) {

  const { aboutDescription } = about.data;
  const info = about.data;

  const {headerDescription} = page.data;

  const [open, setOpen] = useState(false);

  const toggleAbout = () =>{
    setOpen(!open)
  }

  return (
    <Fragment>
      <Head>
        <title>Alessandro Molent</title>
        <meta name="title" content="Alessandro Molent" />
        <meta name="description" content="Multidisciplinary graphic designer and art director based in London, United Kingdom." />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Header description={headerDescription} open={open} toggleAbout={toggleAbout}/>
          <Sidepanel open={open}>
            <AboutSection description={aboutDescription} about={info}/>
          </Sidepanel>
      <Slideshow slice={page.data.slices[0]}/>
    </Fragment>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const page = await client.getSingle("home");
  const about = await client.getSingle("about");

  return {
    props: {
      page,
      about,
    },
  };
}
