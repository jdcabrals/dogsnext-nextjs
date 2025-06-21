import LoginResetarForm from "@/components/login/login-resetar-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Perdeu a senha | Dogs',
  description: 'Recupere a sua senha',
}

type ResetarSearchParams = {
  searchParams: {
    key: string
    login: string
  }
}

export default async function PerdeuPage({searchParams}: ResetarSearchParams){
  return(
  <div className="animeLeft">
    <h1 className="title">Resete a Senha</h1>
    <LoginResetarForm keyToken={searchParams.key} login={searchParams.login} />
  </div> 
  )
}