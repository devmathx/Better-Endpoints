  # _Better Endpoints_

Uma biblioteca TypeScript para simplificar o tratamento de respostas de API e lidar com erros HTTP personalizados. Ela fornece um decorator `ApiResponse` para formatar respostas de sucesso e erro de forma consistente, além de classes de erro específicas para cada código de status HTTP.

## Instalação

Para adicionar a biblioteca ao seu projeto:

```bash
npm install better-endpoints
# ou
yarn add better-endpoints
```

## Uso

### 1. Decorator @ApiResponse

O decorator `ApiResponse` facilita o tratamento de respostas de API ao definir um formato padrão para respostas de sucesso e capturar erros, retornando respostas consistentes.

```typescript
import { ApiResponse } from 'better-endpoints';

class ExampleController {
  @ApiResponse()
  async getData() {
    // Lógica do método que retorna dados
    return { id: 1, name: 'Exemplo' };
  }
}
```

Quando o método `getData` for executado com sucesso, ele retornará um objeto no formato:

```typescript
{
  "success": true,
  "status": 200,
  "message": { "id": 1, "name": "Exemplo" }
}
```

Em caso de erro, o `ApiResponse` captura o erro e retorna uma resposta padronizada.

### 2. Tratamento de Erros HTTP
A biblioteca fornece classes de erro específicas para status HTTP, permitindo lançar erros com mensagens e códigos de status predefinidos. Esses erros são capturados automaticamente pelo decorator `ApiResponse`.

Exemplo de uso:

```typescript
import { Error404, Error500 } from 'better-endpoints';

class ExampleController {
  @ApiResponse()
  async fetchResource(id: number) {
    if (!this.resourceExists(id)) {
      throw new Error404('Recurso não encontrado');
    }

    try {
      // Lógica de recuperação de recurso
      return { id, name: 'Recurso' };
    } catch (error) {
      throw new Error500('Erro interno no servidor');
    }
  }
}
```

Exemplo de erro:

```typescript
{
  "success": false,
  "status": 404,
  "message": "Recurso não encontrado"
}
```

### 3. Erros Disponíveis
A biblioteca inclui as seguintes classes de erro, que podem ser utilizadas para representar erros HTTP específicos:

- `Error400` - Requisição inválida
- `Error401` - Erro de autenticação
- `Error403` - Acesso negado
- `Error404` - Recurso não encontrado
- `Error409` - Conflito de dados
- `Error429` - Muitas requisições
- `Error500` - Erro interno no servidor
- `Error502` - Erro de gateway
- `Error503` - Serviço indisponível
- `Error504` - Tempo limite do gateway excedido

## Exemplo Completo

```typescript
import { ApiResponse, Error404, Error500 } from 'better-endpoints';

class ExampleController {

  @ApiResponse({ onSuccess: { status: 200 } })
  async getData(id: number) {
    if (!this.exists(id)) {
      throw new Error404('Recurso não encontrado');
    }

    return this.findData(id);
  }

  private findData(id: number) {
    try {
      return { id, name: 'Nome do Recurso' };
    } catch (error) {
      // O Erro pode ser lançado de qualquer lugar
      throw new Error500();
    }
  }
}
```

## Licença
MIT