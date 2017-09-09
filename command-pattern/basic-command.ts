class Manager {

    private items: number[] = [];

    public action(name: string, item: number) {

        if (this[name]) {
            return this[name](item);
        }
    }

    private add(item: number) {
        this.items.push(item);
    }

    private remove(item: number) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

const newManager = new Manager();
newManager.action('add', 1);
newManager.action('add', 2);
newManager.action('add', 3);
newManager.action('remove', 3);
