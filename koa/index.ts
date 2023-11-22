import Koa from 'koa';
import dotenv from 'dotenv';
import routes from './routes';
dotenv.config();
const app = new Koa();
const port = process.env.PORT ?? 4000;
app.use((ctx, next) => {
    const start = Date.now();
    return next().then(() => {
        const ms = Date.now() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
});

app.use(routes.routes()).use(routes.allowedMethods());
app.listen(port, () => console.log(`Server listen on http://localhost:${port}`));
