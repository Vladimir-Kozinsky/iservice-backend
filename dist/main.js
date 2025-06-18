"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        allowedHeaders: ['origin', 'x-requested-with', 'content-type', 'accept', 'authorization', 'Access-Control-Allow-Origin', '*'],
        origin: 'https://vladimir-kozinsky.github.io',
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
    });
    app.use(cookieParser());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API')
        .setDescription('Docs Rest API')
        .setVersion('1.0.0')
        .addTag('User')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(process.env.PORT, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map