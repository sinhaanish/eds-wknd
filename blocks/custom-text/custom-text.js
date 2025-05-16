export default function decorate(block) {
    // Create a new element to display the current date and time
    console.log('block-->',block)
    alert("block:::",block)
    const dateTimeElement = document.createElement('div');
    dateTimeElement.style.fontSize = '16px';
    dateTimeElement.style.fontWeight = 'bold';
    dateTimeElement.style.marginTop = '10px';
  
    // Function to update the date and time
    const updateDateTime = () => {
      const now = new Date();
      dateTimeElement.textContent = `Current Date and Time: ${now.toLocaleString()}`;
    };
  
    // Update the date and time immediately
    updateDateTime();
  
    // Append the date and time element to the block
    block.appendChild(dateTimeElement);
  
    // Optionally, update the time every second (if needed)
    setInterval(updateDateTime, 1000);
  }