import React from "react"

import Layout from "../components/layout"

export const queryImage = graphql`
query {
   
    robo: file(relativePath: { eq: "robo.png" }) {
        childImageSharp {
            fixed(width: 128, height: 128) {
                ...GatsbyImageSharpFixed
            }
        }
    }
}
    
`;


const RoboPage = ({ data }) => (
  <Layout>
      <section className="section">
        <h1 className="title has-text-centered has-text-light">Compiladores</h1>
        <hr />
        <h1 className="mt-10 title has-text-light">Resumo</h1>
        <p className="">A linguagem Python funciona através da compilação e interpretação de bytecode em uma máquina virtual Python (Python Virtual Machine ou apenas VM neste artigo). Esta VM é baseada em uma máquina de pilha, as operações dos bytecodes (os opcodes) envolvem a manipulação (push/empurra e pop/retira) de elementos nessa pilha.</p>
        <p style={{ marginTop: '10px' }}>O CPython não é o único Python existente, é possível encontrar outras implementações de Python, como Jython, Stackless Python ou PyPy e estes podem utilizar mecanismos diferente de interpretação na VM.</p>
        
        <p style={{ marginTop: '10px' }}>Por exemplo, algumas implementações de VM Python utilizam registradores, ao invés da manipulação direta de pilha.</p>
        
        <p style={{ marginTop: '10px' }}> Os bytecodes Python são a forma mais de baixo-nível que o código fonte em Python pode ser traduzido. Para saber quais são eles, pode-se utilizar o módulo opcode. O módulo dis permite reconstruir o nome das instruções a partir dos bytecodes.</p>


        <h1 className="mt-10 title has-text-light">Objetivo geral</h1>
        <p className="">Mostrar através da linguagem Python o conceito de Compiladores e Multimídia uma ferramenta para automação de uma grande empresa de mídia social chamada Instagram. Através de bibliotecas e comandos, estaremos abordando pontos específicos da linguagem que são bastante utilizadas por muitos desenvolvedores para simular um comportamento humano dentro de uma plataforma digital.</p>

        <h1 className="mt-10 title has-text-light">Motivação</h1>
        <p style={{ marginBottom: '50px' }} className="">Foi identificado uma oportunidade para comercializar o robô no mercado de mídias sociais. Com a crescente alta dos usuários do instagram querendo monetizar o perfil através de seguidores. Foi avaliado que o robô pode resolver essa for, automatizando as interações dos usuários, e aumentando o número de seguidores.</p>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a style={{ fontWeight: 'bold' }} 
        href="https://roboinstagram.netlify.app/"
        className="has-text-light">Confira como fazer a instalação do Robo Instagram !!!</a>


        <a style={{ fontWeight: 'bold' }} 
        href="https://www.digitalocean.com/community/tutorials/how-to-install-python-3-and-set-up-a-programming-environment-on-ubuntu-18-04-quickstart"
        className="has-text-light">Documentação !!!</a>

        </div>
      </section>


  </Layout>
)

export default RoboPage
