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

    getSmallest() {
        if (!this.size()) return;
        this.swap(0, this.size() - 1);
        const removed = this.values.pop();
        this.downHeapify(0);
        return removed;
    }

    swap(index1, index2) {
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }

    buildHeap() {
        const n = this.size();
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapify(i);
        }
    }

    heapify(index) {
        const length = this.size();
        let smallest = index, left = 2 * index + 1, right = 2 * index + 2;

        if (left < length && this.values[smallest] > this.values[left])
            smallest = left;

        if (right < length && this.values[smallest] > this.values[right])
            smallest = right;

        if (smallest !== index) {
            this.swap(smallest, index);
            this.heapify(smallest);
        }
    }

    downHeapify(index) {
        while (2 * index + 1 < this.size()) {
            let x = Math.min(this.get(index), this.get(2 * index + 1));
            if (this.get(2 * index + 2) !== undefined)
                x = Math.min(x, this.get(2 * index + 2));
            if (x === this.get(index)) return;
            if (x === this.get(2 * index + 1)) {
                this.swap(index, 2 * index + 1);
                index = 2 * index + 1;
            } else {
                this.swap(index, 2 * index + 2);
                index = 2 * index + 2;
            }
        }
    }
}

export default MinHeap;