interface PQItem<T> {
  value: T;
  priority: number;
}

// pop max-priority element
class PriorityQueue<T> {
  private heap: PQItem<T>[];

  constructor() {
    this.heap = [];
  }

  push(value: T, priority: number) {
    this.heap.push({ value, priority });
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    
    let parent = Math.floor((index - 1) / 2);
    while (
      0 < index &&
      this.heap[parent].priority < this.heap[index].priority
    ) {
      this.swap(parent, index);
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    const n = this.heap.length;
    if (n === 0) return null;
    if (n === 1) return this.heap.pop()!;
    this.swap(0, n - 1);
    let deleted = this.heap.pop()!;
    this.heapifyDown();
    return deleted;
  }

  heapifyDown() {
    let index = 0;

    while (true) {
      let maxPriority = index;
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      if (
        left < this.heap.length &&
        this.heap[left].priority > this.heap[maxPriority].priority
      ) {
        maxPriority = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right].priority > this.heap[maxPriority].priority
      ) {
        maxPriority = right;
      }

      if (index === maxPriority) break;

      this.swap(index, maxPriority);
      index = maxPriority;
    }
  }

  swap(aIndex: number, bIndex: number) {
    [this.heap[aIndex], this.heap[bIndex]] = [
      this.heap[bIndex],
      this.heap[aIndex],
    ];
  }

  show() {
    if (this.heap.length === 0) return null;
    const top = this.heap[0];
    return top.value;
  }
  showAll() {
    return this.heap;
  }
}
