import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const numbersCollection = new NumbersCollection([123, 3, -100, 90, -4]);
numbersCollection.sort();

const charactersCollections = new CharactersCollection("pouwerlhzasdljk");

charactersCollections.sort();

const linkedList = new LinkedList();

linkedList.add(123);
linkedList.add(12);
linkedList.add(12000);
linkedList.add(-9);
linkedList.add(-987);
linkedList.add(0);
linkedList.print();

linkedList.sort();
linkedList.print();
