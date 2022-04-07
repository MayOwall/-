
class HashTable {
  constructor() {
    this.table = {};
  }
  hash(value) {
    let key = 0;
    for(let i = 0; i < String(value).length; i++) {
      key += String(value).charCodeAt(i);
    }
    return key;
  }
  input(inputValue) {
    this.table[this.hash(inputValue)] = inputValue;
  }
  search(searchValue) {
		return this.table[this.hash(searchValue)];
	}
  delete(deleteValue) {
    delete this.table[this.hash(deleteValue)];
  }
}

const table = new HashTable();

table.input("안녕");
table.input("반가워");
table.delete("안녕");