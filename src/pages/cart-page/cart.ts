export class Cart{
    static orderLines = [];
    static getOrderLines()
    {       
        return this.orderLines ;
    }
    static addOrderLine(orderLine){ this.orderLines.push(orderLine);}
}