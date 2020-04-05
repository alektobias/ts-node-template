import 'dotenv/config';

import express, { Response, Request } from 'express';
import routes from './routes';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
class App {
	public server: express.Application;

	constructor() {
		this.server = express();
		this.middlewares();
		this.routes();
		this.exceptionHandler();
	}

	private middlewares(): void {
		this.server.use(express.json());
		this.server.use(helmet());
		this.server.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
		this.server.use(
			morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common')
		);
	}

	private routes(): void {
		this.server.use(routes);
	}

	private exceptionHandler(): void {
		this.server.use(
			(req: Request, res: Response): Response => {
				return res.status(500).json({ error: 'Internal server error' });
			}
		);
	}
}

export default new App().server;
