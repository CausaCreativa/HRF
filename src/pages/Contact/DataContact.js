

export const heroContact = {
    hero: require('../../utils/images/HeroContact.jpg').default,
    alt:'Hero contact image',
    banner: '',
    vector: require('../../utils/images/svg_contact_1.svg').default,
    title: '',
    viewHeight:sizeHero()
};

export const formContact = {
    formImage:require('../../utils/images/HeroContact.jpg').default,
};
export const IconCarta = {
    imgUrl:require('../../utils/images/carta.svg').default,
    text:"hrfasociados@gmail.com"
}
export const IconElectronic = {
    imgUrl:require('../../utils/images/comercio-electronico.svg').default,
    text:"320-225-4548"
}
export const IconUbicacion = {
    imgUrl:require('../../utils/images/ubicacion.svg').default,
    text:"Carrera 5 # 15-20"
}

export const BackgroundService2 = {
    Background:require('../../utils/images/svg_contact_2.svg').default
};
export const BackgroundService3 = {
    Background:require('../../utils/images/svg_contact_3.svg').default
};

export  function  sizeHero(){
    if(window.innerWidth > 1024 ) {
        return 95
    }else if(window.innerWidth < 800){
        return 55}
        return 60
}