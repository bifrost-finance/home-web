import NP from 'number-precision'
import numeral from 'numeral'
export default class Format {
    // 两数相乘并格式化
    static ride(number1, number2) {
        return numeral(NP.times(number1, number2)).format('0,0.00')
    };
    // 精度处理
    static except(number) {
        return NP.divide(number, Math.pow(10, 12))
    };
    static exceptride(number) {
        return NP.times(number, Math.pow(10, 12))
    };
    // 精度处理并格式化
    static FormattingNumbers(number) {
        return numeral(NP.divide(number, Math.pow(10, 12))).format('0,0')
    };
    static decimalFormattingNumbers(number) {
        return numeral(NP.divide(number, Math.pow(10, 12))).format('0,0.000')
    };
    // 精度处理并美元格式化
    static $FormattingNumbers(number) {
        return numeral(NP.divide(number, Math.pow(10, 12))).format('$0,0')
    };
    // 格式化
    static format(number) {
        return numeral(number).format('0,0')
    };
    static decimal(number) {
        return numeral(number).format('0,0.000')
    };
    static decimalTwo(number) {
        return numeral(number).format('0,0.00')
    };
    static $format(number) {
        return numeral(number).format('$0,0')
    };
    // 减
    static minus(number1, number2) {
        return NP.minus(number1, number2)
    };
    // 除
    static divide(number1, number2) {
        return numeral(NP.divide(number1, number2)).format('0,0') 
    };
    // 倒数
    static Reciprocal(number) {
        return numeral(NP.divide(1, number)).format('0,0.00') 
    };
    static backwards(number) {
        return NP.divide(1, number)
    };
    static Profit(cost, income, balance, exchangeRate) {
        return (NP.plus(NP.divide(NP.minus(cost, income), Math.pow(10, 12)),
            NP.divide(NP.times(balance, exchangeRate), Math.pow(10, 12)))
            )
    };

}
