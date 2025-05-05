const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
        style={{ backgroundImage: `url('/Background.jpg')` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          LUXKE Bead Art 
        </h1>
        <p className="text-white mt-4 text-lg drop-shadow">
          Handcrafted bead art collections just for you😍
        </p>
          <a href="/gallery"  className="inline-block px-6 py-3 border border-white text-white text-lg mt-4 rounded-lg transition duration-300 hover:bg-white hover:text-black hover:scale-105">
          Shop Now
          </a>
      </div>
    </div>
  );
};

export default Home;


