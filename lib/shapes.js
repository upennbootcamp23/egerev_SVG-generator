
/**
 * Class CSVGObject creates the shape necessary
 * The constructor takes @param {*} iWidth as the width and the @param {*} iHeight as the height
 * @returns nothing.
 */
class CSVGObject {
    constructor(iWidth, iHeight) {
        this.width = iWidth;
        this.height = iHeight;
        this.centerX = iWidth / 2;
        this.centerY = iHeight / 2;
        this.color = ``;
    }
}

/**
 * Class CImageBox creates the shape necessary - due to it being a 'child' class of the 'parent' class (CSVGObject)
 * The constructor takes @param {*} iWidth as the width and the @param {*} iHeight as the height
 * @returns nothing.
 */
class CImageBox extends CSVGObject{
    constructor(iWidth, iHeight) {
            super(iWidth, iHeight);
            this.childText = ' ';
            this.childShape= ' ';
        }

        /**
         * This function builds the text to display on the shape
         * @param {*} sText parameter for the user-inputted text
         * @param {*} sColor parameter for the color of the text
         * @param {*} sAnswerShape parameter for the shape
         */
        buildChildText(sText, sColor, sAnswerShape) {
            var iPosX = this.centerX ;
            var iPosY = 0 ;
            var iFontSize = 0;
    
            if (sAnswerShape == "Triangle") {
                var iPosY = this.centerY + 40 ;
                var iFontSize = 40;
            }  else {
                var iPosY = this.centerY + 20 ;
                var iFontSize = 50;
            }
    
            this.childText = `<text x = "${iPosX}" y = "${iPosY}" font-size = "${iFontSize}" text-anchor = "middle" fill = "${sColor}">${sText}</text>`
        }

        /**
         *  This function builds the shape.
         * @param {*} shape the parameter for the shape that needs to be displayed
         */
        buildChildShape(shape) {
            this.childShape = shape.render()
        }

        //the Render function used for rendering the image
        render() {
            var sXmins = "http://www.w3.org/2000/svg";
            var sXLink = "http://www.w3.org/1999/xlink";        
            var sTag = `width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}" xmlns="${sXmins}" xmlns:xlink="${sXLink}"`;
    
             return `<svg ${sTag}> ${this.childShape} ${this.childText}</svg>`; 
        }

    }

/**
 * This class "creates" the shape required
 * The constructor takes @param {*} iWidth as the width and the @param {*} iHeight as the height
 * @returns nothing.
 */
class CShape extends CSVGObject{
    constructor(iWidth, iHeight) {
        super(iWidth, iHeight);
    }
    //the setColor() function sets the color of the shape, with one parameter: color.
    setColor(color) {
        this.color = color;
    }
}

//This function creates the circle shape.
class CCircle extends CShape {
    render() {
        var iRadius = (this.height / 2) - 5;        
        return `<circle cx="${(this.centerX)}" cy="${(this.centerY)}" r="${(iRadius)}" style="fill:${(this.color)}" />`
    }
} 

//This function creates the triangle shape
class CTriangle extends CShape {
    render() {
        return `<polygon points="150,18 244,182 56,182" class="triangle" style="fill:${(this.color)}" />`
    }
} 

//This function creates the square shape
class CSquare extends CShape {
    render() {
        var iDiffY = this.height / 10;        
        var iSize = this.height - (iDiffY * 2);        
        var iDiffX = this.width - this.height - 30;

        return `<rect width="${(iSize)}" height="${(iSize)}" x="${(iDiffX)}" y="${(iDiffY)}" style="fill:${(this.color)}" />`
    }
}

module.exports = {CShape, CImageBox, CCircle, CSquare, CTriangle}
