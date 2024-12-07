export class Post {
    constructor(
        private id: number,
        private text: string
    ) {}

    get getId() {
        return this.id
    }

    get getText() {
        return this.text
    }
}