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
                   <a href="https://www.facebook.com/romzi.kaka/" target="_blank" rel="noreferrer"><Icon img={FacebookIc} /></a>
                   <a href="https://instagram.com/rfghozi" target="_blank" rel="noreferrer"><Icon img={InstagramIc} /></a>
                   <a href="https://twitter.com/rfghozi" target="_blank" rel="noreferrer"><Icon img={TwitterIc} /></a>
                   <a href="https://github.com/romzifg" target="_blank" rel="noreferrer"><Icon img={GithubIc} /></a>
                   <a href="https://support.discord.com/hc/en-us/profiles/1514210246481" target="_blank" rel="noreferrer"><Icon img={DiscordIc} /></a>
               </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
