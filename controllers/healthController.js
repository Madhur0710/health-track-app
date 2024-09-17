const HealthRecord = require('../models/HealthRecord');

const getHealthRecords = async (req,res) => {
    try {
        const records = await HealthRecord.find();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({message : "Server Error"})
    }
};

const getHealthRecordById = async (req,res) => {
    try {
        const record = await HealthRecord.findById(req.params.id);
        if(!record) return res.status(404).json({message : "Record not found"})
        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({message : "Server Error"})
    }
};

const addHealthRecord  = async (req,res) => {
    const {date, bodyTemperature, bloodPressure, heartRate} = req.body;
    try {
        const newRecord = new HealthRecord({
            date,
            bodyTemperature,
            bloodPressure,
            heartRate
        });
        await newRecord.save();
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(500).json({message : "Server Error"})
    }
};

const updateHealthRecord = async (req,res) => {
    try {
        const updatedRecord = await HealthRecord.findByIdAndUpdate(req.params.id,req.body,{new: true})
        if(!updatedRecord) return res.status(404).json({message: "Record not found"});
        res.status(200).json(updatedRecord);
    } catch (error) {
        res.status(500).json({message : "Server Error"})
    }
}

const deleteHealthRecord = async (req,res) => {
    try {
        const record = await HealthRecord.findByIdAndDelete(req.params.id);
        if(!record) return res.status(404).json({message: "Record not found"});
        res.status(200).json({message: "Record deleted"})
    } catch (error) {
        res.status(500).json({message : "Server Error"})
    }
};

module.exports = {
    getHealthRecords,
    getHealthRecordById,
    addHealthRecord,
    updateHealthRecord,
    deleteHealthRecord
};