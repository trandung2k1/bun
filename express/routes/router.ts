import { Request, Response, Router } from 'express'
const router = Router();

router.get('/hello', (req: Request, res: Response) => {
    return res.status(200).json({
        msg: "Hello"
    })
})

export default router