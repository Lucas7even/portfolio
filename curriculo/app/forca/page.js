"use client";

import { useEffect, useState } from "react";

const palavras = [
  "JAVASCRIPT",
  "REACT",
  "PYTHON",
  "COMPUTADOR",
  "ALGORITMO",
  "PROGRAMACAO",
  "TECNOLOGIA",
  "INTERNET",
  "SOFTWARE",
  "HARDWARE",
  "SERVIDOR",
  "CODIGO",
  "SISTEMA",
  "APLICACAO",
  "INTERFACE",
  "GITHUB",
  "FRONTEND",
  "BACKEND",
  "ARDUINO",
  "JAVA",
];

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Forca() {
  const [palavra, setPalavra] = useState("");
  const [tentativas, setTentativas] = useState([]);
  const [erros, setErros] = useState(0);
  const [fim, setFim] = useState(false);
  const [venceu, setVenceu] = useState(false);

  // Escolhe uma palavra quando a página carrega
  useEffect(() => {
    novaPartida();
  }, []);

  // Verifica vitória ou derrota
  useEffect(() => {
    if (!palavra || fim) return;

    const ganhou = palavra
      .split("")
      .every((letra) => tentativas.includes(letra));

    if (ganhou) {
      setVenceu(true);
      setFim(true);
    }

    if (erros >= 6) {
      setVenceu(false);
      setFim(true);
    }
  }, [tentativas, erros, palavra, fim]);

  function novaPartida() {
    const palavraAleatoria =
      palavras[Math.floor(Math.random() * palavras.length)];

    setPalavra(palavraAleatoria);
    setTentativas([]);
    setErros(0);
    setFim(false);
    setVenceu(false);
  }

  function escolherLetra(letra) {
    if (tentativas.includes(letra) || fim) {
      return;
    }

    setTentativas([...tentativas, letra]);

    if (!palavra.includes(letra)) {
      setErros(erros + 1);
    }
  }

  if (!palavra) {
    return <main className="forca">Carregando...</main>;
  }

  return (
    <main className="forca">
      <h1>Jogo da Forca</h1>

      <p className="erros">
        Erros: {erros} / 6
      </p>

      <div className="palavra">
        {palavra.split("").map((letra, index) => (
          <span key={index}>
            {tentativas.includes(letra) ? letra : "_"}
          </span>
        ))}
      </div>

      <div className="teclado">
        {letras.map((letra) => (
          <button
            key={letra}
            onClick={() => escolherLetra(letra)}
            disabled={tentativas.includes(letra) || fim}
          >
            {letra}
          </button>
        ))}
      </div>

      {fim && (
        <div className="resultado">
          {venceu ? (
            <h2>Você venceu!</h2>
          ) : (
            <h2>Você perdeu!</h2>
          )}

          <p>
            A palavra era: <strong>{palavra}</strong>
          </p>

          <button onClick={novaPartida} className="novoJogo">
            Jogar novamente
          </button>
        </div>
      )}
    </main>
  );
}