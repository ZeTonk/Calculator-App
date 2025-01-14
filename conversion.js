// capture input value from the form
function convert()
{
    let input_number = document.getElementById('inputValue').value;
    console.log(input_Value);
    let from_Unit = document.getElementById('fromUnit').value;
    console.log(from_Unit);
    let to_Unit = document.getElementById('toUnit').value;
    console.log(to_Unit);

    // call convertToMeters function
    const resultInMeters= convertToMeters(Number(input_number), from_Unit);

    // display result
    document.getElementById("result").innerHTML = input_number + " " + 
    from_Unit + " = " + resultInMeters + " " + 
}

// function to convert any unit length to meters

function convertToMeters(num, fromUnit){
    if(fromUnit === "kilometers"){
        return num * 1000
    }
    if(fromUnit === "centimeters"){
        return num / 100
    }
    if(fromUnit === "feet"){
        return num / 3.281
    }
    if(fromUnit === "inches"){
        return num / 39.3701
    }

    return num;
}
