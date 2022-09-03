function EstrategiaLocalImpuesto(impuesto) {
  this.impuesto = impuesto;
  this.cotizar = function (monto, ganancia) {
    return monto * ganancia + monto * impuesto;
  };
}
module.exports = EstrategiaLocalImpuesto;
