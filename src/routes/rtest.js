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

router.post('/rtest', async (req, res) => {
    try {
        const body = req.body;
        await body.map((m) => {
            Words.findOneAndUpdate(
                { _id: m._id },
                { score: m.score },
                { new: true },
                (err, doc) => {
                    if (!err) {
                        res.status(200).send();
                    }
                }
            );
        });
        res.send('ok');
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

router.post('/test', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

module.exports = router;
