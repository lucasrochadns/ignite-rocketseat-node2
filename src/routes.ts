import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";


export default function CreateCourse(request: Request, response: Response)
{
    const objeto = { educator: 'LUCAS ROCHA DOS SANTOS', name: 'NodeJS', duration: 6};
    const courseCreated = new CreateCourseService(objeto);
    const obj = JSON.parse(JSON.stringify(courseCreated));
    return response.status(200).json(obj);

}