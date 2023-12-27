import './about.css'
import IMG from '../../img/profile-pic.png'

export default function About(){
    return(
        <div className='about'>
            <img src={IMG} alt="" />
            <div>
                <h4>Sobre mim</h4>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a magna laoreet, iaculis massa vitae, pharetra ante. Cras elit mauris, viverra in purus at, rutrum congue nisi. Maecenas elementum elit vel sapien posuere, id pulvinar risus condimentum. Vivamus dignissim mauris enim, quis feugiat magna ornare eu. Pellentesque hendrerit elementum ante, non dapibus urna luctus ac. Ut tincidunt, nisi in imperdiet tincidunt, enim erat finibus augue, varius blandit nisi lacus vitae mauris.
                </p>
            </div>
        </div>
    )
}