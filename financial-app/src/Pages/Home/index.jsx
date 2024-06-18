import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";

const Home = () => {
  const routes = [
    { title: "Finaciera", link: '/Finaciera'},
  ];
  return (
    <Layout>
      <p className="text-4xl hover:italic hover:font-bold hover:tracking-widest">Bienvenidos a mi prueba tecnica!</p>
      <ProductDetail routes={routes}/>
    </Layout>
  );
};

export default Home;
