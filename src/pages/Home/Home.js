import React from "react";
import { ContainerHome } from "./DataHome";
const Home = () => {
return (
    <>
    <ContainerHome>
        <div class="panel home">
            <div class="left">
                <h1>SOMOS HRF</h1>
            </div>
            <div class="right">
                <p>Para HRF lo mas importante eres tu... </p>
            </div>
        </div>
        <div class="panel contactUs">
            <div class="left">
                <div>
                    <img src="https://www.officein.com.co/wp-content/uploads/2019/02/Conoce-como-se-mueve-el-mercado-de-las-oficinas-en-Bogota.jpg"></img>
                </div>
                <div class="div_button">
                    <button class="button">Contáctanos</button>
                </div>
            </div>
            <div class="right">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut mi elementum, blandit lacus non, dictum arcu. Nullam rutrum ex eu odio iaculis mollis. Duis suscipit ligula et ex rutrum dictum. Suspendisse aliquam ipsum eu lorem vehicula cursus. Ut accumsan tellus efficitur libero lacinia dignissim. Donec suscipit tempor cursus. Aliquam eleifend malesuada posuere. Donec nec massa sed erat egestas euismod.Vestibulum sed ex commodo, mattis orci ut, rutrum mi. In imperdiet efficitur arcu eu vehicula. Vestibulum vel orci eros. Maecenas ultrices lobortis enim id dignissim. Praesent eget ullamcorper ligula. Aliquam erat volutpat. Donec nec tortor id justo pulvinar gravida. Integer tristique faucibus erat vitae vehicula. Curabitur ultrices est eu auctor tincidunt. Nam quis augue magna.</p>
            </div>
        </div>
        <div class="panel customers">
            <div class="panel-left">
                <img src="https://www.officein.com.co/wp-content/uploads/2019/02/Conoce-como-se-mueve-el-mercado-de-las-oficinas-en-Bogota.jpg"></img>
            </div>
            <div class="panel-right">
                <h1>Clientes</h1>
                <p>Ellos han confiado en nuestros procesos</p>
                <section>
                    <div class="carousel__container">
                        <div class="carousel-item">
                            <img
                            class="carousel-item__img"
                            src="data:image/png;base64,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"
                            alt="Exito"
                            ></img>
                        </div>
                        <div class="carousel-item">
                            <img
                                class="carousel-item__img"
                                src="https://www.tiendasjumbo.co/arquivos/jumbo-logo-preload.png?v=636125778257100000"
                                alt="Jumbo"
                            ></img>
                        </div>
                        <div class="carousel-item">
                            <img
                                class="carousel-item__img"
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Logo_Metro_Cencosud.png"
                                alt="Metro"
                            ></img>
                        </div>
                        <div class="carousel-item">
                            <img
                            class="carousel-item__img"
                        src="data:image/png;base64,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"
                            alt="People"
                            ></img>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </ContainerHome>
    </>
  );
};

export default Home;
