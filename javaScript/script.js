const text = document.querySelector("#relaxText");

const container = document.querySelector("#container");
const totalTime = 7500;
const holdTime = 1500;
const breatheTime = 3000;

//the difference between className and classList is -->

//  Using "classList", you can add or remove a class without affecting any others the element may have. But if you assign "className", it will wipe out any existing classes while adding the new one (or if you assign an empty string it will wipe out all of them).

//  Assigning "className" can be a convenience for cases where you are certain no other classes will be used on the element

breatheAnimation = () => {
    text.innerHTML = "Breath In!";
    container.className = "container grow";

    setTimeout(() => {
        text.innerHTML = "Hold";
        
        setTimeout(() => {
            text.innerHTML = "Breathe Out!";
            container.className = "container shrink";
        }, holdTime)

    }, breatheTime)

}

breatheAnimation();

setInterval(breatheAnimation, totalTime);