import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// @Prop({ enum: ['admin', 'user', 'guest'] }) -  Ограничивает возможные значения поля.

@Schema()
export class PostSchema {
    @Prop()
    text: string

    @Prop({type: Number, ref: "User", required: true})
    user_id: number

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;
}

export const Post = SchemaFactory.createForClass(PostSchema)