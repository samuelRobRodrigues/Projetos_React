import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 123,
    author: {
      avatarUrl: 'https://github.com/samuelrobrodrigues.png',
      name: 'Samuel Robert',
      role: 'Web developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz do zero, um dos meus primeiros projetos solo. O nome do projeto é Bernadelli 🚀',},
      { type: 'link', content: 'samuelRobRodrigues/Projeto-Bernadelli'},
    ]
  }
]
export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}

