export default class Controller {
    constructor({model, view}) {
        this.model = model;
        this.view = view;
        
        let [x, y] = this.model.getAnyEmptyPosition();
        this.model.addSquare(x, y, 2);
        this.view.createSquare(x, y, 2);

        [x, y] = this.model.getAnyEmptyPosition();
        this.model.addSquare(x, y, 2);
        this.view.createSquare(x, y, 2);
        
        this.view.bindMoveLeft(() => {
            this.model.sumLeft();
            this.view.moveLeft();
        });

        this.view.bindMoveRight(() => {
            this.model.sumRight();
            this.view.moveRight();
        });

        this.view.bindMoveUp(() => {
            this.model.sumUp();
            this.view.moveUp();
        });
        this.view.bindMoveDown(() => {
            this.model.sumDown();
            this.view.moveDown();
        });
    }
}
