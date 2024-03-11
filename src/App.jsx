import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/samuelrobrodrigues.png',
      name: 'Samuel Roberto',
      role: 'Web developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz do zero, um dos meus primeiros projetos solo. O nome do projeto é Bernadelli 🚀',},
      { type: 'link', content: 'samuelRobRodrigues/Projeto-Bernadelli'},
    ],
    publishedAt: new Date('2024-02-22 20:02:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/marioxxf.png',
      name: 'Mario Luciano',
      role: 'Pleno @ Fiserv',
    },
    content: [
      { type: 'paragraph', content: 'Boa noite 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto. É um projeto que fiz de uma plataforma de filmes. O nome do projeto é Gioiaflix🚀',},
      { type: 'link', content: 'marioxxf/gioiaflix'},
    ],
    publishedAt: new Date('2024-03-09 16:48:00'),
  }
]; 
export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {posts.map(post => {
            return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

