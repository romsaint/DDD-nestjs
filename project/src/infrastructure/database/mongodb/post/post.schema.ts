import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
// @Prop({ enum: ['admin', 'user', 'guest'] }) -  Ограничивает возможные значения поля.

@Schema()
export class PostSchema extends Document {
    @Prop()
    text: string

    @Prop({type: Number, ref: "User", required: true})
    user_id: number

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;
}

export const PostMongoSchema = SchemaFactory.createForClass(PostSchema)