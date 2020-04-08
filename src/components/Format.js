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
    static integer(number) {
        return new BigNumber(number).toFixed(0) 
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
        let num=new BigNumber(number1).div(new BigNumber(number2)).toString()
        return new BigNumber(num).toFormat() 
    };
    // 年化率
    static exchangeRatedivide(number1, number2) {
        let num=new BigNumber(number1).div(new BigNumber(number2)).toString()
        return num
    };
    static AnnualizedRate(number) {
        let num=new BigNumber(number).div(7).toString()
        let num2=new BigNumber(num).times(365).toString()
        return new BigNumber(num2).toFormat(4) 
    };
    // 倒数
    static Reciprocal(number) {
        let num=new BigNumber(1).div(new BigNumber(number)).toString()
        return new BigNumber(num).toFormat(2) 
    };
    static backwards(number) {
        return new BigNumber(1).div(new BigNumber(number)).toString()
    };
    static Profit(cost, income, balance, exchangeRate) {
        let minus=new BigNumber(cost).minus(new BigNumber(income)).toString()
        let times=new BigNumber(balance).times(new BigNumber(exchangeRate)).toString()
        let div1=new BigNumber(minus).div(Math.pow(10, 12)).toString()
        let div2=new BigNumber(times).div(Math.pow(10, 12)).toString()
       return new BigNumber(div1).plus(new BigNumber(div2)).toString()

    };
    // 加
    static Plus(number1, number2) {
        return new BigNumber(number1).plus(new BigNumber(number2)).toString()

    };
    // 乘
    static times(number1, number2) {
        return new BigNumber(number1).times(new BigNumber(number2)).toString()

    };
    static Divide(number1, number2) {
        return new BigNumber(number1).div(new BigNumber(number2)).toString()
    };
    // 出块速度
    static BlockVelocity(number) {
        return new BigNumber(number).div(3).toString()
    };


}
