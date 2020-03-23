import NP from 'number-precision'
import numeral from 'numeral'
import BigNumber from 'bignumber.js'
export default class Format {
    // 两数相乘并格式化
    static ride(number1, number2) {
        let num = new BigNumber(number1).times(new BigNumber(number2)).toString()
        return new BigNumber(num).toFormat(2) 
    };
    // 精度处理
    static except(number) {
        return new BigNumber(number).div(Math.pow(10, 12)).toString()
    };
    static _except(number) {
        return new BigNumber(number).div(Math.pow(10, 24)).toString()
    };
    // 两数相乘
    static exceptride(number1) {
        return new BigNumber(number1).times(Math.pow(10, 12)).toString()
    };
    // 精度处理并格式化
    static FormattingNumbers(number) {
        let num=new BigNumber(number).div(Math.pow(10, 12)).toString()
        return new BigNumber(num).toFormat() 
    };
    static decimalFormattingNumbers(number) {
        let num=new BigNumber(number).div(Math.pow(10, 12)).toString()
        return new BigNumber(num).toFormat(3) 
    };
    // 格式化
    static format(number) {
        return new BigNumber(number).toFormat() 
    };
    static decimal(number) {
        return new BigNumber(number).toFormat(3) 
        // return numeral(number).format('0,0.000')
    };
    static decimalTwo(number) {
        // return numeral(number).format('0,0.00')
        return new BigNumber(number).toFormat(2) 
    };
    // 减
    static minus(number1, number2) {
        return new BigNumber(number1).minus(new BigNumber(number2)).toString()
    };
    // 除
    static divide(number1, number2) {
        // return numeral(NP.divide(number1, number2)).format('0,0')
        let num=new BigNumber(number1).div(new BigNumber(number2)).toString()
        return new BigNumber(num).toFormat() 
    };
    // 倒数
    static Reciprocal(number) {
        // return numeral(NP.divide(1, number)).format('0,0.00')
        let num=new BigNumber(1).div(new BigNumber(number)).toString()
        return new BigNumber(num).toFormat(2) 
    };
    static backwards(number) {
        return new BigNumber(1).div(new BigNumber(number)).toString()
    };
    static Profit(cost, income, balance, exchangeRate) {
        // return (NP.plus(NP.divide(NP.minus(cost, income), Math.pow(10, 12)),
        //     NP.divide(NP.times(balance, exchangeRate), Math.pow(10, 12)))
        // )
        let minus=new BigNumber(cost).minus(new BigNumber(income)).toString()
        let times=new BigNumber(balance).times(new BigNumber(exchangeRate)).toString()
        let div1=new BigNumber(minus).div(Math.pow(10, 12)).toString()
        let div2=new BigNumber(times).div(Math.pow(10, 12)).toString()
       return new BigNumber(div1).plus(new BigNumber(div2)).toString()

    };
    static Plus(number1, number2) {
        // return (NP.plus(number1, number2))
        return new BigNumber(number1).plus(new BigNumber(number2)).toString()

    };
    static Divide(number1, number2) {
        // return (NP.divide(number1, number2))
        return new BigNumber(number1).div(new BigNumber(number2)).toString()
    };


}
