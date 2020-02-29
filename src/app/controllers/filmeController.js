const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Filmes = require('../models/filmes');

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
  res.send({ user: req.userId });
});

router.get('/:filmeId', async (req, res) => {
  res.send({ user: req.userId });
});

router.post('/favorito', async (req, res) => {
  try {
    let filme = null;
    const { imdb, favorito } = req.body;
    const upFilme = await Filmes.findOneAndUpdate({ user: req.userId, imdb: imdb },
      {
        '$set': {
          favorito: favorito,
        }
      })
    if (!upFilme) {
      filme = await Filmes.create({ ...req.body, user: req.userId });
      return res.send({ filme });
    }else{
      return res.send({ upFilme });
    }

  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Error add/remove favoritos' })
  }
});

router.post('/visto', async (req, res) => {
  try {
    let filme = null;
    const { imdb, visto } = req.body;
    const upFilme = await Filmes.findOneAndUpdate({ user: req.userId, imdb: imdb },
      {
        '$set': {
          visto: visto,
        }
      })
    if (!upFilme) {
      filme = await Filmes.create({ ...req.body, user: req.userId });
      return res.send({ filme });
    }else{
      return res.send({ upFilme });
    }

  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Error add/remove vistos' })
  }
});

router.post('/ver', async (req, res) => {
  try {
    let filme = null;
    const { imdb, ver } = req.body;
    const upFilme = await Filmes.findOneAndUpdate({ user: req.userId, imdb: imdb },
      {
        '$set': {
          ver: ver,
        }
      })
    if (!upFilme) {
      filme = await Filmes.create({ ...req.body, user: req.userId });
      return res.send({ filme });
    }else{
      return res.send({ upFilme });
    }

  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Error add/remove ver' })
  }
});

module.exports = app => app.use('/filmes', router);