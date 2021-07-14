
const express =require('express');
const router = express.Router();


const gameCtrl = require('../controllers/game.controller');


//tasks
router.post('/add', gameCtrl.addGame)
router.post('/game-list',gameCtrl.getAllGames);
router.patch('/chtask/:id', gameCtrl.updateGames);
router.delete('/del/:id', gameCtrl.removeGame);

module.exports = router