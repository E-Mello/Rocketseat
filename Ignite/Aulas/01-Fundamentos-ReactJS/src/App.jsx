// JSX = JavaScript + XML
import {Post} from './components/Post';
import { Header} from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css'
import styles from './App.module.css'

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/E-Mello.png',
        name: 'Edio Mello',
        role: 'Student E-Games'
      },
      content: [
      { type: 'paragraph', content: 'Eae Gente! 🧑🏽‍💻'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elementum.'},
      { type: 'link', content: 'mello.design/doctorcare'}
    ],
    publishedAt: new Date('2022-07-03 20:17:00'),
  }, 
];

export function App() {
    return (
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
            <main>
                {posts.map(post =>{
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
