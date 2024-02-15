class Geomatry{
    constructor(parentContainer) {
        this.parentContainer=document.getElementById(parentContainer)
        this.parentContainer.addEventListener("click",this.handleClick.bind(this))
        
    }

    handleClick(event){
        const id=this.findIdOfClickedButton(event)
       const result= this.calculation(id)
       this.showResult(result)
    }

    findIdOfClickedButton(event){
      return event.target.id
    }

    calculation(id){
       if (id=="triangle" || id=="Pentagon" || id=="Rhombus")  {
       this.RomPenTri()
        
       }
       if (id=="Rectangle" || id=="Parrallelogram")  {
       this.RectPar()
        
       }
       if (id=="Ellipse")  {
        this.elipse()
        
       }
    }

    RomPenTri(b,h){
        return 0.5*b*h
    }
    RectPar(w,i){
        return w*i

    }
    elipse(a,b){
        return 3.14*a*b
    }
    showResult(result){
        if (result) {
            document.getElementById("result").innerText=result
        }else{
            document.getElementById("result").innerText="Give some value then try to calculate please"
        }
    

    }

}

const geomatryCalculation=new Geomatry("geometryContainer")