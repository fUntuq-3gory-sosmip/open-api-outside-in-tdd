import { Injectable } from "@nestjs/common";
import { throwError } from "rxjs";

@Injectable()
export class ChatGateway {
    public getChat(prompt: string) {
        throw new Error("Not Implemented");
    }
}