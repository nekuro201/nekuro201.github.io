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
        <center><h1 className="text-2xl">Termos de Serviço</h1></center>

        <p className="text-right">Atualizado em: 15 de julho de 2025</p>
        <p className="text-lg mb-4">Bem-vindo ao Yoteiball!</p>

        <p className="mb-2">
          Estes Termos de Serviço {`("Termos")`} regem o uso do aplicativo Yoteiball
          {`("Serviço")`}, fornecido por [Seu Nome/Nome da Empresa] {`("Nós", "Nosso", "Nossa")`}.
          Ao acessar ou usar o Serviço, você concorda em cumprir e estar vinculado a
          estes Termos. Se você não concordar com qualquer parte dos termos, não
          poderá acessar o Serviço.
        </p>

        <h3>1. Uso do Serviço</h3>
        <p>
          O Yoteiball é um aplicativo que permite aos usuários criar contas através do Google,
          entrar em grupos de esporte, visualizar e participar de eventos esportivos.
          Você deve ter pelo menos 13 anos de idade para usar este Serviço, ou a idade
          mínima exigida pela legislação do seu país para consentimento parental.
        </p>

        <h3>2. Conta de Usuário</h3>
        <p>
          Para usar o Yoteiball, você precisará criar uma conta usando seu login do Google.
          Você é responsável por manter a confidencialidade da sua conta Google e por
          todas as atividades que ocorrem sob sua conta. Você concorda em nos notificar
          imediatamente sobre qualquer uso não autorizado da sua conta.
        </p>

        <h3>3. Conteúdo do Usuário</h3>
        <p>
          Você é o único responsável por qualquer conteúdo que você publica, transmite
          ou compartilha através do Serviço, incluindo informações em seu perfil,
          publicações em grupos e informações sobre eventos. Você concorda em não publicar
          qualquer conteúdo que seja ilegal, difamatório, obsceno, ameaçador, invasivo da
          privacidade, ou que viole direitos de propriedade intelectual.
        </p>

        <h3>4. Conduta do Usuário</h3>
        <p>
          Você concorda em usar o Yoteiball de forma responsável e respeitosa. É proibido:
          (a) usar o Serviço para qualquer propósito ilegal ou não autorizado;
          (b) interferir ou perturbar a integridade ou desempenho do Serviço;
          (c) tentar obter acesso não autorizado a sistemas ou redes conectadas ao Serviço;
          (d) personificar qualquer pessoa ou entidade.
        </p>

        <h3>5. Propriedade Intelectual</h3>
        <p>
          O Serviço e seu conteúdo original, recursos e funcionalidades são e
          permanecerão propriedade exclusiva de [Seu Nome/Nome da Empresa].
          Você não pode reproduzir, distribuir, modificar, criar obras derivadas de,
          exibir publicamente, executar publicamente, republicar, baixar, armazenar ou
          transmitir qualquer material do nosso Serviço, exceto conforme permitido
          por estes Termos.
        </p>

        <h3>6. Rescisão</h3>
        <p>
          Podemos rescindir ou suspender seu acesso ao nosso Serviço imediatamente,
          sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo,
          sem limitação, se você violar estes Termos.
        </p>

        <h3>7. Limitação de Responsabilidade</h3>
        <p>
          Em nenhuma circunstância [Seu Nome/Nome da Empresa], nem seus diretores,
          funcionários, parceiros, agentes, fornecedores ou afiliados, serão
          responsáveis por quaisquer danos indiretos, incidentais, especiais,
          consequenciais ou punitivos, incluindo, sem limitação, perda de lucros,
          dados, uso, boa vontade ou outras perdas intangíveis, resultantes de (i) seu
          acesso ou uso ou incapacidade de acessar ou usar o Serviço; (ii) qualquer
          conduta ou conteúdo de terceiros no Serviço; (iii) qualquer conteúdo obtido
          do Serviço; e (iv) acesso não autorizado, uso ou alteração de suas
          transmissões ou conteúdo, seja com base em garantia, contrato,
          ato ilícito (incluindo negligência) ou qualquer outra teoria legal,
          tenhamos ou não sido informados da possibilidade de tais danos,
          e mesmo que um recurso aqui estabelecido falhe em seu propósito essencial.
        </p>

        <h3>8. Alterações nos Termos</h3>
        <p>
          Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou
          substituir estes Termos a qualquer momento. Se uma revisão for material,
          faremos esforços razoáveis para fornecer pelo menos 30 dias de aviso prévio
          antes que quaisquer novos termos entrem em vigor. O que constitui uma
          alteração material será determinado a nosso exclusivo critério.
        </p>

        <h3>9. Contato</h3>
        <p>
          Se você tiver alguma dúvida sobre esta Política de Privacidade ou Termos de Serviço,
          entre em contato conosco através do [Seu Email de Contato ou Formulário de Contato].
        </p>
      </div>
    </div>
  )
}