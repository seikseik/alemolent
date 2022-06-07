import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";

const AboutSection = ({about, description}) => {

  const {aboutContact, aboutServices, aboutSocial, contactTitle, servicesTitle, socialTitle } = about;

  const year = new Date().getFullYear();

  return (
    <div className='about__section'>
      <div className='about__section_content'>

        <div className="mobile_description">
          <PrismicText field={description} />
        </div>

        <div className="about__section_services">
          <h2 className="about_-section_title">{servicesTitle}</h2>
          <PrismicRichText field={aboutServices} />
        </div>

        <div className="about__section_contacts">
          <h2 className="about_-section_title">{contactTitle}</h2>
            <PrismicRichText field={aboutContact} />
        </div>

        <div className="about__section_social">
          <h2 className="about_-section_title">{socialTitle}</h2>
            <PrismicRichText field={aboutSocial} />
        </div>

      </div>
      <span className="copyright">&copy; Alessandro Molent {year}</span>
    </div>
  )
}

export default AboutSection
