import React from "react"
import {AboutS,Avatar,Img,Name,H2,Profession,Location, Logo} from '../styled/AboutStyled';

const About2 = () => {
    return (
        <AboutS>
            <div className="About-container">
                <Avatar>
                    <figure>
                    <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1630474970/arf_russaw.jpg" alt="Mi Avatar" id="perfil"/>
                    </figure>
                </Avatar>
                <Name>
                    <h2> Alexis Rave Florez </h2>
                </Name>
                <Profession>
                    <p> Tecnologo electronico e Instrumental Industrial </p>
                </Profession>
                <Location>
                    <p> Bello, Colombia </p>
                </Location>
             <div>
                 {/* <Logo>  */}
                        {/* <img src="https://psicologowal.com/wp-content/uploads/2014/01/social-facebook-button-blue-icon.png" alt="No Disponible" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ8dkPCUIF92JD5ePwD9NVlvYy2XaitxNk8w&usqp=CAU" alt="No Disponible" />
                        {/* <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="No Disponible" /> */}
                        {/* <img src="https://img.flaticon.com/icons/png/512/25/25231.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="No Disponible" />
                 </Logo>  */}
                 </div>
            </div>
        </AboutS>
    )
}

export default About2;