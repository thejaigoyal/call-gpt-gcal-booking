const {bookTimeSlot} = require('../services/calendar-service');

async function bookAppointment(functionArgs) {
  const time = functionArgs.time;
  const name = functionArgs.name;
  console.log('GPT -> called checkTimeSlots function');
  
  if (time && name) {
    await bookTimeSlot(time, name);
    return 'appointment confirmed';
  } else {
    return 'didn\'t caught the details, please ask again for time and name';
  }
}

module.exports = bookAppointment;