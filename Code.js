// Creating a result container
const results = document.getElementsByClassName('x8gbvx8 x78zum5 x1q0g3np x1a02dak x1nhvcw1 x1rdy4ex xcud41i x4vbgl9 x139jcc6');

// Initialization of output
let output = '';

// Looping through all available results in marketplace search
for (let i = 0; i < results[0].childNodes.length; i++) {
  try {
    // Assigning the current item in the result to a variable
    const item = results[0].childNodes[i].getElementsByTagName('span')[0].getElementsByTagName('span');
  
    let price = parseInt(item[1].innerText.replace('C$', '').replace(',', ''));
    
    if (price < 3000) {
      price *= 4.4;
    }
    
    if (isNaN(price)) {
      continue;
    }
    
    // Concatenating output for better results in Excel
    output += `${i} ${price} ${parseInt(item[item.length - 6].innerText.match(/\d*/)[0])} '${item[item.length - 6].innerText.replace(item[item.length - 6].innerText.match(/\d*/)[0], '').trim()}' '${item[item.length - 3].innerText.replace(', QC', '')}' ${parseInt(item[item.length - 1].innerText.match(/(\d*K*) km/)[1].replace('K', '000'))}\n`;
  } catch (error) {
    console.log('');
  }
}

// Creating and adding an <a> HTML tag to make the result downloadable
const link = document.createElement("a");
const content = output;
const file = new Blob([content], { type: 'text/plain' });
link.href = URL.createObjectURL(file);
link.download = "sample.txt";
link.click();
URL.revokeObjectURL(link.href);
