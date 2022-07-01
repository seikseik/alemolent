import { Fragment } from 'react'
import Head from 'next/head'
import Script from 'next/script'

import Header from  '../components/header'
import Slideshow from "../components/swiper";
import Sidepanel from "../components/sidepanel";
import AboutSection from "../components/about-section";
import { createClient } from '../prismicio'

import {useState, useEffect, useRef } from 'react'

export default function Home({page, about}) {

  const { aboutDescription } = about.data;
  const info = about.data;

  const { description, metaImage, pageTitle } = page.data;

  const {headerDescription} = page.data;

  const [open, setOpen] = useState(false);
  const HeadDesc = useRef();

  const toggleAbout = () =>{
    if(open){
      setTimeout(function(){
        HeadDesc.current.classList.remove("hide");
      }, 150)
    }else{
      HeadDesc.current.classList.add("hide");
    }
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
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />

       <meta itempropr="og:type" content="website" />
       <meta itempropr="og:title" content={pageTitle} />
       <meta itempropr="og:description" content={description} />
       <meta itempropr="og:image" content={metaImage.url} />

       <meta itempropr="twitter:card" content="summary_large_image" />
       <meta itempropr="twitter:title" content={pageTitle} />
       <meta itempropr="twitter:description" content={description} / >
       <meta itempropr="twitter:image" content={metaImage.url} />


        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{__html: loadTypeKit}} />
      </Head>

      <Header description={headerDescription} open={open} toggleAbout={toggleAbout}  forwardedRef={HeadDesc}/>
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
