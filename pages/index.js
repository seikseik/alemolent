import { Fragment } from 'react'
import Head from 'next/head'
import Script from 'next/script'

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

  const loadTypeKit = `
          (function(d) {
        var config = {
        kitId: 'rva5mrw',
        scriptTimeout: 3000,
        async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);
  `;

  return (
    <Fragment>
      <Head>
        <title>Alessandro Molent</title>
        <meta name="title" content="Alessandro Molent" />
        <meta name="description" content="Multidisciplinary graphic designer and art director based in London, United Kingdom." />
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{__html: loadTypeKit}} />
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
