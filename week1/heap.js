class MaxHeap {
  constructor () {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    console.log(this.heap);
    let currentIndex = this.heap - 1;
    let parentIndex = this.heap[Math.floor(currentIndex / 2)];
    while(parentIndex !== 0 && this.heap[parentIndex] < this.heap[currentIndex]) {
      const tempValue = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[currentIndex];
      this.heap[currentIndex] = tempValue;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    const currentIndex = 1;
    const leftIndex = 2;
    const rightIndex = 3;

    while(this.heap[currentIndex] > this.heap[leftIndex] || this.heap[currentIndex] > this.heap[rightIndex]) {
      if(this.heap[leftIndex] < this.heap[rightIndex]) {
        const tempValue = this.heap[rightIndex];
        this.heap[rightIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = tempValue;

        currentIndex = rightIndex;
      }
      else {
        const tempValue = this.heap[leftIndex];
        this.heap[leftIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = tempValue;

        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = (currentIndex * 2) + 1;
    }
    return returnValue;
  }
}

const heap = new MaxHeap();
heap.push(2);
heap.push(4);
heap.push(3);
heap.push(6);
heap.push(1);
heap.pop(3);

console.log(heap);
