import ApiError from "../utils/ApiError/ApiError.js";
import {Project} from "../db/index.js";
import {CreateProjectResDto} from "../utils/dtos/ProjectDto.js";

class ProjectService {
	async create ({name}) {
		const project = await Project.create({name, userId: 1})
		const createProjectResDto = new CreateProjectResDto(project)
		return {...createProjectResDto}
	}
}

export default new ProjectService()