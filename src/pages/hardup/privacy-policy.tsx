import React from 'react';
import Image from "next/image";

import bitmanImage from '../../assets/bitmen.jpg';

export default function Home() {

  return (
    <div className="max-w-[1440px] min-h-screen mx-auto flex flex-col items-stretch text-white">

      <div className="flex w-full h-[500px] items-center justify-center">
        <div className="max-w-7xl h-52 absolute -translate-x-6 -translate-y-6 md:-translate-x-16 md:-translate-y-16">
          <Image 
            src={bitmanImage}
            className="w-auto h-auto max-h-[150px] md:max-h-[290px] shadow-orange-300 shadow-2xl blur-md" 
            width={500} 
            height={500} 
            alt="bitman back image"
            quality={100} 
          />
        </div>

        <div className="max-w-7xl h-52 absolute translate-x-6 translate-y-12 md:translate-x-16 md:translate-y-16">
          <Image 
            src={bitmanImage}
            className="w-auto h-auto max-h-[150px] md:max-h-[290px] shadow-gray-300 shadow-2xl" 
            width={500} 
            height={500} 
            alt="bitman front image" 
            quality={100} 
          />
        </div>
      </div>

      <div className="p-5 m-2 leading-relaxed">
        <center><h1 className="text-2xl">Política de Privacidade</h1></center>

        <p className="text-right">Atualizada em: 19 de abril de 2016</p>
        <p className="text-lg mb-4">Bem-vindo à Bitmen Company.</p>

        <p className="mb-2">
          Ao estar usando nosso Web Site <a href="www.bitmen.com.br">bitmen.com.br</a> ou algum dos nosso jogos(HardUP) 
          tanto para Android ou para IOS, está sendo recolhido informações pessoais.
          Todas as suas informações pessoais recolhidas, serão usadas para o ajudar a tornar o uso do nosso site ou
          jogos o mais produtiva e agradável possível. 
          A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para o 
          Bitmen Company.
        </p>

        <p>Todas as informações pessoais relativas a membros, assinantes, clientes ou visitantes que usem os produtos Bitmen Company serão tratadas em concordância com a Lei da Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei n.º 67/98).</p>
        <p>A informação pessoal recolhida pode incluir o seu nome, seu endereço de e-mail (caso você tenha se conectado ao Facebook ou ao Google+), número de telefone e/ou celular, morada, data de nascimento e/ou outros.</p>
        <p>O uso de algum produto Bitmen Company pressupõe a aceitação deste Acordo de privacidade. A equipa do Bitmen Company reserva-se ao direito de alterar este acordo sem aviso prévio. Deste modo, recomendamos que consulte a nossa política de privacidade com regularidade de forma a estar sempre atualizado.</p>

        <h3>Jogos Mobile (iOS e Android)</h3>
        <p>Dentro de nossos jogos oferecemos recursos como Rank com os amigos e compartilhar record em redes sociais, para o funcionamento solicitamos login com sua conta do facebook e login com conta do Google para fins de salvamento de dados do jogo e conquistas.</p>

        <h3>Ligações a Sites de terceiros</h3>
        <p>O Bitmen Company possui ligações para outros sites, os quais, a nosso ver, podem conter informações / ferramentas úteis para os nossos visitantes. A nossa política de privacidade não é aplicada a sites de terceiros, pelo que, caso visite outro site a partir do nosso deverá ler a politica de privacidade do mesmo.</p>
        <p>Não nos responsabilizamos pela política de privacidade ou conteúdo presente nesses mesmos sites.</p>
      </div>
    </div>
  )
}