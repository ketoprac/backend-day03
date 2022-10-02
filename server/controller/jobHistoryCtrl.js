import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const jobHistory = await req.context.models.job_history.findAll();
    return res.send(jobHistory);
  } catch (error) {
    return res.status(404).send(error);
  }
}

const findOne = async (req, res) => {
  try {
    const jobHistory = await req.context.models.job_history.findOne({
      where: { employee_id: req.params.id }
    })
    return res.send(jobHistory);
  } catch (error) {
    return res.status(404).send(error);
  }
}

const create = async (req, res) => {
  try {
    const jobHistory = await req.context.models.job_history.create({
      employee_id: req.body.employee_id,
      start_date: req.body.start_date,
      end_data: req.body.end_data,
      job_id: req.body.job_id,
      department_id: req.body.department_id
    })
    return res.send(jobHistory);
  } catch (error) {
    console.log("error >>", error);
    return res.status(404).send(error);
  }
}

const createNext = async (req, res) => {
  try {

  } catch (error) {

  }
}

const update = async (req, res) => {
  try {
    const jobHistory = await req.context.models.job_history.update({
      start_date: req.body.start_date,
      end_data: req.body.end_data,
      job_id: req.body.job_id,
      department_id: req.body.department_id
    }, { returning: true, where: { employee_id: req.params.id}});
    return res.send(jobHistory);
  } catch (error) {
    return res.status(404).send(error);
  }
}

const deleted = async (req, res) => {
  try {
    const jobHistory = await req.context.models.job_history.destroy({
      where: { employee: req.params.id }
    });
    return res.json({message: "Job history successfully deleted!"});
  } catch (error) {
    return res.status(404).send(error);
  }
}

const querySQL = async (req, res) => {
  try {
    await sequelize.query('SELECT * FROM job_history where employee_id = :employeeId', {
      replacements: {employeeId: req.params.id}, type: sequelize.QueryTypes.SELECT
    })
    .then(result => {
      return res.send(result);
    })
  } catch (error) {
    return res.status(404).send(error);
  }
}

export default {
  findAll,
  findOne,
  create,
  createNext,
  update,
  deleted,
  querySQL
}