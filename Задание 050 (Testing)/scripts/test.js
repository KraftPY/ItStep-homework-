    mocha.setup('bdd');

    describe('_includes', () => {
        const   arrTest = [3, NaN, false, 'str', 0.123, undefined, Math, 1/0, -1/0, typeof(console)],
                arrForIncludes = [11, NaN,"str", false, 0.123, undefined, Infinity, -Infinity, null, "object", Math];

        function startTest(i) {
            it(`[11, NaN,"str", false, 0.123, undefined, Infinity, -Infinity, null, "object", Math]._includes(${arrTest[i]}) == ${arrForIncludes.includes(arrTest[i])}`, () => {
                chai.assert.equal(arrForIncludes.includes(arrTest[i]), _includes(arrForIncludes, arrTest[i]));
            });    
        }
        arrTest.forEach((el, index) => startTest(index));
    });
    
    describe('_concat', () => {
        const   arrTest = [
                    [3, 4, false], 
                    10, 
                    'text', 
                    [0], 
                    ['el1', 'el2'], 
                    ['el3', 'el4'],
                    {0: 'Ivanov', 1: 'Petrov'}, 
                    {0: 'Ivan', 1: 'Ignat', [Symbol.isConcatSpreadable]: true, length: 2},
                    Math
                ],
                arrForConcat = [1, 2, 'string', true];   

        arrTest[4][Symbol.isConcatSpreadable] = false;
        arrTest[5][Symbol.isConcatSpreadable] = true;

        it(`${JSON.stringify(arrForConcat)}._concat([3, 4, false]) == ${JSON.stringify(arrForConcat.concat(arrTest[0]))}`, () => {
            chai.assert.equal(JSON.stringify(arrForConcat.concat(arrTest[0])), JSON.stringify(_concat(arrForConcat, arrTest[0])));
        });
        it(`${JSON.stringify(arrForConcat)}._concat(10) == ${JSON.stringify(arrForConcat.concat(arrTest[1]))}`, () => {
            chai.assert.equal(JSON.stringify(arrForConcat.concat(arrTest[1])), JSON.stringify(_concat(arrForConcat, arrTest[1])));
        });
        it(`${JSON.stringify(arrForConcat)}._concat(10, 'text') == ${JSON.stringify(arrForConcat.concat(arrTest[1], arrTest[2]))}`, () => {
            chai.assert.equal(JSON.stringify(arrForConcat.concat(arrTest[1], arrTest[2])), JSON.stringify(_concat(arrForConcat, arrTest[1], arrTest[2])));
        });
        it(`${JSON.stringify(arrForConcat)}._concat([0]) == ${JSON.stringify(arrForConcat.concat(arrTest[3]))}`, () => {
            chai.assert.equal(JSON.stringify(arrForConcat.concat(arrTest[3])), JSON.stringify(_concat(arrForConcat, arrTest[3])));
        });
        it(`${JSON.stringify(arrForConcat)}._concat(['el1', 'el2'][Symbol.isConcatSpreadable] = false) == ${JSON.stringify(arrForConcat.concat(arrTest[4]))}`, () => {
            chai.assert.equal(JSON.stringify(arrForConcat.concat(arrTest[4])), JSON.stringify(_concat(arrForConcat, arrTest[4])));
        });
        it(`${JSON.stringify(arrForConcat)}._concat(['el3', 'el4'][Symbol.isConcatSpreadable] = true) == ${JSON.stringify(arrForConcat.concat(arrTest[5]))}`, () => {
            chai.assert.equal(JSON.stringify(arrForConcat.concat(arrTest[5])), JSON.stringify(_concat(arrForConcat, arrTest[5])));
        });
        it(`${JSON.stringify(arrForConcat)}._concat({0: 'Ivanov', 1: 'Petrov'}) == ${JSON.stringify(arrForConcat.concat(arrTest[6]))}`, () => {
            chai.assert.equal(JSON.stringify(arrForConcat.concat(arrTest[6])), JSON.stringify(_concat(arrForConcat, arrTest[6])));
        });
        it(`${JSON.stringify(arrForConcat)}._concat({0: 'Ivan', 1: 'Ignat', [Symbol.isConcatSpreadable]: true, length: 2}) == ${JSON.stringify(arrForConcat.concat(arrTest[7]))}`, () => {
            chai.assert.equal(JSON.stringify(arrForConcat.concat(arrTest[7])), JSON.stringify(_concat(arrForConcat, arrTest[7])));
        });
        it(`${JSON.stringify(arrForConcat)}._concat(${JSON.stringify(arrTest)}) == ${JSON.stringify(arrForConcat.concat(...arrTest))}`, () => {
            chai.assert.equal(JSON.stringify(arrForConcat.concat(...arrTest)), JSON.stringify(_concat(arrForConcat, ...arrTest)));
        });
        it(`${JSON.stringify(arrForConcat)}._concat(Math) == ${JSON.stringify(arrForConcat.concat(arrTest[8]))}`, () => {
            chai.assert.equal(JSON.stringify(arrForConcat.concat(arrTest[8])), JSON.stringify(_concat(arrForConcat, arrTest[8])));
        });
    });

    describe('_splice', () => {
        it(`[1,'string', true, ['1', '2']]._splice([1,'string', true, ['1', '2']], 0, 1) == [1]`, () => {
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']].splice(0, 1)), JSON.stringify(_splice([1,'string', true, ['1', '2']], 0, 1)));
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']]), JSON.stringify([1,'string', true, ['1', '2']]));
        });

        it(`[1,'string', true, ['1', '2']]._splice([1,'string', true, ['1', '2']], 1, 2) == ['string', true]`, () => {
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']].splice(1, 1)), JSON.stringify(_splice([1,'string', true, ['1', '2']], 1, 1)));
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']]), JSON.stringify([1,'string', true, ['1', '2']]));
        });

        it(`[1,'string', true, ['1', '2']]._splice([1,'string', true, ['1', '2']], 1, 0) == []`, () => {
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']].splice(1, 0)), JSON.stringify(_splice([1,'string', true, ['1', '2']], 1, 0)));
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']]), JSON.stringify([1,'string', true, ['1', '2']]));
        });

        it(`[1,'string', true, ['1', '2']]._splice([1,'string', true, ['1', '2']], 2) == [true, ['1', '2']]`, () => {
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']].splice(2)), JSON.stringify(_splice([1,'string', true, ['1', '2']], 2)));
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']]), JSON.stringify([1,'string', true, ['1', '2']]));
        });

        it(`[1,'string', true, ['1', '2']]._splice([1,'string', true, ['1', '2']], -2, 1) == [true]`, () => {
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']].splice(-2, 1)), JSON.stringify(_splice([1,'string', true, ['1', '2']], -2, 1)));
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']]), JSON.stringify([1,'string', true, ['1', '2']]));
        });

        it(`[1,'string', true, ['1', '2']]._splice([1,'string', true, ['1', '2']], -10, 1) == [1]`, () => {
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']].splice(-10, 1)), JSON.stringify(_splice([1,'string', true, ['1', '2']], -10, 1)));
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']]), JSON.stringify([1,'string', true, ['1', '2']]));
        });

        it(`[1,'string', true, ['1', '2']]._splice([1,'string', true, ['1', '2']], 1, 2, "text", false) == ['string', true]`, () => {
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']].splice(1, 2, "text", false)), JSON.stringify(_splice([1,'string', true, ['1', '2']], 1, 2, "text", false)));
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']]), JSON.stringify([1,'string', true, ['1', '2']]));
        });

        it(`[1,'string', true, ['1', '2']]._splice([1,'string', true, ['1', '2']], 2, 2, "text") == [true, ['1', '2']]`, () => {
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']].splice(2, 2, "text")), JSON.stringify(_splice([1,'string', true, ['1', '2']], 2, 2, "text")));
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']]), JSON.stringify([1,'string', true, ['1', '2']]));
        });

        it(`[1,'string', true, ['1', '2']]._splice([1,'string', true, ['1', '2']], 2, 0, "text",false) == []`, () => {
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']].splice(2, 0, "text",false)), JSON.stringify(_splice([1,'string', true, ['1', '2']], 2, 0, "text",false)));
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']]), JSON.stringify([1,'string', true, ['1', '2']]));
        });

        it(`[1,'string', true, ['1', '2']]._splice([1,'string', true, ['1', '2']], -1, 0, "text",false) == []`, () => {
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']].splice(-1, 0, "text",false)), JSON.stringify(_splice([1,'string', true, ['1', '2']], -1, 0, "text",false)));
            chai.assert.equal(JSON.stringify([1,'string', true, ['1', '2']]), JSON.stringify([1,'string', true, ['1', '2']]));
        });

    });


    mocha.run();
