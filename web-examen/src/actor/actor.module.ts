import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActorService } from "./actor.service";
import { ActorController } from "./actor.controller";
import { ActorEntity } from "./actor.entity";

@Module({
    imports: [TypeOrmModule.forFeature([
        ActorEntity
    ])],
    providers: [ActorService],
    controllers: [ActorController],
    exports: [ActorService],
})

export class ActorModule {

} 
