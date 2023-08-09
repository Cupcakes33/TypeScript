{
  /**
   * Stack
   * LIFO
   */

  interface IStack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type Node = {
    readonly value: string;
    readonly next?: Node;
  };

  class Stack implements IStack {
    private _size: number = 0;
    private head?: Node;
    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }

    push(value: string) {
      if (this.capacity === this.size) {
        throw new Error("Stack is full");
      }
      const node: Node = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): string {
      if (!this.head) {
        throw new Error("Stack is empty");
      }
      const node = this.head;
      this.head = node?.next;
      this._size--;
      return node?.value;
    }
  }

  const stack = new Stack(2);
  stack.push("1");
  stack.push("2");
  console.log(stack);
}
