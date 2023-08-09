{
  interface IStack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class Stack<T> implements IStack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }

    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("full");
      }
      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): T {
      if (!this.head) {
        throw new Error("empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stringStack = new Stack<string>(10)
  

}
