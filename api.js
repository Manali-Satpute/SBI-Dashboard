// api.js
const express = require('express');
const router = express.Router();

const data = {
  Q1: { revenue: 716.57, netIncome: 154.77, netProfit: 21.60, operatingIncome: 213.55 },
  Q2: { revenue: 607.66, netIncome: 180.94, netProfit: 29.78, operatingIncome: 49.95 },
  Q3: { revenue: 711.87, netIncome: 185.37, netProfit: 26.04, operatingIncome: 252.08 },
  Q4: { revenue: 805.33, netIncome: 161.00, netProfit: 19.99, operatingIncome: 219.36 },
};

router.get('/:quarter', (req, res) => {
  const { quarter } = req.params;
  res.json(data[quarter]);
});

module.exports = router;