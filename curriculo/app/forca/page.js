"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const palavras = [
"JAVASCRIPT",
"REACT",
"NEXTJS",
"PYTHON",
"PROGRAMACAO",
"COMPUTADOR",
"ALGORITMO",
"BANCO",
"DADOS",
"DESENVOLVIMENTO",
"TECNOLOGIA",
"INTERNET",
"SOFTWARE",
"HARDWARE",
"SERVIDOR",
"CODIGO",
"SISTEMA",
"APLICACAO",
"INTERFACE",
"COMPONENTE",
"PROGRAMA",
"ENGENHARIA",
"ALGORITMOS",
"ESTRUTURA",
"FUNCAO",
"VARIAVEL",
"OBJETO",
"CLASSE",
"GITHUB",
"FRONTEND",
"BACKEND",
"DATABASE",
"NETWORK",
"RASPPI",
"ARDUINO",
"PYTHON",
"JAVA",
"JAVASCRIPT",
"HTML",
"CSS",
];

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const MAX_ERROS = 6;

function escolherPalavra() {
const indice = Math.floor(Math.random() * palavras.length);
return palavras[indice];
}

export default function Forca() {
const [palavra, setPalavra] = useState("");
const [letrasUsadas, setLetrasUsadas] = useState([]);
const [erros, setErros] = useState(0);
const [jogoFinalizado, setJogoFinalizado] = useState(false);
const [venceu, setVenceu] = useState(false);

useEffect(() => {
iniciarJogo();
}, []);

useEffect(() => {
if (!palavra || jogoFinalizado) {
return;
}

```
const palavraCompleta = palavra
  .split("")
  .every((letra) => letrasUsadas.includes(letra));

if (palavraCompleta) {
  setVenceu(true);
  setJogoFinalizado(true);
}

if (erros >= MAX_ERROS) {
  setVenceu(false);
  setJogoFinalizado(true);
}
```

}, [letrasUsadas, erros, palavra, jogoFinalizado]);

useEffect(() => {
function lidarComTecla(event) {
const letra = event.key.toUpperCase();

  if (alfabeto.includes(letra)) {
    escolherLetra(letra);
  }
}

window.addEventListener("keydown", lidarComTecla);

return () => {
  window.removeEventListener("keydown", lidarComTecla);
};

});

function iniciarJogo() {
setPalavra(escolherPalavra());
setLetrasUsadas([]);
setErros(0);
setJogoFinalizado(false);
setVenceu(false);
}

function escolherLetra(letra) {
if (
jogoFinalizado ||
letrasUsadas.includes(letra)
) {
return;
}

```
const novasLetras = [...letrasUsadas, letra];

setLetrasUsadas(novasLetras);

if (!palavra.includes(letra)) {
  setErros((valorAtual) => valorAtual + 1);
}
```

}

function mostrarLetra(letra) {
if (letrasUsadas.includes(letra) || jogoFinalizado) {
return letra;
}

```
return "_";
```

}

function classeBotao(letra) {
if (!letrasUsadas.includes(letra)) {
return "";
}

```
if (palavra.includes(letra)) {
  return "correct";
}

return "wrong";
```

}

return ( <main className="forcaPage">

```
  {/* TOPO */}

  <header className="forcaHeader">
    <Link href="/" className="backButton">
      ← Voltar para o portfólio
    </Link>

    <div className="forcaLogo">
      Lucas<span>.dev</span>
    </div>
  </header>

  {/* CONTEÚDO */}

  <section className="forcaContainer">

    <div className="forcaTitle">

      <span className="forcaTag">
        PROJETO PESSOAL
      </span>

      <h1>
        Jogo da <span>Forca</span>
      </h1>

      <p>
        Teste seus conhecimentos de programação
        descobrindo a palavra escondida.
      </p>

    </div>

    <div className="game">

      {/* LADO ESQUERDO */}

      <div className="hangmanArea">

        <div className="hangman">

          {/* Base */}

          <div className="hangmanBase"></div>

          {/* Poste */}

          <div className="hangmanPole"></div>

          {/* Parte superior */}

          <div className="hangmanTop"></div>

          {/* Corda */}

          <div className="hangmanRope"></div>

          {/* Cabeça */}

          {erros >= 1 && (
            <div className="hangmanHead"></div>
          )}

          {/* Corpo */}

          {erros >= 2 && (
            <div className="hangmanBody"></div>
          )}

          {/* Braço esquerdo */}

          {erros >= 3 && (
            <div className="hangmanArmLeft"></div>
          )}

          {/* Braço direito */}

          {erros >= 4 && (
            <div className="hangmanArmRight"></div>
          )}

          {/* Perna esquerda */}

          {erros >= 5 && (
            <div className="hangmanLegLeft"></div>
          )}

          {/* Perna direita */}

          {erros >= 6 && (
            <div className="hangmanLegRight"></div>
          )}

        </div>

        <div className="attempts">

          <span>TENTATIVAS RESTANTES</span>

          <strong>
            {MAX_ERROS - erros}
          </strong>

        </div>

      </div>

      {/* LADO DIREITO */}

      <div className="gameArea">

        <div className="wordArea">

          <span className="wordLabel">
            PALAVRA
          </span>

          <div className="word">

            {palavra
              .split("")
              .map((letra, index) => (
                <span
                  key={`${letra}-${index}`}
                  className={
                    letrasUsadas.includes(letra)
                      ? "letter revealed"
                      : "letter"
                  }
                >
                  {mostrarLetra(letra)}
                </span>
              ))}

          </div>

        </div>

        <div className="usedLetters">

          <span>
            LETRAS TENTADAS
          </span>

          <div className="usedList">

            {letrasUsadas.length === 0 ? (
              <p>Nenhuma letra ainda</p>
            ) : (
              letrasUsadas.map((letra) => (
                <span
                  key={letra}
                  className={
                    palavra.includes(letra)
                      ? "usedCorrect"
                      : "usedWrong"
                  }
                >
                  {letra}
                </span>
              ))
            )}

          </div>

        </div>

        <div className="keyboard">

          {alfabeto.map((letra) => (
            <button
              key={letra}
              onClick={() => escolherLetra(letra)}
              disabled={
                letrasUsadas.includes(letra) ||
                jogoFinalizado
              }
              className={classeBotao(letra)}
            >
              {letra}
            </button>
          ))}

        </div>

        <p className="keyboardHint">
          Você também pode utilizar o teclado do computador.
        </p>

      </div>

    </div>

    {/* RESULTADO */}

    {jogoFinalizado && (
      <div
        className={
          venceu
            ? "result win"
            : "result lose"
        }
      >

        <div className="resultIcon">
          {venceu ? "✓" : "×"}
        </div>

        <div>

          <h2>
            {venceu
              ? "Parabéns! Você venceu!"
              : "Fim de jogo!"}
          </h2>

          <p>
            {venceu
              ? "Você conseguiu descobrir a palavra."
              : "Você não conseguiu descobrir a palavra."}
          </p>

          <strong>
            A palavra era: {palavra}
          </strong>

        </div>

      </div>
    )}

    {/* BOTÃO REINICIAR */}

    <button
      className="restartButton"
      onClick={iniciarJogo}
    >
      ↻ Reiniciar jogo
    </button>

  </section>

  <footer className="forcaFooter">
    Jogo da Forca • Desenvolvido por Lucas Hudson
  </footer>

  <style jsx>{`

    .forcaPage {
      min-height: 100vh;
      background:
        radial-gradient(
          circle at top,
          rgba(0, 229, 255, 0.08),
          transparent 40%
        ),
        #070b14;

      color: #f4f7fb;
    }

    .forcaHeader {
      height: 75px;

      padding: 0 30px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      border-bottom: 1px solid rgba(255,255,255,0.09);

      background: rgba(7,11,20,0.85);

      backdrop-filter: blur(15px);
    }

    .backButton {
      color: #9ca9bd;

      font-size: 14px;

      transition: 0.3s;
    }

    .backButton:hover {
      color: #00e5ff;
    }

    .forcaLogo {
      color: #f4f7fb;

      font-family: "Space Grotesk", sans-serif;

      font-weight: 700;

      font-size: 20px;
    }

    .forcaLogo span {
      color: #00e5ff;
    }

    .forcaContainer {
      max-width: 1150px;

      margin: auto;

      padding: 70px 30px 100px;
    }

    .forcaTitle {
      text-align: center;

      margin-bottom: 50px;
    }

    .forcaTag {
      color: #00e5ff;

      font-size: 12px;

      font-weight: 700;

      letter-spacing: 3px;
    }

    .forcaTitle h1 {
      margin-top: 12px;

      font-family: "Space Grotesk", sans-serif;

      font-size: clamp(45px, 7vw, 70px);

      line-height: 1;
    }

    .forcaTitle h1 span {
      color: #00e5ff;
    }

    .forcaTitle p {
      max-width: 550px;

      margin: 20px auto 0;

      color: #9ca9bd;
    }

    .game {
      display: grid;

      grid-template-columns: 0.9fr 1.1fr;

      gap: 30px;
    }

    .hangmanArea,
    .gameArea {
      background: #111827;

      border: 1px solid rgba(255,255,255,0.09);

      border-radius: 15px;

      padding: 35px;
    }

    .hangmanArea {
      display: flex;

      flex-direction: column;

      align-items: center;

      justify-content: space-between;
    }

    .hangman {
      position: relative;

      width: 280px;
      height: 330px;

      margin-top: 10px;
    }

    .hangmanBase {
      position: absolute;

      bottom: 15px;
      left: 20px;

      width: 220px;
      height: 8px;

      background: #00e5ff;

      border-radius: 10px;
    }

    .hangmanPole {
      position: absolute;

      bottom: 20px;
      left: 55px;

      width: 8px;
      height: 270px;

      background: #00e5ff;

      border-radius: 10px;
    }

    .hangmanTop {
      position: absolute;

      top: 35px;
      left: 55px;

      width: 150px;
      height: 8px;

      background: #00e5ff;

      border-radius: 10px;
    }

    .hangmanRope {
      position: absolute;

      top: 40px;
      right: 70px;

      width: 5px;
      height: 45px;

      background: #00e5ff;
    }

    .hangmanHead {
      position: absolute;

      top: 82px;
      right: 42px;

      width: 62px;
      height: 62px;

      border: 5px solid #f4f7fb;

      border-radius: 50%;
    }

    .hangmanBody {
      position: absolute;

      top: 144px;
      right: 70px;

      width: 5px;
      height: 85px;

      background: #f4f7fb;
    }

    .hangmanArmLeft,
    .hangmanArmRight {
      position: absolute;

      top: 155px;

      width: 65px;
      height: 5px;

      background: #f4f7fb;
    }

    .hangmanArmLeft {
      right: 72px;

      transform: rotate(35deg);

      transform-origin: right;
    }

    .hangmanArmRight {
      right: 8px;

      transform: rotate(-35deg);

      transform-origin: left;
    }

    .hangmanLegLeft,
    .hangmanLegRight {
      position: absolute;

      top: 220px;

      width: 70px;
      height: 5px;

      background: #f4f7fb;
    }

    .hangmanLegLeft {
      right: 70px;

      transform: rotate(-50deg);

      transform-origin: right;
    }

    .hangmanLegRight {
      right: 5px;

      transform: rotate(50deg);

      transform-origin: left;
    }

    .attempts {
      width: 100%;

      display: flex;

      justify-content: space-between;

      align-items: center;

      padding: 18px;

      border-radius: 10px;

      background: #0b101b;
    }

    .attempts span {
      color: #9ca9bd;

      font-size: 11px;

      letter-spacing: 1px;
    }

    .attempts strong {
      color: #00e5ff;

      font-size: 25px;
    }

    .wordArea {
      text-align: center;

      padding-bottom: 30px;

      border-bottom: 1px solid rgba(255,255,255,0.08);
    }

    .wordLabel,
    .usedLetters > span {
      color: #00e5ff;

      font-size: 11px;

      font-weight: 700;

      letter-spacing: 2px;
    }

    .word {
      display: flex;

      justify-content: center;

      flex-wrap: wrap;

      gap: 10px;

      margin-top: 25px;
    }

    .letter {
      width: 38px;
      height: 50px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-bottom: 3px solid #4a566b;

      color: #9ca9bd;

      font-family: "Space Grotesk", sans-serif;

      font-size: 25px;
    }

    .letter.revealed {
      color: #00e5ff;

      border-color: #00e5ff;
    }

    .usedLetters {
      margin-top: 25px;
    }

    .usedList {
      min-height: 40px;

      display: flex;

      flex-wrap: wrap;

      align-items: center;

      gap: 7px;

      margin-top: 12px;
    }

    .usedList p {
      color: #657186;

      font-size: 13px;
    }

    .usedCorrect,
    .usedWrong {
      width: 30px;
      height: 30px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-radius: 5px;

      font-size: 12px;
      font-weight: 700;
    }

    .usedCorrect {
      color: #00e5ff;

      background: rgba(0,229,255,0.08);

      border: 1px solid rgba(0,229,255,0.2);
    }

    .usedWrong {
      color: #ff6675;

      background: rgba(255,70,90,0.08);

      border: 1px solid rgba(255,70,90,0.2);
    }

    .keyboard {
      display: grid;

      grid-template-columns: repeat(7, 1fr);

      gap: 8px;

      margin-top: 30px;
    }

    .keyboard button {
      height: 42px;

      border: 1px solid rgba(255,255,255,0.1);

      border-radius: 6px;

      background: #0b101b;

      color: #f4f7fb;

      font-weight: 600;

      cursor: pointer;

      transition: 0.2s;
    }

    .keyboard button:hover:not(:disabled) {
      border-color: #00e5ff;

      color: #00e5ff;

      transform: translateY(-2px);
    }

    .keyboard button:disabled {
      cursor: not-allowed;

      opacity: 0.8;
    }

    .keyboard button.correct {
      background: rgba(0,229,255,0.12);

      border-color: rgba(0,229,255,0.4);

      color: #00e5ff;
    }

    .keyboard button.wrong {
      background: rgba(255,70,90,0.1);

      border-color: rgba(255,70,90,0.3);

      color: #ff6675;
    }

    .keyboardHint {
      margin-top: 20px;

      color: #657186;

      text-align: center;

      font-size: 12px;
    }

    .result {
      margin-top: 30px;

      padding: 25px;

      display: flex;

      align-items: center;

      gap: 20px;

      border-radius: 12px;

      border: 1px solid rgba(255,255,255,0.08);
    }

    .result.win {
      background: rgba(0,229,255,0.06);

      border-color: rgba(0,229,255,0.25);
    }

    .result.lose {
      background: rgba(255,70,90,0.06);

      border-color: rgba(255,70,90,0.25);
    }

    .resultIcon {
      width: 55px;
      height: 55px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background: rgba(255,255,255,0.05);

      font-size: 25px;
    }

    .result h2 {
      font-family: "Space Grotesk", sans-serif;

      margin-bottom: 3px;
    }

    .result p {
      color: #9ca9bd;

      font-size: 14px;
    }

    .result strong {
      display: block;

      margin-top: 5px;

      color: #00e5ff;
    }

    .restartButton {
      display: block;

      margin: 30px auto 0;

      padding: 13px 25px;

      border: 1px solid #00e5ff;

      border-radius: 7px;

      background: transparent;

      color: #00e5ff;

      font-size: 14px;

      font-weight: 600;

      cursor: pointer;

      transition: 0.3s;
    }

    .restartButton:hover {
      background: #00e5ff;

      color: #071018;

      transform: translateY(-3px);
    }

    .forcaFooter {
      padding: 25px;

      text-align: center;

      border-top: 1px solid rgba(255,255,255,0.08);

      color: #657186;

      font-size: 12px;
    }

    @media (max-width: 850px) {

      .game {
        grid-template-columns: 1fr;
      }

      .hangmanArea {
        min-height: 450px;
      }

    }

    @media (max-width: 500px) {

      .forcaHeader {
        padding: 0 20px;
      }

      .forcaContainer {
        padding: 50px 15px;
      }

      .hangmanArea,
      .gameArea {
        padding: 20px;
      }

      .keyboard {
        grid-template-columns: repeat(6, 1fr);
      }

      .letter {
        width: 30px;
      }

    }

  `}</style>

</main>
);
}