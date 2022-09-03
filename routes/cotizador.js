var express = require("express");
var router = express.Router();
const CotizadorContext = require("../cotizador/cotizadorContext");
const EstrategiaLocal = require("../cotizador/estrategiaLocal");
const EstrategiaLocalImpuesto = require("../cotizador/estrategiaLocalImpuesto");
const ganancia = 1.3;
const iva = 0.19;

router.get("/local", function (req, res, net) {
  const cotizador = new CotizadorContext(new EstrategiaLocal(), ganancia);
  const monto = req.query.monto;
  const total = cotizador.cotizar(monto);
  res.json(total);
});

router.get("/localmpuesto", function (req, res, net) {
    const cotizador = new CotizadorContext(new EstrategiaLocalImpuesto(iva), ganancia);
    const monto = req.query.monto;
    const total = cotizador.cotizar(monto);
    res.json(total);
  });

module.exports = router;
