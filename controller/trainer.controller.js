import Trainer from "../models/trainer.model";

class TrainerController {
  static fetchTrainers = async (req, res) => {
    try {
      const { query } = req;

      console.log(query);

      const searchQuery = {};
      if(query.firstName) {
        // const regex = new RegExp(["^", query.firstName, "$"].join(""), "i");
        searchQuery.firstName = { $regex:query.firstName, $options: "i" }
      }
      if(query.lastName) {
        searchQuery.lastName = { $regex:query.lastName, $options: "i" }
      }

      const trainers = await Trainer.find(searchQuery);
      res.status(200).send(trainers);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  static addTrainer = async (req, res) => {
    try {
      const newTrainer = new Trainer(req.body);
      const trainer = await newTrainer.save();
      res.status(201).send(trainer);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  static updateTrainer = async (req, res) => {
    try {
      const { id } = req.params;
      const trainer = await Trainer.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      const updatedTrainer = await trainer.save();
      res.status(201).send(updatedTrainer);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
}

export default TrainerController;
