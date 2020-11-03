import {replaceChars} from '../strings';

describe('replaceChars', () => {
  test('successfully replace one char', () => {
    const originalSentence = 'Hello,I,Am,the,original,sentence';
    const spacedSentence = replaceChars(originalSentence, {',': ' '});

    const expectedSentence = 'Hello I Am the original sentence';

    expect(spacedSentence.includes(',')).toBeFalsy();
    expect(spacedSentence).toEqual(expectedSentence);
  });

  test('successfully replace multiple chars', () => {
    const originalSentence = 'He*l*lo,.I,.A-m,.the,-orig-i-n-al,.-sentence';
    const spacedSentence = replaceChars(originalSentence, {
      ',': ' ',
      '.': null,
      '-': '',
      '*': undefined,
    });

    const expectedSentence = 'Hello I Am the original sentence';

    expect(spacedSentence.includes(',')).toBeFalsy();
    expect(spacedSentence).toEqual(expectedSentence);
  });
});
