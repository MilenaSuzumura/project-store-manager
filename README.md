# Store Manager
Store Manager é um projeto focado em criar, exibir, atualizar e excluir produtos e vendas utilizando a arquitetura MSC(model-service-controller).

OBS: ESSE PROJETO FOI DESENVOLVIDO NA TRYBE.

## Técnologias usadas

### Back-end:
Desenvolvido usando: MYSQL, JavaScript, MSC, TDD ou/e Docker.

<details>
  <summary><strong>Instalando Dependências</strong></summary>
  
  ### Backend
  
  <details>
    <summary><strong>Executando com Docker:</strong></summary>
  
    ```bash
    docker-compose up -d
    ```
  
    OBS: VERIFIQUE SE NÃO EXISTE CONTAINERS ATIVOS UTILIZANDO A PORTA 3000.
  
  ##### Para rodar o Container:
  > Opção 1: Use o comando `docker-compose run node npm test` para rodar os testes com Docker.
  > Opção 2: Use o comando `docker exec -it store_manager bash` para acessar o Container.

</details>

<details>
  <summary><strong>Executando sem Docker:</strong></summary>

```bash
npm install
``` 

Renomeie o arquivo `.env.exemple` para `.env` e configure-o para sua máquina.
</details>
</details>

## Executando aplicação

* Para rodar o back-end:

  ```
  cd api/ && npm start
  ```

## Executando Testes

* Para rodar todos os testes:

  ```
    npm test
  ```