//importing everything important for the tests to succeed
const {CCircle, CTriangle, CSquare} = require("./shapes.js");

//setting the width and height
const iWidth = 300;
const iHeight = 200;

//Circle Test
describe ('Circle', () => {
    test('passed render circle test', () => {
        const CShapeUser = new CCircle(iWidth, iHeight);
        var sColor = "red";
        CShapeUser.setColor(sColor);
        expect(CShapeUser.render()).toEqual(`<circle cx="150" cy="100" r="95" style="fill:${(CShapeUser.color)}" />`);
                                                          
    })
})

//Triangle Test
describe ('Triangle', () => {
    test('passed render triangle test', () => {
        const CShapeUser = new CTriangle(iWidth, iHeight);
        var sColor = "blue";
        CShapeUser.setColor(sColor);
        expect(CShapeUser.render()).toEqual(`<polygon points="150,18 244,182 56,182" class="triangle" style="fill:${(CShapeUser.color)}" />`);
                                                     
    })
})

//Square Test
describe ('Square', () => {
    test('passed render square test', () => {
        const CShapeUser = new CSquare(iWidth, iHeight);
        var sColor = "yellow";
        CShapeUser.setColor(sColor);
        expect(CShapeUser.render()).toEqual(`<rect width="160" height="160" x="70" y="20" style="fill:${(CShapeUser.color)}" />`);
    })
})