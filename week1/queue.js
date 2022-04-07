//오늘의 목표 : object를 이용해서 queue구현하기~

class Queue {
  constructor() {
    this.queue = [];
    this.first = 0;
    this.rear = 0;
  }

  enQueue(newValue) {
    this.queue.push(newValue);
    this.rear += 1;
  }

  deQueue() {
    const value = this.queue[this.first];
    delete this.queue[this.first];
    this.first -= 1;
    return value;
  }

  peek() {
    return this.queue[this.first];
  }

  size() {
    return this.rear - this.first;
  }
}

const queue = new Queue();

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
console.log(queue.queue);
console.log(queue.peek());
console.log(queue.size());
console.log(queue.deQueue(), queue.queue);
