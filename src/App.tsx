import coffeeVideo from "./assets/videos/0_Coffee_Cup_1280x720.mp4";
import qrCode from "./assets/qr-code.png";
import fastBackPub from "./assets/fastback-advertising.png";
import "./App.css";

function App() {
  return (
    <main className="mainContent">
      <video autoPlay muted loop id="myVideo" className="videoContainer">
        <source src={coffeeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="pageLayout">
        <header className="pageLayoutHeader">
          <h1>O Jornal .News</h1>
          <div>
            <span>Johann Pachelbel - Canon in D</span>
          </div>
          <time>25/02 - 10:21</time>
        </header>
        <div className="pageLayoutContent">
          <section className="pageLayoutCol1">
            <div className="topText">
              <h1>Municipal Uberlândia - MG</h1>
              <h2>
                Projeto que oferece wi-fi gratuito no Parque do Sabiá faz
                sucesso entre frequentadores do espaço
              </h2>
            </div>
            <div className="newsList">
              {[
                "Obras de ampliação do Centro de Reservação São Jorge estão em fase final",
                "Prefeitura estabelece critérios para regularização de 619 lotes dos assentamentos Minas Brasil e Integração",
                "Prefeitura oportuniza processo seletivo para rede de supermercados contratar mais de 50 profissionais",
              ].map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>
          <aside className="pageLayoutCol2">
            <img className="qrCode" src={qrCode} alt="QR Code"></img>
            <img
              className="advertisingImage"
              src={fastBackPub}
              alt="QR Code"
            ></img>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default App;
