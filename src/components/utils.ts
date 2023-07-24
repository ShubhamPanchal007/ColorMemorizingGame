export function shuffleArray(array: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

let words = [
  "Aditya urban casa",
  "Ajnara 121",
  "Ajnara daffodils",
  "Amrapali platinum",
  "Amrapali sapphire",
  "Amrapali village",
  "Ansal esencia",
  "Ansal heights",
  "Ashiana anmol",
  "Bptp park grandeura",
  "Bptp park resort",
  "Chintel paradiso",
  "Civitech sampriti",
  "Devaan heights",
  "DLF ultima",
  "Emaar palm gurgaon",
  "Emaar palm heights",
  "Engineer park society",
  "Emerald heights",
  "Fortune residency",
  "Gaur grandeur",
  "Gardenia glory",
  "Gpl eden heights",
  "Grand heritage",
  "Gurgaon one",
  "Happy homes",
  "JM aroma",
  "JM Florence",
  "JM orchid",
  "Maxblis white House",
  "Nirala estate",
  "Omaxe green Valley",
  "Omaxe new height",
  "Park Avenue",
  "Pan oasis",
  "Paramount Floraville",
  "Paras seasons",
  "Platinum heights",
  "RPS green valley",
  "Shri radha apra garden",
  "Shri radha sky",
  "Supertech ecociti",
  "Vipul lavanya",
];

class TrieNode {
  letter: string;
  children: { [key: string]: TrieNode };
  endOfWord: boolean;
  constructor(letter: string) {
    this.letter = letter;
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  rootNode: TrieNode;
  constructor() {
    this.rootNode = new TrieNode("");
  }

  _Insert(word: string) {
    let currentNode: TrieNode = this.rootNode;
    for (let i = 0; i < word.length; i++) {
      const alphabet = word[i];
      if (!currentNode.children[alphabet]) {
        const node = new TrieNode(alphabet);
        currentNode.children[alphabet] = node;
      }
      currentNode = currentNode.children[alphabet];
    }
  }
  search(prefix: string) {
    let currentNode: TrieNode = this.rootNode;
    for (let i = 0; i < prefix.length; i++) {
      const alphabet = prefix[i];
      if (!currentNode.children[alphabet]) {
        const node = new TrieNode(alphabet);
        currentNode.children[alphabet] = node;
      }
      currentNode = currentNode.children[alphabet];
    }
    return this._searchWord(currentNode, prefix, words);
  }
  _searchWord(node: TrieNode, prefix: string, words: string[]) {
    if (node.endOfWord) {
      return words.push(prefix);
    }

    for (let child in node.children) {
      console.log(child+prefix)
      this._searchWord(node.children[child], prefix + child, words);
    }
  }
}

let trie = new Trie();

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  trie._Insert(word);
}

