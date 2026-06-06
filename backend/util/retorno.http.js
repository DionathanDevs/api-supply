const trataMensagem = (msg, sucesso, dados = null) => {
  const resposta = {
    sucesso,
    mensagem: typeof msg === "string" ? msg : "Erro desconhecido.",
  };

  if (dados) {
    if ("mensagem" in dados) delete dados.mensagem;
    if ("status" in dados) delete dados.status;

    resposta.dados = dados;
  }

  return resposta;
};

export const resErroValidacao = (res, msg, status = 422, dados = null) => {
  res.status(status).json(trataMensagem(msg, false, dados));
};

export const resErroClient = (res, msg, status = 400, dados = null) => {
  res.status(status).json(trataMensagem(msg, false, dados));
};

export const resErroPermissao = (res, msg, status = 403, dados = null) => {
  res.status(status).json(trataMensagem(msg, false, dados));
};

export const resNaoEncontrado = (res, msg, status = 404, dados = null) => {
  res.status(status).json(trataMensagem(msg, false, dados));
};

export const resErroServer = (res, msg, status = 500, dados = null) => {
  res.status(status).json(trataMensagem(msg, false, dados));
};

export const resSucesso = (res, msg, status = 200, dados = null) => {
  res.status(status).json(trataMensagem(msg, true, dados));
};
