function decision(question, doOK, doCancel){
    if(question === "OK") doOK()
        else 
            doCancel();
    }

    decision(
        "OK",
        function (){console.log("You agreed"); },
        function (){console.log("You canceled this execution"); }
    );

    decision(
        "Cancel",
        function (){console.log("You agreed"); },
        function (){console.log("You canceled this execution"); }
    );