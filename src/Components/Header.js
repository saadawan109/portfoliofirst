import bgImg from '../assets/images/credo_img_1.jpg'
import HeroText from './HeroText';
import Navbar from './Navbar'

function Header(){
    return(
        <>
        
            <section id='Header' style={{backgroundImage: `url(${bgImg})`}}>
                <div className='container h-100'>
                    <Navbar />

                    <div className='h-100 HeroText p-3 ps-5'>
                        <HeroText />
                    </div>
                    

                </div>

            

            </section>

            
        
        </>
    )
}

export default Header;