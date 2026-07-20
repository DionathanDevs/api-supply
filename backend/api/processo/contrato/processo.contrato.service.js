import ProcessoContratoDAO from "./processo.contrato.dao.js";

export const criarProcessoServiceContrato = async (contrato, fluxo, status) => {
  try {
    const processoDAO = new ProcessoContratoDAO();
    const processoCriado = processoDAO.criarProcessoContrato(
      contrato,
      fluxo,
      status,
    );

    if (!processoCriado) {
      throw new Error("Erro ao criar o processo de contrato!");
    }

    return processoCriado;
  } catch (err) {
    throw err;
  }
};

export const vinculaItemAoContrato = (item, contrato) => {
  try {
    const itemEnvio = item?.codigo ?? null;

    if (!itemEnvio) {
      throw new Error("Codigo de item nao informado");
    }

    const processoDAO = new ProcessoContratoDAO();
    const vinculaItemContrato = processoDAO.vinculaItemContrato();
  } catch (err) {
    throw err;
  }
};
