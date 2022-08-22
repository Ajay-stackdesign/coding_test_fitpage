const Stock = require("../model/stockModel")

exports.createStock = async (req, res, next) => {
    try {
        const stock = await Stock.create(req.body)

        res.status(201).json({
            success: true,
            stock
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllStock = async (req, res, next) => {
    try {
        const stock = await Stock.find()

        if (!stock) {
            return res.status(500).json("Stock not found!")
        }

        res.status(200).json({
            success: true,
            stock
        })
    } catch (error) {
        res.status(500).json(error)
    }
}