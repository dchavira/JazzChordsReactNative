import * as firebase from 'firebase';
const fbFunctions = {
    request(input) {
        var splitInput = input.toUpperCase().split(" ")
        var scales=[]
        var maj =['Major','MAJOR','MAJ','Maj']
        var dom=['Dominant','DOMINANT','DOM']
        var min=['Minor','MINOR','MIN','-','M']
        
        //If Format is A MAJ 7 (correctly split)
        if (splitInput.length > 2) {
            var root = splitInput[0]
            var quality = splitInput[1]
            var extension = splitInput[2]
        }
        //If format is AMAJ7 (one long string)
        else if(splitInput.length===1&&(splitInput[0][1]==="M"&&splitInput[0][2]==="A")){
            var correctedInput=[splitInput[0][0],splitInput[0][1]]
            var root = correctedInput[0]
            var quality = 'Major'
            var extension = splitInput[0].slice('4')
            
        }
        //IF format is A 7 with extensions
        else if ((splitInput.length===2 && !isNaN(splitInput[1][0]))){
            var root = splitInput[0]
            var quality = 'Dominant'
            var extension = splitInput[1]
            
        }
        //If format is A7
        else if(splitInput.length===1&&!isNaN(splitInput[0][1])){
            var correctedInput=[splitInput[0][0],splitInput[0][1]]
            var root = correctedInput[0]
            var quality = 'Dominant'
            var extension = splitInput[0].slice('1')
            
        }
        //If format is A-7
        else if(splitInput.length===1&&(splitInput[0][1]==="-")){
            var correctedInput=[splitInput[0][0],splitInput[0][1],splitInput[0][2]]
            var root = correctedInput[0]
            var quality = 'Minor'
            var extension = correctedInput[2]
            
        }
        //If format is Am7
        else if(splitInput.length===1&&(splitInput[0][1]==="M"&&splitInput[0][2]===null)){
            var correctedInput=[splitInput[0][0],splitInput[0][1],splitInput[0][2]]
            var root = correctedInput[0]
            var quality = 'Minor'
            var extension = correctedInput[2]
            
        }
        //If format is AMIN7 (one long string)
        else if(splitInput.length===1&&(splitInput[0][1]==="M"&&splitInput[0][2]==="I")){
            var correctedInput=[splitInput[0][0],splitInput[0][1]]
            var root = correctedInput[0]
            var quality = 'Minor'
            var extension = splitInput[0].slice('4')
        }
        
        var db = firebase.database();
        var roots = db.ref().child('Roots');
        try {
            roots.child(root).on('value',function(snap){
                
                var rootData=snap.val()
                //alert(extension)
                //Check if user searched a major chord and check what extension they want.
                if (maj.includes(quality)){
                    if (extension==='7'){
                        
                        snap.child('Major').child('seven').forEach(function(snapshot){
                            scales.push(snapshot.key)
                        })      
                    }
                    if (extension==='7#11'){
                        
                        snap.child('Major').child('sevenSharpEleven').forEach(function(snapshot){
                            scales.push(snapshot.key)
                        })      
                    }
                    if (extension==='7#5'){
                        
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
                    if (extension==='9'){
                        
                        snap.child('Dominant').child('nine').forEach(function(snapshot){
                            
                            scales.push(snapshot.key)
                        }) 
                          
                    }
                    if (extension==='7#5'){
                        
                        snap.child('Dominant').child('sevenSharpFive').forEach(function(snapshot){
                            
                            scales.push(snapshot.key)
                        }) 
                          
                    }
                    if (extension==='7#9'){
                        
                        snap.child('Dominant').child('sevenSharpNine').forEach(function(snapshot){
                            
                            scales.push(snapshot.key)
                        }) 
                          
                    }
                    if (extension==='7#11'){
                        
                        snap.child('Dominant').child('sevenSharpEleven').forEach(function(snapshot){
                            
                            scales.push(snapshot.key)
                        }) 
                          
                    }
                    if (extension==='7B9'){
                        
                        snap.child('Dominant').child('sevenFlatNine').forEach(function(snapshot){
                            
                            scales.push(snapshot.key)
                        }) 
                          
                    }
                    
                    if (extension==='7B13'){
                        
                        snap.child('Dominant').child('sevenFlatThirteen').forEach(function(snapshot){
                            
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
                    if (extension==='9'){
                        
                        snap.child('Minor').child('nine').forEach(function(snapshot){
                            
                            scales.push(snapshot.key)
                        }) 
                          
                    }
                }
            }
            
            
            )
        }
        catch (e) {
            
        }
        return scales;
    },
    scaleInfo(params){
        var db = firebase.database();
        var info=[];
        var scales = db.ref().child('Scales');
        try {
            scales.child(params).on('value',function(snap){
                snap.forEach(function(snapshot){
                    info.push(snapshot.val())
                })
            })
           // alert(info[0])
        }
        catch (e) {
                alert('nah')
            }
        return info;
    }
}

export default fbFunctions;