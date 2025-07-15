import React from 'react';
import Image from "next/image";

import AppImage from '../../assets/yoteiball_capa.png';

export default function Home() {

  return (
    <div className="max-w-[1440px] min-h-screen mx-auto flex flex-col items-stretch text-white">

      <div className="flex w-full h-[500px] items-center justify-center">
        <div className="max-w-7xl h-52 absolute -translate-x-6 -translate-y-6 md:-translate-x-16 md:-translate-y-16">
          <Image
            src={AppImage}
            className="w-auto h-auto max-h-[150px] md:max-h-[290px] shadow-gray-600 shadow-2xl blur-md"
            width={500}
            height={500}
            alt="yoteiball back image"
            quality={100}
          />
        </div>

        <div className="max-w-7xl h-52 absolute translate-x-6 translate-y-12 md:translate-x-16 md:translate-y-16">
          <Image
            src={AppImage}
            className="w-auto h-auto max-h-[150px] md:max-h-[290px] shadow-gray-600 shadow-2xl"
            width={500}
            height={500}
            alt="yoteiball front image"
            quality={100}
          />
        </div>
      </div>

      <div className="p-5 m-2 leading-relaxed">
        <center><h1 className="text-2xl">Política de Privacidade</h1></center>

        <p className="text-right">Atualizada em: 15 de julho de 2025</p>
        <p className="text-lg mb-4">Bem-vindo ao Yoteiball!</p>

        <p className="mb-2">
          Ao usar o aplicativo Yoteiball, você concorda com a coleta e uso de informações
          de acordo com esta política. Esta Política de Privacidade descreve como suas
          informações pessoais são coletadas, usadas e compartilhadas quando você usa nosso
          aplicativo. A segurança e a confidencialidade dos seus dados são de extrema
          importância para nós.
        </p>

        <p>
          As informações pessoais coletadas podem incluir seu nome, endereço de e-mail e foto
          de perfil, obtidos através da sua conta Google quando você opta por criar ou fazer login.
          Essas informações são usadas para personalizar sua experiência, permitir a criação
          e participação em grupos esportivos e gerenciar eventos.
        </p>
        <p>
          O uso do aplicativo Yoteiball pressupõe a aceitação desta Política de Privacidade.
          Reservamo-nos o direito de alterar esta política a qualquer momento sem aviso prévio.
          Recomendamos que você a revise regularmente para se manter atualizado.
        </p>

        <h3>Coleta de Dados</h3>
        <p>
          Quando você cria uma conta no Yoteiball usando sua conta Google, coletamos seu
          endereço de e-mail, nome de perfil e foto de perfil. Essas informações são essenciais
          para identificar você no aplicativo, permitir sua interação em grupos e eventos,
          e para fins de comunicação, se necessário. Não coletamos outras informações
          pessoais além das fornecidas pelo Google para o processo de login e as que você
          voluntariamente adiciona ao seu perfil dentro do aplicativo.
        </p>

        <h3>Uso dos Dados</h3>
        <p>
          As informações coletadas são usadas exclusivamente para os seguintes propósitos:
          gerenciamento da sua conta, personalização da sua experiência no aplicativo,
          criação e participação em grupos e eventos esportivos, e para melhorar
          continuamente os serviços do Yoteiball. Não compartilhamos, vendemos ou alugamos
          suas informações pessoais com terceiros para fins de marketing.
        </p>

        <h3>Serviços de Terceiros</h3>
        <p>
          O Yoteiball utiliza o serviço de autenticação do Google para facilitar o
          login. Ao usar este serviço, você está sujeito à política de privacidade
          do Google. Não nos responsabilizamos pelas práticas de privacidade ou conteúdo
          de sites ou serviços de terceiros.
        </p>

        <h3>Segurança dos Dados</h3>
        <p>
          Empregamos medidas de segurança razoáveis para proteger suas informações pessoais
          contra acesso não autorizado, alteração, divulgação ou destruição. No entanto,
          nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100%
          seguro, e não podemos garantir segurança absoluta.
        </p>

        <h3>Seus Direitos</h3>
        <p>
          Você tem o direito de acessar, corrigir ou excluir suas informações pessoais
          a qualquer momento. Você pode fazer isso gerenciando as configurações da sua
          conta no aplicativo ou entrando em contato conosco.
        </p>
      </div>
    </div>
  )
}