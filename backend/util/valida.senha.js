const pontuacaoSenha = (senha, opcoes) => {
  let numeroPassos = 5;

  const opcoesPadroes = {
    tamanhoMinimo: opcoes?.tamanhoMinimo || 8,
    verMinusculo: opcoes?.verMinusculo || true,
    verMaiusculo: opcoes?.verMaiusculo || true,
    verNumero: opcoes?.verNumero || true,
    verEspecial: opcoes?.verEspecial || true,
  };

  const pontuacaoBase = () => {
    let passos = 1;

    if (opcoesPadroes.verMinusculo === true) {
      passos++;
    }

    if (opcoesPadrao.verMinusculo === true) {
      passos++;
    }

    if (opcoesPadrao.verMaiusculo === true) {
      passos++;
    }

    if (opcoesPadrao.verNumero === true) {
      passos++;
    }

    if (opcoesPadrao.verEspecial === true) {
      passos++;
    }

    numeroPassos = passos;

    return 100 / numeroPassos;
  };

  const validarTamanho = () => {
    return senha.length >= 8;
  };

  const validarMinusculo = () => {
    return /[a-z]/.test(senha);
  };

  const validarMaiusculo = () => {
    return /[A-Z]/.test(senha);
  };

  const validarNumero = () => {
    return /[0-9]/.test(senha);
  };

  const validarEspecial = () => {
    return /[~`!#@$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(senha);
  };

  const calcularPontuacao = () => {
    let pontos = 0;

    let pontosBase = pontuacaoBase();

    if (validarTamanho() === true) {
      pontos = pontos + pontosBase;
    }

    if (opcoesPadrao.verMinusculo === true && validarMinusculo() === true) {
      pontos = pontos + pontosBase;
    }

    if (opcoesPadrao.verMaiusculo === true && validarMaiusculo() === true) {
      pontos = pontos + pontosBase;
    }

    if (opcoesPadrao.verNumero === true && validarNumero() === true) {
      pontos = pontos + pontosBase;
    }

    if (opcoesPadrao.verEspecial === true && validarEspecial() === true) {
      pontos = pontos + pontosBase;
    }

    return pontos;
  };

  return calcularPontuacao();
};

export const validarSenha = (senha) => {
  return pontuacaoSenha(senha) > 75;
};
