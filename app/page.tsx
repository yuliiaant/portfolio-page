import Image from 'next/image'
import styles from './page.module.css'
import './page.scss'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { TechStack } from './components/TechStack/TechStack'
import { Projects } from './components/Projects/Projects'
import { Contacts } from './components/Contacts/Contacts'

export default function Home() {
  return (
    <main className='main' id='home'>
      <div className="page-container">
      <Header />
      <About />
      <TechStack />
      <Projects />
      <Contacts />
      </div>
    </main>
  )
}
