import logo from '../../assets/logo.png'
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';
const cesta = {
  top: {
    title: "Detalhe da cesta"
  },
  details: {
    name: "Cesta de Verduras",
    logoFarm: logo,
    nameFarm: "Jenny Jack Farm",
    description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.",
    price: "R$ 40,00",
    button: 'Comprar'
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      }
    ]
  }

}

export default cesta