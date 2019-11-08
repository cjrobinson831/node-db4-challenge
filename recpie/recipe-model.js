const express = require('express');

const Recipe = require('./recipe-router');

const router = express.Router();

router.get('/', (req, res) => {
    Recipe.find()
        .then(rescipes => {
            res.json(rescipes)
        })
        .catch(err => {
            res.status(500).json({ Message: 'Failed to get rescipes' });
        });
});

router.get('/:id/shoppinglist', (req, res) => {
    const { id } = req.params;

    Recipe.findById(id)
        .then(Recipe => {
            if (rescipes) {
                res.json(rescipes)
            } else {
                res.status(404).json({ message: 'Could not find recipe with given id' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' })
        });
});