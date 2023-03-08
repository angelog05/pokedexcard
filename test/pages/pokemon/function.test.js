

// Test Code
const ctx = { query: { id: 1 } };
const expectedResult = {
  pokemon: {
    name: 'bulbasaur',
    sprites: [Object],
    stats: [Object],
    abilities: [Object] 
  } 
};
describe('Pokemon.getInitialProps', () => {
  it('should return the correct pokemon object', async () => {
    const result = await Pokemon.getInitialProps(ctx);

    expect(result).toEqual(expectedResult);
  });  
});