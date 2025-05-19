function temp() {
    const a = document.getElementById("inp").value; // Correctly declare 'a' with 'const'
    const b = `Hello ${a}! Welcome to our website.`; // Use 'a' in the template string
    document.getElementById("para1").innerHTML = b; // Update 'para1' with
    const firstName = "Anshul";
    const lastName = "Gola";
    const age = 18;
    d=`My name is ${firstName} ${lastName} and I am ${age} years old.`;
    document.getElementById("para2").innerHTML=d;
    e=parseInt(Math.random()*6+1)
    document.getElementById("para3").innerHTML=e;
    price = 50;
    discount = 10;
    a1=`The price of the product is $${price} and the discount is $${discount}`;
    document.getElementById("para4").innerHTML=a1;
    b1=`This is a multiline string <br>
    Template strings make it easy <br>
    to format text over multiple lines.`
    document.getElementById("para5").innerHTML=b1;
    a2=`List of items :<br>
    - Apples<br>
    - Bananas<br>
    - Oranges`
    document.getElementById("para6").innerHTML=a2;
    length = 10;
    width = 5;
    perimeter=2*(length + width)
    area=(length*width)
    b2=`The perimeter of the rectangle is ${perimeter}, and the area is ${area}`
    document.getElementById("para7").innerHTML=b2;
    
    c1=document.getElementById("inp1").value
    c2="Good morning!"
    c3="Good Afternoon!"
    c4="Good Night!"
    if (c1<12)
        document.getElementById("para8").innerHTML=c2
    else if(c1>12 && c1<18)
        document.getElementById("para8").innerHTML=c3
    else
        document.getElementById("para8").innerHTML=c4
}

function temp2()
{
  c=document.getElementById("inp2").value
  d=c*c
  e=`The Square of ${c} is ${d}`
  document.getElementById("para9").innerHTML=e
  
  age=document.getElementById("inp3").value
  c5=20-age
  c6=`In ${c5} years, you will be 20 years old`
  if (age>20)
    document.getElementById("para10").innerHTML="You are already above 20"
  else
    document.getElementById("para10").innerHTML=c6
}
