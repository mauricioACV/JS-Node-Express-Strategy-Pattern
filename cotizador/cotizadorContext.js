function CotizadorContext(estrategia, ganacia) {
  this.estrategia = estrategia;
  this.ganacia = ganacia;

  this.setEstrategia = function (estrategia) {
    this.estrategia = estrategia;
  };

  this.cotizar = function (monto) {
    return this.estrategia.cotizar(monto, this.ganacia);
  };
}

module.exports = CotizadorContext;
