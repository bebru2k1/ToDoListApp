const db = require('../Models')
const List = db.list
module.exports.createListController = async (req, res) => {
    try {
        const userId = req.userId
        const { title } = req.body
        if (!title) return res.status(400).json({ success: false, message: 'title is required' })

        newList = new List({ title, user: userId })
        await newList.save()

        res
            .status(200)
            .json({ success: true, message: 'happylearing', list: newList })
        console.log(newList)
    } catch (error) {
        console.log(error)
    }
}

module.exports.getListController = async (req, res) => {
    const userId = req.userId
    try {
        const list = await List.find({ user: userId })

        res.status(200).json({ success: true, list })

    } catch (error) {
        console.log(error)
    }
}

module.exports.putListController = async (req, res) => {
    const { title } = req.body
    const userId = req.userId

    if (!title) return res
        .status(400)
        .json({ success: false, message: 'Title is required' })
    try {
        const updateList = { title }
        const updateCondition = { _id: req.params.id, user: userId }
        const newListUpdate = await List.findOneAndUpdate(updateCondition, updateList, { new: true })

        if (!newListUpdate) return res.status(400).json({ success: false, message: 'Fail update' })

        res.status(200).json({ success: true, list: newListUpdate, message: 'Excellent progress!', })
    } catch (error) {
        console.log(error)
    }

}

module.exports.deleteListController = async (req, res) => {
    try {
        const listDeleteCondition = { _id: req.params.id, user: req.userId }
        const deletedList = await List.findOneAndDelete(listDeleteCondition)

        // User not authorised or post not found
        if (!deletedList)
            return res.status(401).json({
                success: false,
                message: 'Post not found or user not authorised'
            })

        res.json({ success: true, post: deletedList })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}
