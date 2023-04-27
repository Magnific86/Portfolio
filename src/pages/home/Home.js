import { Header } from "../../components"
import { Contact, About, ProjectPage } from ".."

function Home() {
  return (
    <>
      <Header />
      <section className="section-about">
        <About />
      </section>
      <ProjectPage />
      <Contact />
    </>
  )
}

export default Home
