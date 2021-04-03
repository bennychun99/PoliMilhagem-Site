import Head from "next/head";
function Logotipo() {
  return (
    <div>
      <a href="#">
        <img
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
    <div>
      <div className="inline-block md:hidden">
        <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        </button>
        <div>
        <a href="#" className="block">Nossa história</a>
        <a href="#" className="block">Nossos projetos</a>
        <a href="#" className="block">A equipe</a>
        <a href="#" className="block">Contato</a>
        <a href="#" className="block bg-green-400 text-white rounded">
          Familhagem
        </a>
        </div>
      </div>

      <div className="hidden md:inline-block bg-white p-2 flex items-center">
        <a href="#">Nossa história</a>
        <a href="#">Nossos projetos</a>
        <a href="#">A equipe</a>
        <a href="#">Contato</a>
        <a href="#" className="bg-green-400 text-white rounded">
          Familhagem
        </a>
      </div>
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
        <Header />
      </div>
    </div>
  );
}
export default Home;
