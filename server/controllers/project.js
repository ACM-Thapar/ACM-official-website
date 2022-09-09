const Project = require('../models/Project');

//@route /project/
//@desc  POST to create a new project
//@access PRivate/Admin

async function createProject(req, res) {
  try {
    req.body.Languages = req.body.Languages.split(',');
    req.body.Members = req.body.Members.split(',');

    const project = await Project.create({ ...req.body });
    res.json(project);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
//@route /project/
//@desc  GET to get all project
//@access PRivate
async function getAllProject(req, res) {
  try {
    const project = await Project.find();

    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//@route /project/:project_id
//@desc  GET to get a specific project
//@access PRivate
async function getProject(req, res) {
  try {
    const project = await Project.findById(req.params.project_id);
    if (!project) return res.status(400).json('!project doesnt exist');
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//@route /project/:project_id
//@desc  PUT to update a  project
//@access PRivate/Admin
async function updateProject(req, res) {
  try {
    const project = await Project.findById(req.params.project_id);

    if (!project) return res.status(400).json('!project doesnt exist');

    let reqKey = Object.keys(req.body);
    reqKey.map((key) => {
      if (key == 'Members' || key == 'Languages') {
        project[key] = req.body[key].split(',');
      } else project[key] = req.body[key];
    });

    await project.save();
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//@route /project/:project_id
//@desc  DELETE to delete a  project
//@access PRivate/admin
async function deleteProject(req, res) {
  try {
    const { project_id } = req.params;
    const project = await Project.findOneAndDelete({ _id: project_id });

    if (!project) res.status(400).json('project not found');

    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

module.exports = {
  createProject,
  getAllProject,
  getProject,
  updateProject,
  deleteProject,
};
