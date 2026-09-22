"use client";

import Link from "next/link";

export default function Home() {
return ( <main> <header className="header"> <nav className="navbar"> <div className="logo">Lucas.dev</div>

```
      <div className="navLinks">
        <a href="#sobre">Sobre</a>
        <a href="#experiencia">Experiência</a>
        <a href="#projetos">Projetos</a>
        <a href="#formacao">Formação</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>
  </header>

  {/* HERO */}
  <section className="hero">
    <div className="heroContent">
      <p className="heroTag">Olá, eu sou</p>

      <h1>
        Lucas <span>Hudson</span>
      </h1>

      <h2>Estudante de Ciência da Computação</h2>

      <p className="heroDescription">
        Desenvolvedor em formação, interessado em desenvolvimento
        de software, aplicações web, bancos de dados e tecnologia.
      </p>

      <div className="heroButtons">
        <a href="#projetos" className="button primary">
          Ver meus projetos
        </a>

        <a href="#contato" className="button secondary">
          Entre em contato
        </a>
      </div>
    </div>

    <div className="heroCard">
      <div className="codeWindow">
        <div className="windowTop">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <pre>
```

{`const desenvolvedor = {
  nome: "Lucas Hudson",
  curso: "Ciência da Computação",
  foco: [
    "React",
    "JavaScript",
    "Banco de Dados"
  ],
  objetivo: "Criar soluções"
};`} </pre> </div> </div> </section>

```
  {/* SOBRE */}
  <section id="sobre" className="section">
    <div className="sectionTitle">
      <span>01.</span>
      <h2>Sobre mim</h2>
    </div>

    <div className="aboutGrid">
      <div>
        <p>
          Sou estudante de Ciência da Computação e venho desenvolvendo
          meus conhecimentos na área de programação e desenvolvimento
          de sistemas.
        </p>

        <p>
          Tenho interesse principalmente em desenvolvimento web,
          utilizando tecnologias como React e JavaScript, além de
          banco de dados e desenvolvimento de aplicações.
        </p>

        <p>
          Durante minha formação acadêmica, venho desenvolvendo
          projetos que envolvem programação, modelagem de dados,
          desenvolvimento de sites e criação de sistemas.
        </p>
      </div>

      <div className="skillsCard">
        <h3>Conhecimentos</h3>

        <div className="skills">
          <span>JavaScript</span>
          <span>React</span>
          <span>Next.js</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Java</span>
          <span>Python</span>
          <span>C</span>
          <span>SQL</span>
          <span>Banco de Dados</span>
          <span>Git</span>
        </div>
      </div>
    </div>
  </section>

  {/* EXPERIÊNCIA */}
  <section id="experiencia" className="section darkSection">
    <div className="sectionTitle">
      <span>02.</span>
      <h2>Experiência acadêmica</h2>
    </div>

    <div className="timeline">
      <div className="timelineItem">
        <div className="timelineDot"></div>

        <div className="timelineContent">
          <h3>Ciência da Computação</h3>

          <span className="timelineDate">
            Formação acadêmica
          </span>

          <p>
            Durante a graduação venho desenvolvendo conhecimentos em
            programação, desenvolvimento web, banco de dados,
            estruturas de dados, engenharia de software e outras
            áreas relacionadas à computação.
          </p>

          <div className="tags">
            <span>Programação</span>
            <span>Web</span>
            <span>Banco de Dados</span>
          </div>
        </div>
      </div>

      <div className="timelineItem">
        <div className="timelineDot"></div>

        <div className="timelineContent">
          <h3>Projetos Acadêmicos</h3>

          <span className="timelineDate">
            Desenvolvimento de sistemas
          </span>

          <p>
            Participação em projetos acadêmicos envolvendo criação de
            aplicações, desenvolvimento de sites, modelagem de bancos
            de dados e utilização de diferentes linguagens de
            programação.
          </p>

          <div className="tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>SQL</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* PROJETOS */}
  <section id="projetos" className="section">
    <div className="sectionTitle">
      <span>03.</span>
      <h2>Meus projetos</h2>
    </div>

    <p className="sectionDescription">
      Alguns dos projetos desenvolvidos durante minha formação
      acadêmica e estudos em programação.
    </p>

    <div className="projectsGrid">

      {/* PROJETO BANCO DE DADOS */}
      <article className="projectCard">
        <div className="projectIcon">
          SQL
        </div>

        <h3>Banco de Dados de Clínica</h3>

        <p>
          Projeto de banco de dados desenvolvido para uma clínica,
          envolvendo modelagem de entidades, relacionamentos,
          organização das informações e consultas SQL.
        </p>

        <div className="tags">
          <span>SQL</span>
          <span>Banco de Dados</span>
          <span>MER</span>
          <span>3FN</span>
        </div>
      </article>

      {/* PROJETO SITE REACT */}
      <article className="projectCard">
        <div className="projectIcon">
          &lt;/&gt;
        </div>

        <h3>Projetos de Sites com React</h3>

        <p>
          Desenvolvimento de sites e interfaces utilizando React,
          JavaScript, HTML e CSS, trabalhando com componentes,
          organização de páginas e estilização responsiva.
        </p>

        <div className="tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </article>

      {/* PROJETO NEXT */}
      <article className="projectCard">
        <div className="projectIcon">
          NEXT
        </div>

        <h3>Aplicações Web com Next.js</h3>

        <p>
          Criação de aplicações web utilizando Next.js e React,
          explorando estrutura de páginas, componentes,
          estilização e desenvolvimento de interfaces.
        </p>

        <div className="tags">
          <span>Next.js</span>
          <span>React</span>
          <span>CSS</span>
        </div>
      </article>

      {/* JOGO DA FORCA */}
      <article className="projectCard featured">
        <div className="projectIcon">
          ?
        </div>

        <h3>Jogo da Forca</h3>

        <p>
          Jogo desenvolvido como projeto pessoal utilizando React.
          Possui palavras aleatórias, controle de tentativas,
          letras utilizadas, sistema de vitória e derrota e
          possibilidade de iniciar uma nova partida.
        </p>

        <div className="tags">
          <span>React</span>
          <span>Next.js</span>
          <span>JavaScript</span>
        </div>

        <Link href="/forca" className="projectButton">
          Jogar Forca →
        </Link>
      </article>
    </div>
  </section>

  {/* FORMAÇÃO */}
  <section id="formacao" className="section darkSection">
    <div className="sectionTitle">
      <span>04.</span>
      <h2>Formação e atividades</h2>
    </div>

    <div className="formationGrid">

      <div className="formationCard">
        <span className="cardNumber">01</span>

        <h3>Ciência da Computação</h3>

        <p>
          Graduação em andamento, com foco em programação,
          desenvolvimento de sistemas e tecnologia.
        </p>
      </div>

      <div className="formationCard">
        <span className="cardNumber">02</span>

        <h3>Desenvolvimento Web</h3>

        <p>
          Estudos e projetos utilizando React, Next.js, JavaScript,
          HTML e CSS.
        </p>
      </div>

      <div className="formationCard">
        <span className="cardNumber">03</span>

        <h3>Banco de Dados</h3>

        <p>
          Conhecimentos em modelagem de dados, relacionamentos,
          SQL, MER e normalização.
        </p>
      </div>

      <div className="formationCard">
        <span className="cardNumber">04</span>

        <h3>Programação</h3>

        <p>
          Experiência acadêmica com diferentes linguagens e
          conceitos de programação.
        </p>
      </div>

    </div>
  </section>

  {/* GALERIA */}
  <section className="section gallerySection">
    <div className="sectionTitle">
      <span>05.</span>
      <h2>Galeria de projetos</h2>
    </div>

    <p className="sectionDescription">
      Alguns dos trabalhos e projetos desenvolvidos.
    </p>

    <div className="gallery">

      <div className="galleryItem">
        <div className="galleryPlaceholder">
          <span>Banco de Dados</span>
        </div>
      </div>

      <div className="galleryItem">
        <div className="galleryPlaceholder">
          <span>Projeto React</span>
        </div>
      </div>

      <div className="galleryItem">
        <div className="galleryPlaceholder">
          <span>Projeto Next.js</span>
        </div>
      </div>

      <div className="galleryItem">
        <div className="galleryPlaceholder">
          <span>Jogo da Forca</span>
        </div>
      </div>

    </div>
  </section>

  {/* CONTATO */}
  <section id="contato" className="contactSection">
    <div className="contactContent">

      <span className="contactNumber">
        06.
      </span>

      <h2>Vamos conversar?</h2>

      <p>
        Estou aberto a oportunidades, projetos e experiências que
        possam contribuir para meu desenvolvimento na área de
        tecnologia.
      </p>

      <a
        href="mailto:seuemail@email.com"
        className="button primary"
      >
        Entrar em contato
      </a>

    </div>
  </section>

  {/* FOOTER */}
  <footer className="footer">
    <p>
      Desenvolvido por Lucas Hudson
    </p>

    <p>
      © 2026 Lucas Hudson
    </p>
  </footer>
</main>
  );
}
