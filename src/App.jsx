import { useState, useRef } from "react";
import "./App.css";
import video from "../public/fondo.mp4";
import audioTerror from "../public/audio-terror.mp3";
import REYCALABAZA from "../public/REY-CALABAZA.mp4";
import duoHallowen from "../public/duo-hallowen-town.mp4";

function App() {
  const [musicaIniciada, setMusicaIniciada] = useState(false);
  const [reproduciendo, setReproduciendo] = useState(false);
  const audioRef = useRef(null);

  // Función para activar la música al hacer el primer clic
  const iniciarExperiencia = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setReproduciendo(true);
    }
    setMusicaIniciada(true);
  };

  // Función para pausar/reproducir desde el botón flotante
  const toggleMusica = () => {
    if (reproduciendo) {
      audioRef.current.pause();
      setReproduciendo(false);
    } else {
      audioRef.current.play();
      setReproduciendo(true);
    }
  };

  const hoy = new Date();
  // Se cambia la fecha al 02/10/2026 (YYYY-MM-DD)
  const fechaGaleria = new Date("2026-11-02T00:00:00");
  const galeriaDisponible = hoy >= fechaGaleria;

  return (
    <main className="app-container lightning-effect">
      {/* Audio de fondo (coloca tu archivo .mp3 en la carpeta public) */}
      <audio ref={audioRef} src={audioTerror} loop />

      {/* OVERLAY INICIAL (Obliga el clic para desbloquear el sonido) */}
      {!musicaIniciada && (
        <div className="overlay-bienvenida">
          <div className="bienvenida-box">
            <h2>WIX-O</h2>
            <h2>DEAD PARTY VOL. 2</h2>
            <p>¿Te atreves a entrar?</p>
            <button onClick={iniciarExperiencia} className="btn-entrar">
              ENTRAR A LA FIESTA
            </button>
          </div>
        </div>
      )}

      {/* BOTÓN FLOTANTE DE CONTROL DE AUDIO */}
      {musicaIniciada && (
        <button onClick={toggleMusica} className="btn-musica-flotante">
          {reproduciendo ? "🔊" : "🔇"}
        </button>
      )}

      {/* SECCIÓN 1: PORTADA */}
      <section className="portada snap-section">
        <video autoPlay loop muted playsInline className="video-background">
          <source src={video} type="video/mp4" />
        </video>

        <div className="portada-content">
          <div className="info-container">
            <div className="info-item">
              <p className="label">Fecha</p>
              <p className="value">31/10/26</p>
            </div>

            <div className="info-item">
              <p className="label">Lugar</p>
              <a href="#" className="value link">
                Ver Ubicación
              </a>
            </div>

            <div className="info-item">
              <p className="label">Hora</p>
              <p className="value">20:00</p>
            </div>
          </div>
          <p className="concurso">¡Concurso de Disfraces!</p>

          <div className="scroll-arrows">
            <span>⬇</span>
            <span>⬇</span>
            <span>⬇</span>
            <span>⬇</span>
            <span>⬇</span>
            <span>⬇</span>
            <span>⬇</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: CONCURSOS DE DISFRACES */}
      <section className="seccion-oscura concursos-section">
        <video autoPlay loop muted playsInline className="video-background2">
          <source src={REYCALABAZA} type="video/mp4" />
        </video>
        <div className="scroll-arrows">
          <span>⬇</span>
          <span>⬇</span>
          <span>⬇</span>
          <span>⬇</span>
          <span>⬇</span>
          <span>⬇</span>
          <span>⬇</span>
        </div>
      </section>

      <section className="seccion-oscura concursos-section">
        <video autoPlay loop muted playsInline className="video-background2">
          <source src={duoHallowen} type="video/mp4" />
        </video>
        <div className="scroll-arrows">
          <span>⬇</span>
          <span>⬇</span>
          <span>⬇</span>
          <span>⬇</span>
          <span>⬇</span>
          <span>⬇</span>
          <span>⬇</span>
        </div>
      </section>

      {/* SECCIÓN 3: GALERÍA */}
      <section className="seccion-oscura galeria-section">
        <h2 className="titulo-seccion">Galería del Evento</h2>

        {/* Solo se muestran las fotos si la fecha de la galería ya está disponible */}
        {galeriaDisponible && (
          <div className="galeria-grid">
            {[1, 2, 3, 4, 5, 6].map((foto) => (
              <div key={foto} className="foto-placeholder">
                <p>📷 Foto {foto}</p>
              </div>
            ))}
          </div>
        )}

        <div className="galeria-link-container">
          {galeriaDisponible ? (
            <a href="URL_DE_TU_GALERIA" className="btn-terror activo">
              Ver Galería Completa
            </a>
          ) : (
            <button disabled className="btn-terror inactivo">
              {/* Texto actualizado a la nueva fecha */}
              🔒 Galería disponible el 02/11/26
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
