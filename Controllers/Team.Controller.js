import TeamModel from "../Models/Team.Model.js";

export const createTeam = async (req, res) => {
    try {
        const newTeam = new TeamModel(req.body);
        await newTeam.save();
        res.status(201).json({
            success: true,
            message: "Team created successfully",
            team: newTeam
        });
    } catch (error) {
        console.error("Detailed Error:", error);
        res.status(500).json({
            success: false,
            message: error.message,
            error: error.errors || error
        });
    }
};

export const getAllTeams = async (req, res) => {
    try {
        const teams = await TeamModel.find();
        res.status(200).json({
            success: true,
            teams
        });
    } catch (error) {
        console.error("Detailed Error:", error);
        res.status(500).json({
            success: false,
            message: error.message,
            error: error.errors || error
        });
    }
};