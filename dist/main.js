"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const body_parser_1 = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useStaticAssets(path_1.join(__dirname, '..', 'uploads'));
    app.use(body_parser_1.json({ limit: '50mb' }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map