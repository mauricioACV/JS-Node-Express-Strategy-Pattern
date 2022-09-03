function EstrategiaLocal(monto, ganancia) {
  this.cotizar = function (monto, ganancia) {
    return monto * ganancia;
  };
}

module.exports = EstrategiaLocal;
