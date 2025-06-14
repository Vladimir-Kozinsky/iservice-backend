"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    var whitelist = ['https://vladimir-kozinsky.github.io', 'http://localhost:3000'];
    app.enableCors({
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
                console.log("allowed cors for:", origin);
                callback(null, true);
            }
            else {
                console.log("blocked cors for:", origin);
                callback(new Error('Not allowed by CORS'));
            }
        },
        allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, authorization, Content-Type, Accept, Observe',
        methods: "GET,PUT,POST,DELETE,UPDATE,OPTIONS",
        credentials: true,
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