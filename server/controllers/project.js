const { userUpdate } = require('../helper/userUpdate');
const Project = require('../models/Project');

//@route /project/
//@desc  POST to create a new project
//@access PRivate/Admin

async function createProject(req, res) {
  try {
    req.body.Languages = req.body.Languages.split(',');

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
    const project = await Project.find().populate('user');
    res.status(200).json(project);
  } catch (err) {
    console.log(err);
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

    project.Title = req.body.title || project.Title;
    project.Description = req.body.description || project.Description;
    project.GithubURL = req.body.githubURL || project.GithubURL;
    project.Languages = req.body.Languages
      ? req.body.Languages.split(',')
      : project.Languages;
    if (req.body.user.length > 0) {
      await userUpdate(req.body.user, 'projects', project._id);
    }
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
    await userUpdate(project.user, 'projects', project._id, true);
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
