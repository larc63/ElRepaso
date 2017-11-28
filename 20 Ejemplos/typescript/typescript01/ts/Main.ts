export class Main{
    update(): void {
        document.getElementById("count").innerHTML = "" + this.count;
    }
    count = 0;
    public increment(){
        this.count ++;
        this.update();
    }

    constructor(){
        document.getElementById("button").addEventListener("click", () =>{
            console.log("clicked the button");
            this.increment();
        })
        this.update();
    }
}

let m = new Main();