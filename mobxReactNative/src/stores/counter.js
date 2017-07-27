import { observable  } from 'mobx';

export default class CounterStore {
    @observable count = 0;

     increment() {
        this.count++;
    }

     decrement() {
        this.count--;
    }
}
