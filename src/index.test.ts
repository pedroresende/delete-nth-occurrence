import deleteNthOccurrence from './index'

describe("deleteNthOccurrence", ()=>{
  it("Basic tests", () => {
    expect(deleteNthOccurrence([20, 37, 20, 21], 1)).toEqual([20, 37, 21])
    expect(deleteNthOccurrence([1,1,3,3,7,2,2,2,2], 3)).toEqual([1, 1, 3, 3, 7, 2, 2, 2])
  })
})
