random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
console.log(random_number);

document.getElementById("object").innerHTML = "Sketch to be drawn" + sketch;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

