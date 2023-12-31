//importing everything important for the tests to succeed
const {CShape, CImageBox, CCircle, CTriangle, CSquare} = require("./shapes.js");

//setting the width and height
const iWidth = 300;
const iHeight = 200;

//Shape Test
describe('shapes', () => {
    describe ('CImageBox', () => {
        test('passed render shape test', () => {
            const CShapeUser = new CImageBox(iWidth, iHeight);
            var sColor = "orange";
            expect(CShapeUser.render()).toEqual(`<svg width=\"300\" height=\"200\" viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">    </svg>`);
                                                              
        })
    })
    
    //Checking Text value and color Test
    describe ('Text', () => {
        test('passed text value and color setting test', () => {
            const CTextUser = new CImageBox(iWidth, iHeight);
            var sText = "TXT";
            var sColor = "red";
            var sShape = "Triangle";
            CTextUser.buildChildText(sText, sColor, sShape);
            expect(CTextUser.childText).toEqual(`<text x = \"150\" y = \"140\" font-size = \"40\" text-anchor = \"middle\" fill = \"${(sColor)}\">${(sText)}</text>`);                                                  
        })
    })

    //Checking Shape Color value Test
    describe ('Shape Color', () => {
        test('passed shape color setting test', () => {
            const CShapeColorUser = new CShape(iWidth, iHeight);
            var sColor = "red";
            CShapeColorUser.setColor(sColor);
            expect(CShapeColorUser.color).toEqual(`${(sColor)}`);                                                  
        })
    })

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
})
