class MinHeap {
    constructor(values) {
        this.values = values || [];
    }

    add(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const par = Math.floor((index - 1) / 2);
            if (this.get(par) > this.get(index)) {
                this.swap(par, index);
                index = par;
            } else {
                break;
            }
        }

    }

    size() {
        return this.values.length;
    }

    get(index) {
        return this.values[index];
    }

    swap(index1, index2) {
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }

}

export default MinHeap;