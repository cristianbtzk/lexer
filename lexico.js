let pos = 0;
let text = '';
let line = 1;
let linePosition = 1;
let initialPosition = 1;
let finalPosition = 1;

const finais = {
  1: 'ID',
  2: 'IF',
  3: 'ID',
  4: 'ID',
  5: 'FOR',
  6: 'ID',
  7: 'ID',
  8: 'ID',
  9: 'ID',
  10: 'PRINT',
  11: 'ID',
  12: 'AP',
  13: 'FP',
  14: 'AC',
  15: 'FC',
  16: 'MENOS',
  17: 'MAIS',
  18: 'MULT',
  19: 'DIV',
  20: 'MAIOR',
  21: 'MENOR',
  22: 'NOT',
  23: 'ATR',
  24: 'CONST',
  25: 'MAIOR_IGUAL',
  26: 'MENOR_IGUAL',
  27: 'DIF',
  28: 'COMP',
  29: 'ID',
  30: 'ID',
  31: 'ID',
  32: 'ID',
  33: 'WHILE',
  38: 'START',
  40: 'INT',

}

const transicoes = {
  0: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 3, 'g': 11, 'h': 11,
    'i': 1, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 6, 'q': 11, 'r': 11, 's': 34,
    't': 11, 'u': 11, 'v': 11, 'w': 29, 'x': 11, 'y': 11, 'z': 11, '(': 12, ')': 13, '{': 14, '}': 14,
    '-': 16, '+': 17, '*': 18, '/': 19, '>': 20, '<': 21, '!': 22, '=': 23, '0': 24, '1': 24, '2': 24, '3': 24,
    '4': 24, '5': 24, '6': 24, '7': 24, '8': 24, '9': 24, ' ': 0, ' ': 0, '\t': 0, '\n': 0
  },
  1: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 2, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 39, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  2: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  3: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 4, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  4: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 5, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  5: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  6: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 7, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  7: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 8, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  8: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 9, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  9: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 10, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  10: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  11: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  12: {},
  13: {},
  14: {},
  15: {},
  16: {},
  17: {},
  18: {},
  19: {},
  20: {
    '=': 25
  },
  21: {
    '=': 26
  },
  22: {
    '=': 27
  },
  23: {
    '=': 28
  },
  24: {
    'A': 100, 'B': 100, 'C': 100, 'D': 100, 'E': 100, 'F': 100, 'G': 100, 'H': 100, 'I': 100, 'J': 100, 'K': 100, 'L': 100,
    'M': 100, 'N': 100, 'O': 100, 'P': 100, 'Q': 100, 'R': 100, 'S': 100, 'T': 100, 'U': 100, 'V': 100, 'W': 100, 'X': 100,
    'Y': 100, 'Z': 100,
    'a': 100, 'b': 100, 'c': 100, 'd': 100, 'e': 100, 'f': 100, 'g': 100, 'h': 100,
    'i': 100, 'j': 100, 'k': 100, 'l': 100, 'm': 100, 'n': 100, 'o': 100, 'p': 100, 'q': 100, 'r': 100, 's': 100,
    't': 100, 'u': 100, 'v': 100, 'w': 100, 'x': 100, 'y': 100, 'z': 100,
    '0': 24, '1': 24, '2': 24, '3': 24, '4': 24, '5': 24, '6': 24, '7': 24, '8': 24, '9': 24
  },
  29: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 30,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  30: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 31, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  31: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 32, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  32: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 33, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  33: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  34: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 35, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  35: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 36, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  36: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 37, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  37: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 38, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  38: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  39: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 40, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
  40: {
    'A': 11, 'B': 11, 'C': 11, 'D': 11, 'E': 11, 'F': 11, 'G': 11, 'H': 11, 'I': 11, 'J': 11, 'K': 11, 'L': 11,
    'M': 11, 'N': 11, 'O': 11, 'P': 11, 'Q': 11, 'R': 11, 'S': 11, 'T': 11, 'U': 11, 'V': 11, 'W': 11, 'X': 11,
    'Y': 11, 'Z': 11,
    'a': 11, 'b': 11, 'c': 11, 'd': 11, 'e': 11, 'f': 11, 'g': 11, 'h': 11,
    'i': 11, 'j': 11, 'k': 11, 'l': 11, 'm': 11, 'n': 11, 'o': 11, 'p': 11, 'q': 11, 'r': 11, 's': 11,
    't': 11, 'u': 11, 'v': 11, 'w': 11, 'x': 11, 'y': 11, 'z': 11, '0': 11, '1': 11, '2': 11, '3': 11,
    '4': 11, '5': 11, '6': 11, '7': 11, '8': 11, '9': 11
  },
}

let linhaPos = 1;

const nextToken = (data) => {
  if (data.length <= pos)
    return null
  text = "";
  let estado = 0;

  while (true) {
    const currentChar = data[pos];
    if (estado === 0) {
      initialPosition = linePosition;
      finalPosition = linePosition;
    }
    try {
      const nextState = transicoes[estado][currentChar]

      if (nextState !== undefined) {
        finalPosition = linePosition;
        estado = nextState;
        pos++;
        if (currentChar === '\n') {
          line++;
          linePosition = 1;
        }
        if (![' ', '\n', '\t'].includes(currentChar)) text += currentChar
      } else {

        const token = finais[estado]

        if (token) {
          return {
            token,
            text,
            line,
            initialPosition,
            finalPosition,
          }
        }

        throw new Error('Erro linha ' + line + '. Entrada inválida: ' + text)
      }

    } catch (error) {
      const token = finais[estado]

      if (token) {
        return {
          token,
          text,
          line,
          initialPosition,
          finalPosition,
        }
      }

      throw new Error('Erro linha ' + line + '. Entrada inválida: ' + text)
    }
    if (currentChar !== '\n')
      linePosition++;

  }
}


module.exports = nextToken