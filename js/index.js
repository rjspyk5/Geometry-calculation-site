class Geomatry{
    constructor(parentContainer) {
        this.parentContainer=document.getElementById(parentContainer)
        this.parentContainer.addEventListener("click",this.handleClick.bind(this))
        
    }

    handleClick(event){
        const id=this.findIdOfClickedButton(event);
        if (id=="triangle" || id=="Pentagon" || id=="Rhombus"||id=="Rectangle" || id=="Parrallelogram" || id=="Ellipse") {
            const firstInput=event.target.parentNode.children[3].children[0].value;
            const secondInput=event.target.parentNode.children[3].children[2].value; 
            const result= this.calculation(id,firstInput,secondInput)          
            this.showResult(result)
        }
      
    }

    findIdOfClickedButton(event){
        const id=event.target.id;
        return id;
       
     
    }

    calculation(id,f,s){
   
       if (id=="triangle" || id=="Pentagon" || id=="Rhombus")  {
       return this.RomPenTri(f,s)
        
       }
       if (id=="Rectangle" || id=="Parrallelogram")  {
       return this.RectPar(f,s)
        
       }
       if (id=="Ellipse")  {
        return this.elipse(f,s)
        
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