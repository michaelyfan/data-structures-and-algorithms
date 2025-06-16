const { Trie } = require('../src/trie');

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  test('returns empty string as longest common prefix when no words are added', () => {
    expect(trie.longestCommonPrefix()).toBe('');
  });

  test('returns the word itself as longest common prefix when only one word is added', () => {
    trie.add('apple');
    expect(trie.longestCommonPrefix()).toBe('apple');
  });

  test('returns correct longest common prefix for multiple words', () => {
    trie.add('flower');
    trie.add('flow');
    trie.add('flight');
    expect(trie.longestCommonPrefix()).toBe('fl');
  });

  test('returns empty string when there is no common prefix', () => {
    trie.add('dog');
    trie.add('racecar');
    trie.add('car');
    expect(trie.longestCommonPrefix()).toBe('');
  });

  test('returns the full word when all words are the same', () => {
    trie.add('test');
    trie.add('test');
    trie.add('test');
    expect(trie.longestCommonPrefix()).toBe('test');
  });

  test('returns correct prefix when some words are prefixes of others', () => {
    trie.add('interspecies');
    trie.add('interstellar');
    trie.add('interstate');
    expect(trie.longestCommonPrefix()).toBe('inters');
  });

  test('handles single character words', () => {
    trie.add('a');
    trie.add('a');
    trie.add('a');
    expect(trie.longestCommonPrefix()).toBe('a');
  });

  test('handles mix of single and multi-character words', () => {
    trie.add('a');
    trie.add('ab');
    trie.add('abc');
    expect(trie.longestCommonPrefix()).toBe('a');
  });
});