import React from 'react'
import './footer.scss'
import { DiscordIc, FacebookIc, GithubIc, InstagramIc, Logo, TwitterIc } from '../../../assets'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon"/>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={Logo} alt="logo" />
                </div>
               <div className="social-wrapper">
                   <Icon img={FacebookIc} />
                   <Icon img={InstagramIc} />
                   <Icon img={TwitterIc} />
                   <Icon img={GithubIc} />
                   <Icon img={DiscordIc} />
               </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
