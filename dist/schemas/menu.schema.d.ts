import { Document } from 'mongoose';
export declare type menuDocument = menu & Document;
export declare class menu {
    menuitem: string;
    menuprice: number;
    storeid: number[];
    topping: string[];
    itemdescription: string;
    menuimage: string;
}
export declare const menuSchema: import("mongoose").Schema<Document<menu, any, any>, import("mongoose").Model<Document<menu, any, any>, any, any>, undefined, {}>;
