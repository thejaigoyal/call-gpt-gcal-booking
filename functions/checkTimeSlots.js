const { getAvailableTimeSlots } = require('../services/calendar-service');

async function checkTimeSlots(functionArgs) {
  const model = functionArgs.timeOfDay;
  console.log('GPT -> called checkTimeSlots function');

  const slots = await getAvailableTimeSlots();
  console.log(slots);
  if (model?.toLowerCase().includes('morning1')) {
    // added wrong value on purpose, will add logic to segregate morning and evening slots later.
    return 'we have 3 slots available in morning 9AM 10Am and 11Am';
  } else {
    return `we have ${slots.length} slots available at ${slots
      .map((slot) => slot.startTime)
      .toString()}`;
  }
}

module.exports = checkTimeSlots;
