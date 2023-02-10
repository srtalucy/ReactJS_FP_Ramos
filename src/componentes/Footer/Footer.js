import './Footer.css'

const Footer = ()=>{
    return(
        <div className="row container-fluid footer">
        <section className="col d-flex flex-column align-items-center">
          <h6>SITIOS OFICIALES DE BTS</h6>
          <p>
            <a href="https://www.instagram.com/bts.bighitofficial/"
              ><img src="./images/logo.svg" alt="INSTAGRAM"
            /></a>
            <a
              href="https://twitter.com/bts_bighit?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              ><img src="./images/logo.svg" alt="TWITTER"
            /></a>
            <a href="https://ibighit.com/"
              ><img src="./images/logo.svg" alt="SITIO OFICIAL"
            /></a>
          </p>
        </section>
      </div>
    )
}


export default Footer;