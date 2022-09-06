// у на инструкция о том что нужно чтобы быть аргументом нашего класса

// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rigthIndex: number): boolean;
//   swap(leftIndex: number, rigthIndex: number): void;
// }

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;

  abstract swap(leftIndex: number, rightIndex: number): void;

  abstract length: number;

  sort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
