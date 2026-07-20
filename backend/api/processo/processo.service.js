import {
  criarProcessoServiceContrato,
  vinculaItemAoContrato,
} from "./contrato/processo.contrato.service.js";

export const criarProcessoService = async (contrato, fluxo, status, item) => {
  try {
    if (!fluxo) {
      throw new Error("Fluxo nao informado!");
    }

    const criarProcessoContrato = await criarProcessoServiceContrato(
      contrato,
      fluxo,
      status,
    );

    if (!criarProcessoContrato) {
      throw new Error("Erro ao criar processo");
    }

    const vinculouItem = await vinculaItemAoContrato(item, contrato);

    return criarProcessoContrato;
  } catch (err) {
    throw err;
  }
};
