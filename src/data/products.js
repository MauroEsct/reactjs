import arabicaImage from '../assets/products/producto_grano_arabiga.jpg';
import robustaImage from '../assets/products/producto_grano_robusta.jpg';
import typicaImage from '../assets/products/producto_grano_typica.jpg';
import catuaiImage from '../assets/products/producto_grano_catuai.jpg';

const products = [
  {
    id: 1,
    nombre: "Arábica x5 kg",
    precio: 34900,
    description: "Granos de café de alta calidad, conocidos por su sabor suave y aromático.",
    image: arabicaImage
  },
  {
    id: 2,
    nombre: "Robusta x5 kg",
    precio: 34900,
    description: "Café de sabor fuerte y amargo, con un alto contenido de cafeína.",
    image: robustaImage
  },
  {
    id: 3,
    nombre: "Typica x5 kg",
    precio: 34900,
    description: "Variedad exótica de café, con notas florales y un cuerpo ligero.",
    image: typicaImage
  },
  {
    id: 4,
    nombre: "Catuaí x5 kg",
    precio: 34900,
    description: "Conocido por su sabor dulce y acidez baja, perfecto para un café equilibrado.",
    image: catuaiImage
  },
];

export default products;