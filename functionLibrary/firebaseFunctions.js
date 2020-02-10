import * as firebase from 'firebase';
const fbFunctions = {
    request(input) {
        var splitInput = input.toUpperCase().split(" ")
        var root = splitInput[0]
        var scales=[]
        var maj =['Major','MAJOR','MAJ','Maj','M']
        if (splitInput.length > 2) {
            var quality = splitInput[1]
            var extension = splitInput[2]
        }
        else{
            var quality = 'Dominant'
            var extension = splitInput[2]
        }
        var db = firebase.database();
        var roots = db.ref().child('Roots');
        try {
            roots.child(root).on('value',function(snap){
                var rootData=snap.val()
                //Check if user searched a major chord and check what extension they want.
                if (maj.includes(quality)){
                    var rootQuality=rootData.Major
                    if (extension==='7'){
                        //alert(rootQuality.seven)
                        
                        snap.child('Major').child('seven').forEach(function(snapshot){
                            scales.push(snapshot.val())
                        })
                       
                        
                    }
                }
            })
        }
        catch (e) {
            return ['lol']
        }
        return scales;
    }
}

export default fbFunctions;