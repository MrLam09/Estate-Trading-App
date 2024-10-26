const express = require('express');
const router = express.Router();
const Estate = require('./estate.model');
const { postEstate, getAllEstate, getSingleEstate, updateEstate, deleteEstate } = require('./estate.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');

// * POST an information of estate
router.post('/create-estate-inf', postEstate)

// * GET all information of estate
router.get('/', getAllEstate)

// * GET single estate inf
router.get('/:id', getSingleEstate)

// * UPDATE estate inf
router.put('/edit/:id',updateEstate)

// * DELETE estate inf
router.delete('/delete/:id', verifyAdminToken, deleteEstate)

module.exports = router;