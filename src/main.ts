import { NestFactory } from '@nestjs/core';
import { setupSwagger } from './swagger';
import { AppModule } from './modules/app/app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.ENABLE_SWAGGER_API_DOCUMENT === '1') {
    setupSwagger(app);
  }
  await app.listen(3000);
}
bootstrap();
