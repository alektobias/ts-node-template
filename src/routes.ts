import { Router } from 'express';

const routes = Router();

routes.route('/').get((req, res) => {
	return res.json({ msg: 'ok' });
});

export default routes;
