## Atualizar o repositório local

Sempre comece o dia atualizando sua cópia local com o que já foi aprovado no GitHub:

```bash
git switch develop
git pull origin develop
```

## Criar sua branch de desenvolvimento

Crie uma branch própria para cada tarefa, a partir da develop atualizada:

```bash
git switch -c feature/RFxx-descricao-curta
```

Exemplo:

```bash
git switch -c feature/RF01-cadastro-usuario
```

## Fazer alterações e criar commits

Após editar os arquivos, registre suas mudanças com uma mensagem clara:

```bash
git add .
git commit -m "feat(RF01): cria tela de cadastro de usuário"
```

## Enviar sua branch para o GitHub

Como é uma branch nova, use -u na primeira vez:

```bash
git push -u origin feature/RF01-cadastro-usuario
```
Depois disso, o GitHub vai reconhecer essa branch

## Criar a Pull Request (PR)

No GitHub:

Vá em Pull requests → New pull request

Base: develop

Compare: feature/RF01-cadastro-usuario

Descreva o que foi feito no campo de texto e use o template de PR.
A PR será revisada e aprovada por @Ariane-Prado ou @VilelaGuilherme (Code Owners).

## Manter sua branch atualizada

Se alguém atualizou a develop enquanto você ainda estava desenvolvendo, sincronize assim:

```bash
git fetch origin
git rebase origin/develop
 ou, se preferir, git merge origin/develop
```

## Após a PR ser aprovada e mergeada

Quando sua PR for aceita, atualize sua develop local:

```bash
git switch develop
git pull origin develop
```

E delete a branch antiga (opcional):

```bash
git branch -d feature/RF01-cadastro-usuario
git push origin --delete feature/RF01-cadastro-usuario
```