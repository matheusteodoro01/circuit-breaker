# Circuit Breaker com Node.js

Este repositório contém um exemplo de implementação do padrão Circuit Breaker em uma aplicação Node.js utilizando a biblioteca `opossum`. O objetivo é demonstrar como aumentar a resiliência e a estabilidade de sistemas distribuídos.

## Visão Geral

O padrão Circuit Breaker ajuda a proteger sua aplicação de falhas em chamadas de serviço, limitando o impacto de falhas repetidas e permitindo a recuperação automática quando os serviços externos retornam ao normal.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/circuit-breaker-nodejs.git
   cd circuit-breaker-nodejs
   Instale as dependências do projeto em cada aplicativo:
   ```

```bash
cd order
npm install
```

```bash
cd ../payment
npm install
```

## Uso

Existem dois aplicativos para teste: Order e Payment.

Execute o aplicativo Order:

```bash
cd order
npm start
```

O servidor estará rodando em http://localhost:3000.

Execute o aplicativo Payment:

```bash
bash
cd payment
npm start
```

O servidor estará rodando em http://localhost:4000.

O aplicativo Order faz requests para o aplicativo Payment. Você pode testar a funcionalidade do Circuit Breaker acessando os seguintes endpoints:

/orders: Endpoint que simula a criação de um pedido no serviço Order e faz uma chamada à API de Payments para processá-lo.
/payments: Endpoint que simula o processamento de um pagamento no serviço Payment.

Para testar o endpoint /orders, você pode usar o seguinte comando curl:

```bash
curl --location --request POST 'http://localhost:3000/orders'
```

## Personalização

Você pode ajustar a configuração do Circuit Breaker no app order de acordo com as necessidades da sua aplicação. Os principais parâmetros são:

timeout: Tempo máximo de espera para uma resposta do serviço externo.
errorThresholdPercentage: Percentual de erros necessário para abrir o Circuit Breaker.
resetTimeout: Tempo de espera antes de tentar reabrir o Circuit Breaker.

## Recursos

Documentação da biblioteca Opossum: https://www.npmjs.com/package/opossum
Tutorial do YouTube: https://youtu.be/vZ5ngiHQg8I

# Autor

<a href="https://github.com/matheusteodoro01/">
 <img src="https://avatars.githubusercontent.com/u/60862196?v=4" width="70px;" alt=""/>
 <br />
 <sub><b>Matheus Teodoro</b></sub>
</a>

Feito com ❤️ por Matheus Teodoro :wave::wave: Entre em contato!🚀

<a href="https://www.linkedin.com/in/matheus-teodoro-7bb92818a/">
</a>
