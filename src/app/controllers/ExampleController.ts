import { Request, Response } from 'express';

class ExampleController {
	public async index(req: Request, res: Response): Promise<Response> {
		return res.json({ message: 'The super application is runnig on docker!' });
	}
}

export default new ExampleController();
