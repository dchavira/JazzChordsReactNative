import * as firebase from 'firebase';
const fbFunctions = {
    request(input) {
        var splitInput = input.toUpperCase().split(" ")
        
        var scales=[]
        var maj =['Major','MAJOR','MAJ','Maj']
        var dom=['Dominant','DOMINANT','DOM']
        var min=['Minor','MINOR','MIN','-','M']
        //If Format is A MAJ 7
        if (splitInput.length > 2) {
            var root = splitInput[0]
            var quality = splitInput[1]
            var extension = splitInput[2]
        }
        //If format is AMAJ7
        else if(splitInput.length===1&&(splitInput[0][1]==="M"&&splitInput[0][2]==="A")){
            var correctedInput=[splitInput[0][0],splitInput[0][1]]
            var root = correctedInput[0]
            var quality = 'Major'
            var extension = splitInput[0].slice('4')
            //alert(extension) 
            
        }
        //IF format is A 7
        else if ((splitInput.length===2 && !isNaN(splitInput[1]))){
            var root = splitInput[0]
            var quality = 'Dominant'
            var extension = splitInput[1]
            
        }
        //If format is A7
        else if(splitInput.length===1&&!isNaN(splitInput[0][1])){
            var correctedInput=[splitInput[0][0],splitInput[0][1]]
            var root = correctedInput[0]
            var quality = 'Dominant'
            var extension = correctedInput[1]
            //alert(correctedInput) 
            
        }
        //If format is A-7
        else if(splitInput.length===1&&(splitInput[0][1]==="-")){
            var correctedInput=[splitInput[0][0],splitInput[0][1],splitInput[0][2]]
            var root = correctedInput[0]
            var quality = 'Minor'
            var extension = correctedInput[2]
            //alert(correctedInput)    
        }
        //If format is Am7
        else if(splitInput.length===1&&(splitInput[0][1]==="M")){
            var correctedInput=[splitInput[0][0],splitInput[0][1],splitInput[0][2]]
            var root = correctedInput[0]
            var quality = 'Minor'
            var extension = correctedInput[2]
            //alert(correctedInput)
        }
       
        var db = firebase.database();
        var roots = db.ref().child('Roots');
        try {
            roots.child(root).on('value',function(snap){
                
                var rootData=snap.val()
                
                //Check if user searched a major chord and check what extension they want.
                if (maj.includes(quality)){
                    if (extension==='7'){
                        //alert(rootQuality.seven)
                        
                        snap.child('Major').child('seven').forEach(function(snapshot){
                            scales.push(snapshot.key)
                        })      
                    }
                    if (extension==='7#11'){
                        //alert(rootQuality.seven)
                        
                        snap.child('Major').child('sevenSharpEleven').forEach(function(snapshot){
                            scales.push(snapshot.key)
                        })      
                    }
                    if (extension==='7#5'){
                        //alert(rootQuality.seven)
                        
                        snap.child('Major').child('sevenSharpFive').forEach(function(snapshot){
                            scales.push(snapshot.key)
                        })      
                    }
                }
                
                else if (dom.includes(quality)){
                    
                    if (extension==='7'){
                        
                        snap.child('Dominant').child('seven').forEach(function(snapshot){
                            
                            scales.push(snapshot.key)
                        }) 
                          
                    }
                }
                else if (min.includes(quality)){
                    
                    if (extension==='7'){
                        
                        snap.child('Minor').child('seven').forEach(function(snapshot){
                            
                            scales.push(snapshot.key)
                        }) 
                          
                    }
                }
            }
            
            
            )
        }
        catch (e) {
            alert('Please type in a chord')
        }
        return scales;
    }
}

export default fbFunctions;