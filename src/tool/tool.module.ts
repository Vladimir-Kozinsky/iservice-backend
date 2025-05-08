import { Module } from '@nestjs/common';
import { ToolController } from './tool.controller';
import { ToolService } from './tool.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tool, ToolSchema } from 'src/schemas/tool.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Tool.name,
      schema: ToolSchema
    }]),
  ],
  controllers: [ToolController],
  providers: [ToolService]
})
export class ToolModule { }
