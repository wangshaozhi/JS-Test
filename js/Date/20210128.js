class Chameleon{
    static colorChange(newColor){
        this.newColor =  newColor;
        return this.newColor;
    }
    constructor({newColor = 'green'}={}){
        this.newColor = newColor
    }
}

const freddie = new Chameleon({newColor:'purple'})
//colorChange是静态方法，不是实例方法，需要Chameleon.colorChange才能调用
console.log(freddie.newColor)
console.log(Chameleon.colorChange('orange'))