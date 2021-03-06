/**
 * Created by JinWYP on 7/27/16.
 */

var expect    = require('chai').expect;
var colorConverter = require('../../../business-libs/colorConverter');


describe('Color Code Converter', function() {

    describe('RGB to Hex conversion', function() {
        it('converts the basic colors', function() {
            var redHex   = colorConverter.rgbToHex(255, 0, 0);
            var greenHex = colorConverter.rgbToHex(0, 255, 0);
            var blueHex  = colorConverter.rgbToHex(0, 0, 255);

            expect(redHex).to.equal('ff0000');
            expect(greenHex).to.equal('00ff00');
            expect(blueHex).to.equal('0000ff');
        });
    });

    describe('Hex to RGB conversion', function() {
        it('converts the basic colors', function() {
            var red   = colorConverter.hexToRgb('ff0000');
            var green = colorConverter.hexToRgb('00ff00');
            var blue  = colorConverter.hexToRgb('0000ff');

            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);
        });
    });
});
