import Head from "next/head";
function Logotipo() {
  return (
    <div>
      <a href="#"><img
        src="/logo-horizontal.png"
        alt="Logotipo"
        className="p-2 hidden md:inline-block max-h-16"
      />
      <img
        src="/logo-vertical.png"
        alt="Logotipo"
        width={150}
        className="p-2 inline-block md:hidden"
      />
      </a>
    </div>
  );
}
function Menu() {
  return (
    <div className="bg-white p-2 flex items-center">
      <a href="#">Nossa história</a>
      <a href="#">Nossos projetos</a>
      <a href="#">A equipe</a>
      <a href="#">Contato</a>
      <a href="#" className="bg-green-400 text-white rounded">Familhagem</a>
    </div>
  );
}

function Header() {
  return (
    <div className="p-2 container h-28 max-w-7xl m-auto bg-red-300 flex justify-between items-center">
      <Logotipo />
      <Menu />
    </div>
  );
}
function Home() {
  return (
    <div>
      <Head>
        <title>Equipe PoliMilhagem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="flex justify-center">
      <Header /></div>
    </div>
  );
}
export default Home;
