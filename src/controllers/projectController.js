import projectService from "../services/projectService.js";
import {CreateProjectBodyDto} from "../utils/dtos/ProjectDto.js";


class ProjectController {

	async create (req, res, next) {
		try {
			const createProjectBodyDto = new CreateProjectBodyDto(req.body)
			const project = await projectService.create(createProjectBodyDto)
			res.status(200).json(project)
		} catch (e) {
			next(e)
		}
	}
}

export default new ProjectController()