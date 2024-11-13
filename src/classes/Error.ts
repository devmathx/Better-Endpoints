import { CustomApiError } from "./CustomApiError";

export class Error400 extends CustomApiError {
  constructor(message?: string) {
    super(400, message || 'Requisição inválida');
  }
}

export class Error401 extends CustomApiError {
  constructor(message?: string) {
    super(401, message || 'Erro de autenticação');
  }
}

export class Error403 extends CustomApiError {
  constructor(message?: string) {
    super(403, message || 'Acesso negado');
  }
}

export class Error404 extends CustomApiError {
  constructor(message?: string) {
    super(404, message || 'Recurso não encontrado');
  }
}

export class Error409 extends CustomApiError {
  constructor(message?: string) {
    super(409, message || 'Conflito de dados');
  }
}

export class Error429 extends CustomApiError {
  constructor(message?: string) {
    super(429, message || 'Muitas requisições. Tente novamente mais tarde');
  }
}

export class Error500 extends CustomApiError {
  constructor(message?: string) {
    super(500, message || 'Erro interno no servidor');
  }
}

export class Error502 extends CustomApiError {
  constructor(message?: string) {
    super(502, message || 'Erro de gateway');
  }
}

export class Error503 extends CustomApiError {
  constructor(message?: string) {
    super(503, message || 'Serviço indisponível');
  }
}

export class Error504 extends CustomApiError {
  constructor(message?: string) {
    super(504, message || 'Tempo limite do gateway excedido');
  }
}
