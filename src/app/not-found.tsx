import Link from "next/link";

export default function NotFound(){
  return (
    <section className="container">
      <h1 className="title">Página não encontrada</h1>
      <Link style={{marginBottom: '1rem', display: 'inline-block'}} href={'/'} className="button">Voltar para a home</Link>
    </section>
  )
}