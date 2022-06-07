import Link from "next/link";
import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

const Header = ({toggleAbout, open, description}) => {

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          Alessandro Molent
        </div>
        <div className="header__about desktop">
          {open ?
             (<span onClick={toggleAbout}> Close </span>)
              : (<span onClick={toggleAbout}> About </span>)}
        </div>

        <div className="header__about mobile">
          {open ?
             (<span onClick={toggleAbout}>
               <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M9.41536 8.70833L16.7701 1.35359L16.063 0.646484L8.70825 8.00122L1.35359 0.646559L0.646484 1.35367L8.00114 8.70833L1.06299 15.6465L1.7701 16.3536L8.70825 9.41543L15.6465 16.3537L16.3536 15.6466L9.41536 8.70833Z" fill="white"/>
               </svg>
              </span>)
              : (<span onClick={toggleAbout}>
                <svg width="20" height="7" viewBox="0 0 20 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.08423L19.1668 1.08423V0.0842285H0V1.08423ZM0 6.55981H19.1668V5.55981H0V6.55981Z" fill="white"/>
              </svg>
              </span>)}
        </div>


        <div className="header__description desktop">
          <p>{description}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
