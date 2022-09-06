import {Sorter} from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  compare(leftIndex: number, rigthIndex: number) {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rigthIndex].toLocaleLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number) {
    const arrayFromString = this.data.split("");
    const leftHand = arrayFromString[leftIndex];

    arrayFromString[leftIndex] = arrayFromString[rightIndex];

    arrayFromString[rightIndex] = leftHand;

    this.data = arrayFromString.join("");
  }

  get length() {
    return this.data.length;
  }
}
