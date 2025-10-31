# Guia de Clonagem e Fluxo Git — Sistema de Doações

Este documento descreve o procedimento para clonar o repositório, criar branches, registrar commits e enviar alterações seguindo o padrão de versionamento do projeto *Sistema de Doações*.

---

## 1. Clonar o repositório

**Caminho de destino recomendado:**  
```
Defina uma pasta/ local para ter repositorio locamente
```

### Passo a passo:
1. Abra o **Explorador de Arquivos** e vá até a pasta de destino.  
2. Clique com o **botão direito** dentro da pasta e selecione **“Git Bash Here”**.  
3. Execute o comando:

```bash
git clone https://github.com/Ariane-Prado/sistema-doacoes.git
```

4. Será criada uma nova pasta automaticamente:
```
Ex. de saida:
C:\Users\arian\OneDrive\Projetos\sistema-doacoes
```

5. Acesse a pasta:
```bash
cd sistema-doacoes
```

6. Verifique a conexão:
```bash
git remote -v
```
Saída esperada:
```
origin  https://github.com/Ariane-Prado/sistema-doacoes.git (fetch)
origin  https://github.com/Ariane-Prado/sistema-doacoes.git (push)
```

---

## 2. Estrutura de branches

| Branch | Função | Responsável |
|--------|--------|--------------|
| **main** | Contém o código estável e aprovado. Somente atualizada por Pull Request aprovado. | Gerente |
| **develop** | Integração e testes das sprints. | Todos os membros |
| **feature/RFxx-nome** | Desenvolvimento de uma funcionalidade específica. | Cada desenvolvedor |

### Criar uma nova branch:
```bash
git checkout develop
git pull
git checkout -b feature/RF01-cadastro-usuario
```

---

## 3. Commits (registro de alterações)

Os commits devem seguir um padrão de nomenclatura com o número do requisito (RF).

### Exemplos:
```bash
feat(RF02): cria tela de cadastro de item
fix(RF01): corrige validação de e-mail duplicado
docs(RF03): adiciona exemplo de upload de fotos
```

| Prefixo | Significado |
|----------|-------------|
| feat | Nova funcionalidade |
| fix | Correção de erro |
| docs | Documentação |
| refactor | Melhoria de código |
| chore | Tarefas de manutenção |
| test | Criação ou ajuste de testes |

---

## 4. Envio de alterações para o repositório remoto

### Passos:
```bash
git add .
git commit -m "feat(RF02): cria tela de cadastro de item"
git push origin feature/RF02-cadastro-usuario
```

Após o envio, abra um **Pull Request** no GitHub:
- De `feature/RF02-cadastro-usuario` para `develop`
- Utilize o template de PR, descrevendo alterações e checklist.

---

## 5. Atualização do código local

Antes de iniciar uma nova tarefa:
```bash
git checkout develop
git pull origin develop
```

---

## 6. Visualização de branches

- **Locais:**  
  ```bash
  git branch
  ```

- **Remotas (GitHub):**  
  ```bash
  git branch -r
  ```

- **Todas:**  
  ```bash
  git branch -a
  ```

Para atualizar a lista de branches:
```bash
git fetch --all
```

---

## 7. Comandos úteis

| Ação | Comando |
|------|----------|
| Exibir commits com autor | `git shortlog -sne` |
| Ver histórico resumido | `git log --oneline` |
| Ver branch atual | `git branch --show-current` |
| Trocar de branch | `git checkout nome-da-branch` |
| Excluir branch local | `git branch -d nome-da-branch` |

---

## 8. Boas práticas da equipe

- Ninguém deve fazer commit diretamente na **main**.  
- Todo Pull Request deve conter checklist preenchido.  
- Cada desenvolvedor deve registrar commits em todas as sprints.  
- As tarefas devem ser desenvolvidas em **branches próprias (feature/...)**.  
- O código deve ser atualizado antes de iniciar um novo desenvolvimento.  

---

Este guia deve ser seguido por todos os membros do time para manter o versionamento organizado e rastreável.
