import React, { useEffect, useState } from 'react';
import './Portafolio.css';


const Portafolio = () => {

  const [showCarousel, setShowCarousel] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const gifs = [
    
    'https://scontent.fmex16-1.fna.fbcdn.net/v/t39.30808-6/352238521_254522533927793_8450848544080232601_n.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=02erm2SeCEMAX8Ck63y&_nc_ht=scontent.fmex16-1.fna&oh=00_AfCqyJrhDVbM87OzKqU318PMK8DzO-8zQkR-ajSKe5fBZg&oe=6482C5E9',
    'https://scontent.fmex16-2.fna.fbcdn.net/v/t39.30808-6/350818979_965322527943789_8937771150313124481_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=oYzinywfMiwAX9JaIB1&_nc_ht=scontent.fmex16-2.fna&oh=00_AfBpjbW5p1ACvaaKUWg3mgwCYMfSeKLbVkIrh-BBpBHX0w&oe=6481CAA6'
  ];

  const handleShowCarousel = () => {
    setShowCarousel(true);
  };

  const handleHideCarousel = () => {
    setShowCarousel(false);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % gifs.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + gifs.length) % gifs.length);
  };

  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(true);
  };
  const [showAbout, setShowAbout] = useState(true);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowProjects(false);
    setShowContact(false);
  }

  const handleProjectsClick = () => {
    setShowAbout(false);
    setShowProjects(true);
    setShowContact(false);
  }

  const handleContactClick = () => {
    setShowAbout(false);
    setShowProjects(false);
    setShowContact(true);
  }

  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="portfolio">
      <div className="app">
      

      {showCarousel && (
        <div className="carousel-overlay">
          <img src={gifs[currentSlide]} alt="Gif flotante" className="floating-gif" />
          <button className="close-carousel-button" onClick={handleHideCarousel}>
            X
          </button>
          <div className="carousel-buttons">
            <button className="carousel-prev-button" onClick={handlePrevSlide}>
              &#8249;
            </button>
            <button className="carousel-next-button" onClick={handleNextSlide}>
              &#8250;
            </button>
          </div>
        </div>
      )}

      {showGif && (
        <div className="gif-overlay">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTlhMjY4ZTI5YjRhODI1ZjNjYzNhYzY0NmE2OWI1OTE2Y2VjMzQ0YyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/NVLSyC0gjwlJSxLgzD/giphy.gif" alt="Gif flotante" className="floating-gif" />
        </div>
      )}
      {/* Resto del contenido de la aplicación */}
    </div>
      <header className="header">
      <img src="https://scontent.fmex16-1.fna.fbcdn.net/v/t39.30808-6/342551551_169407209021811_4149882552404308702_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=XpeoITW8TcAAX_tORo0&_nc_ht=scontent.fmex16-1.fna&oh=00_AfCHBxddMq6pGFNrSbbDG6rnr2lZB6qYPVGGEjbpLxH7rg&oe=6480B181" alt="Profile" className="profile-image" />
        <h1 className="header-title">Colin Ortiz Jose Angel</h1>
        <nav className="header-nav">
          <a href="#sobre-mi" onClick={handleAboutClick}>Sobre mí</a>
          <a href="#proyectos" onClick={handleProjectsClick}>Proyectos</a>
          <a href="#contacto" onClick={handleContactClick}>Contacto</a>
        </nav>
      </header>
      {showAbout && (
        <section id="sobre-mi">
          <h2>Sobre mí</h2>
          <p>Bienvenido a mi portafolio. Soy un diseñador y progamador apasionado por crear experiencias digitales hermosas y funcionales buscando una oportunidad para demostrar de lo que soy capas y crecer en la industria de desarollo.</p>
          <br />
          <p>Todo el contenido de esta pagina esta desarollado y progamado por mi las ilustraciones como el codigo de la pagina como los modelos 3d que muestro.</p>
          <br />
          <p>La pagina esta desarollada con html,react,css,boostrap y esta conectada a una Api.</p>
          <br />
          <img src="https://scontent.fmex16-1.fna.fbcdn.net/v/t1.6435-9/130816329_307291197284153_1533200197638823861_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=e3f864&_nc_ohc=xQyXMnQ8H5QAX-VZwJ_&_nc_ht=scontent.fmex16-1.fna&oh=00_AfDvLtUPqI0_V3SC7bGT8vqu_5OyPqZnW7TD_HnQ4q0QOQ&oe=64A4FF41" class="half-size" alt="Sobre mí" />
        </section>
      )}
      {showProjects && (
        <section id="proyectos">
          <h2>Proyectos</h2>
          <div className="projects">
            <div className="project">
              <h3>Proyecto 1</h3>
              <p>Descubre mi proyecto en desarrollo: un cautivador videojuego creado con Unity. Con atención al diseño, modelaje 3D y programación en C#, te sumergirás en mundos tridimensionales impactantes. Explora 
                un universo lleno de posibilidades y descubre mis habilidades creativas en un emocionante gameplay.</p>
                <button className="project-button" onClick={handleButtonClick}>
          Ver más
        </button>

        {showImage && (
  <div className="carousel-overlay">
    <img src="https://media.giphy.com/media/LRYelyrxjjUZ1orKdS/giphy.gif" alt="Imagen flotante" className="floating-image" />
    <button className="close-carousel-button" onClick={() => setShowImage(false)}>
      X
    </button>
  </div>
)}
            </div>
            <div className="project">
              
              <p>Es  un proyecto que me ah llevado a aprender mucho de programación como C# asi como modelaje y diseño 3d.</p>
              <button className="project-button" onClick={handleShowCarousel}> Ver más
        </button>
            </div>
            <div className="project">
              
              <img src="https://scontent.fmex16-1.fna.fbcdn.net/v/t1.6435-9/130922687_2798655787056331_5767171242969436521_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=MN8j9AewnscAX_R_-03&_nc_ht=scontent.fmex16-1.fna&oh=00_AfDMeSszPMMfY1rj55yD-Ae1jE_YMVV5XgavoFLQGTmr8w&oe=64A5B69F" class="half-sizes" alt='Hola'/>
              <img src="https://scontent.fmex16-2.fna.fbcdn.net/v/t39.30808-6/351139219_218329047669189_8331348729306269390_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=n1GVADG090EAX8NGQRA&_nc_ht=scontent.fmex16-2.fna&oh=00_AfBEjx3o-jSjfMtDKyIrXvWUEj0Y372VWm1c06fN3Egpwg&oe=648246FF" class="half-sizes" alt='Hola'/>
            </div>
          </div>
        </section>
      )}
      {showContact && (
        <section id="contacto">
          <h2>Contacto</h2>
          <p>Puedes contactarme a través de los siguientes medios:</p>
          <br />
          <ul>
            <li>Email: aboouttwoo@gmail.com</li>
            <br />
            <li>Teléfono: 4426760155</li>
            <br />
          <img src="https://scontent.fmex16-1.fna.fbcdn.net/v/t39.30808-6/342555502_885465285879228_680383318867029506_n.png?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=kjcvZZDFQvQAX9kJY-U&_nc_ht=scontent.fmex16-1.fna&oh=00_AfDiBksVmOYAaWcKZ-f-SjhM0qYkpoTraISIMITgzfIEGw&oe=64820F93" class="half-size" alt="Sobre mí" />
            
          </ul>
        </section>
      )}
       <footer>
        <div className="footer-content">
          
          <a href="https://www.linkedin.com/in/jose-angel-colin-ortiz-18b4a11b8/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Indeed" className="indeed-icon" />
          </a>
        </div>
      </footer>
      
    </div>
  );
}

export default Portafolio;