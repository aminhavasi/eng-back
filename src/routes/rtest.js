const express = require('express');
const router = express.Router();
const Words = require('./../models/words');
const { newWordValidator } = require('./../validator/rtestValidator');

router.post('/newWord', async (req, res) => {
    const { error } = await newWordValidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const word = await Words.findOne({ word: req.body.word });
        if (word)
            return res
                .status(400)
                .json({ error: 'This Word Already Exict!' })
                .send();
        const newWord = await new Words(req.body);
        await newWord.save();
        res.status(200).send('success saving');
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/rtest/:id', async (req, res) => {
    try {
        await Words.findOneAndUpdate(
            { _id: req.params.id },
            { score: req.body.score },
            { new: true },
            (err, doc) => {
                if (!err) {
                    res.status(200).send();
                }
            }
        );
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/', async (req, res) => {
    try {
        let words = await Words.find();
        res.status(200).send(words);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
