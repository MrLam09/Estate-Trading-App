const Estate = require("./estate.model");


// * POST estate inf
const postEstate = async (req, res) => {
    try {
        const estate = await Estate({...req.body});
        await estate.save();
        res.status(200).send({message: "Đã thêm BĐS thành công", estate});
    } catch (error) {
        res.status(500).send({message: "Thêm BĐS thất bại", error});
    }

}

// * GET all estate inf
const getAllEstate = async (req, res) => {
    try {
        const estate = await Estate.find();
        res.status(200).send(estate);
    } catch (error) {
        res.status(500).send({message: "Lọc BĐS thất bại", error});
    }
}

// * GET single estate inf
const getSingleEstate = async (req, res) => {
    try {
        const estate = await Estate.findById(req.params.id);
        if(!estate) {
            res.status(404).send({message: "Không tìm thấy BĐS"});
        }
        res.status(200).send(estate);
    } catch (error) {
        res.status(500).send({message: "Lọc BĐS thất bại", error});
    }
}

// * UPDATE estate inf
const updateEstate = async (req, res) => {
    try {
        const updatedEstate = await Estate.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedEstate) {
            res.status(404).send({message: "Không tìm thấy BĐS"});
        }
        
        res.status(200).send({message: "Cập nhật BĐS thành công", estate: updatedEstate});

    } catch (error) {
        res.status(500).send({message: "Cập nhật BĐS thất bại", error});
    }
}

// * DELETE estate inf
const deleteEstate = async (req, res) => {
    try {
        const deletedEstate = await Estate.findByIdAndDelete(req.params.id);
        if(!deletedEstate) {
            res.status(404).send({message: "Không tìm thấy BĐS"});
        }
        res.status(200).send({message: "Xóa BĐS thành công", estate: deletedEstate});
    } catch (error) {
        res.status(500).send({message: "Xóa BĐS thất bại", error});
    }
}


module.exports = {
    postEstate,
    getAllEstate,
    getSingleEstate,
    updateEstate,
    deleteEstate
}