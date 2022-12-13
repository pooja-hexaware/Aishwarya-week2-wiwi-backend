import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type menuDocument = menu & Document;

@Schema()
export class menu {
   
   @Prop()
   menuitem: string; 
   
   @Prop()
   menuprice: number; 
   
   @Prop()
   storeid: number[]; 
   
   @Prop()
   topping: string[]; 
   
   @Prop()
   itemdescription: string; 
   
   @Prop()
   menuimage: string; 
   
}

export const menuSchema = SchemaFactory.createForClass(menu);