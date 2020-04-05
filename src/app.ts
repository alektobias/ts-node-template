import 'dotenv/config';
import path from 'path';
import fs from 'fs';
import express from 'express';
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
	}

	private middlewares(): void {
		this.server.use(express.json());
		this.server.use(helmet());
		this.server.use(cors());
		this.server.use(
			morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common')
		);
	}

	private routes(): void {
		this.server.use(routes);
	}
}

export default new App().server;
