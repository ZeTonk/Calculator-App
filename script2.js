// function to convert any unit to meters
function convertToMeters(value, fromUnit) {
        if(fromUnit === "kilometers"){
                return value * 1000;
        }
        if (fromUnit === "centimeters"){
                return value / 100;
        }
        if (fromUnit === "feet"){
                return value / 3.280804
        }
        if (fromUnit === "inches"){
                return value / 39.3701;
        }
        return value;
}

// function to convert from meters to other units
function convertFromMeters(meters,toUnit){
        if (toUnit === "kilometers"){
                return meters / 1000;
        }
        if (toUnit === "centimeters"){
                return meters * 100;
        }
        if (toUnit === "feet"){
                return meters *3.28084;
        }
        if (toUnit === "inches"){
                return meters * 39.3701;
        }
        return meters;
}
// capture input value from the form
function convert() {
        let input_number = document.getElementById('input_Value').value;
        console.log(input_number);
        let from_Unit = document.getElementById('fromUnit').value;
        console.log(from_Unit);
        let to_Unit = document.getElementById('toUnit').value;
        console.log(to_Unit);


        // call convertToMeters()
        let valueInMeters= convertToMeters(Number(input_number),from_Unit)

        // convert meters into the target unit
        let resultInMeters = convertFromMeters(valueInMeters, to_Unit)

        // display result
        document.getElementById('result').innerHTML= input_number + " " + from_Unit + " = " + resultInMeters + " " + to_Unit;
}
