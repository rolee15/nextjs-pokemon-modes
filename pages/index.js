/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { server } from "../config"

// This is Server-side Rendering (SSR)
//export async function getServerSideProps() {
// This is Static Site Generation (SSG)
export async function getStaticProps() {
  const resp = await fetch(`${server}/index.json`);

  return {
    props: {
      pokemon: await resp.json(),
    },
  };
}

export default function Home({ pokemon }) {
  // For client-side rendering, use state and effect
  // const [pokemon, setPokemon] = useState([]);

  // useEffect(() => {
  //   async function getPokemon() {
  //     // fetch here when client is rendering
  //     const resp = await fetch("/index.json");
  //     setPokemon(await resp.json());
  //   }
  //   getPokemon();
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <div className={styles.grid}>
        {pokemon.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <img src={`/${pokemon.image}`} alt={pokemon.name} />
                <h3>{pokemon.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
